import { VoiceWidget } from "@/components/VoiceWidget";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8 text-center">
      <main className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-6">
          Voice AI Widget
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Experience our AI-powered voice assistant. Click the phone icon in the bottom right to start a conversation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/widget"
            className="px-6 py-3 rounded-xl bg-black dark:bg-zinc-50 text-white dark:text-black font-semibold transition-transform hover:scale-105"
          >
            Open Widget In New Page
          </a>
        </div>
      </main>
      
      {/* Include the widget here so it shows on the homepage too */}
      <VoiceWidget />
    </div>
  );
}
