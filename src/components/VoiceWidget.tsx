"use client";

import React, { useState } from "react";
import { useRetell } from "@/hooks/useRetell";
import { Mic, Phone, PhoneOff, Loader2, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const VoiceWidget = () => {
    const { status, error, startCall, stopCall } = useRetell();
    const [isHovered, setIsHovered] = useState(false);

    const isIdle = status === "idle";
    const isConnecting = status === "connecting";
    const isActive = status === "active";
    const isError = status === "error";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 p-4">
            <AnimatePresence>
                {isHovered && isIdle && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -10 }}
                        className="mb-2 flex items-center gap-2 rounded-xl bg-black/90 px-4 py-2 border border-white/10 shadow-xl backdrop-blur-md"
                    >
                        <Info className="w-4 h-4 text-red-500" />
                        <span className="text-xs font-semibold tracking-wide text-white/90">
                            Talk to us
                        </span>
                    </motion.div>
                )}

                {(isActive || isConnecting) && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="flex items-center gap-3 rounded-full bg-black/90 px-6 py-3 backdrop-blur-xl border border-red-500/20 shadow-2xl"
                    >
                        {isActive ? (
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1 items-center">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                height: [4, 12, 4],
                                                backgroundColor: ["#ef4444", "#ffffff", "#ef4444"],
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                repeat: Infinity,
                                                delay: i * 0.1,
                                            }}
                                            className="w-1 bg-red-500 rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-white/90">
                                    On Call...
                                </span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 text-red-500 animate-spin" />
                                <span className="text-sm font-medium text-white/90">
                                    Connecting...
                                </span>
                            </div>
                        )}

                        <button
                            onClick={stopCall}
                            className="ml-2 p-1.5 rounded-full hover:bg-red-500/20 transition-colors"
                        >
                            <PhoneOff className="w-4 h-4 text-red-500" />
                        </button>
                    </motion.div>
                )}

                {isError && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-red-400 bg-red-950/40 px-3 py-1.5 rounded-lg border border-red-500/20"
                    >
                        {error || "Call failed"}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                onClick={isActive ? stopCall : startCall}
                className={cn(
                    "group relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300",
                    isActive
                        ? "bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                        : "bg-black border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                )}
            >
                {/* Pulsing rings for active state */}
                {isActive && (
                    <>
                        <motion.div
                            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-2xl bg-red-600"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            className="absolute inset-0 rounded-2xl bg-red-600"
                        />
                    </>
                )}

                <div className="relative z-10">
                    {isActive ? (
                        <PhoneOff className="h-7 w-7 text-white" />
                    ) : isConnecting ? (
                        <Loader2 className="h-7 w-7 animate-spin text-red-500" />
                    ) : (
                        <Phone className={cn("h-7 w-7 transition-colors duration-300", isHovered ? "text-red-500" : "text-white")} />
                    )}
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
        </div>
    );
};
