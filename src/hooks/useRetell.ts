"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { RetellWebClient } from "retell-client-js-sdk";

export type CallStatus = "idle" | "connecting" | "active" | "error";

export const useRetell = () => {
    const [status, setStatus] = useState<CallStatus>("idle");
    const [error, setError] = useState<string | null>(null);
    const clientRef = useRef<RetellWebClient | null>(null);

    useEffect(() => {
        clientRef.current = new RetellWebClient();

        clientRef.current.on("call_started", () => {
            console.log("Call started");
            setStatus("active");
        });

        clientRef.current.on("call_ended", () => {
            console.log("Call ended");
            setStatus("idle");
        });

        clientRef.current.on("error", (error) => {
            console.error("Retell error:", error);
            setError(typeof error === "string" ? error : "A call error occurred");
            setStatus("error");
        });

        return () => {
            if (clientRef.current) {
                clientRef.current.stopCall();
            }
        };
    }, []);

    const startCall = useCallback(async () => {
        if (!clientRef.current) return;

        try {
            setStatus("connecting");
            const response = await fetch("/api/create-web-call", {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to create web call");
            }

            const data = await response.json();

            await clientRef.current.startCall({
                accessToken: data.access_token,
            });
        } catch (err: any) {
            console.error("Start call error:", err);
            setError(err.message || "Failed to start call");
            setStatus("error");
        }
    }, []);

    const stopCall = useCallback(() => {
        if (clientRef.current) {
            clientRef.current.stopCall();
            setStatus("idle");
        }
    }, []);

    return {
        status,
        error,
        startCall,
        stopCall,
    };
};
