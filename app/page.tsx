import Galaxy from "./Galaxy";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black">
      {/* Background */}
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1}
        glowIntensity={0.3}
      />

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Hello Galaxy</h1>
      </div>
    </div>
  );
}
