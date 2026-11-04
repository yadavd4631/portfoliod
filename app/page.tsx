import IntroScreen from '@/components/IntroScreen';
import DevOpsTerminal from '@/components/DevOpsTerminal';

export default function Home() {
  return (
    <>
      <IntroScreen />
      <main
        suppressHydrationWarning
        className="h-screen w-screen bg-[#030610] text-slate-300 flex flex-col p-2 sm:p-4 overflow-hidden select-none"
      >
        <div
          suppressHydrationWarning
          className="flex-1 w-full max-w-6xl mx-auto flex flex-col h-full min-h-0"
        >
          <DevOpsTerminal />
        </div>
      </main>
    </>
  );
}
