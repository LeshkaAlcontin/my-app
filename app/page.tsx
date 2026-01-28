import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            ABOUT ME
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Hi! I am Leshka Rose Alcontin, a Computer Science student from Ateneo de Davao University. I am passionate about technology and love to explore new advancements in the field. In my free time, I enjoy reading tech blogs, coding, and participating in hackathons.
          </p>
        </div>
      </main>
    </div>
  );
}
