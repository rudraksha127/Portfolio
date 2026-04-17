import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="relative">
        <h1 className="text-[140px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 text-[140px] md:text-[200px] font-black text-purple-500/10 blur-2xl leading-none select-none">
          404
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
        Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-10 text-lg">
        The page you&apos;re looking for doesn&apos;t exist, or was moved. Let&apos;s get you back on track.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="py-3 px-8 button-primary text-white font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          ← Back to Portfolio
        </Link>
        <Link
          href="/#contact"
          className="py-3 px-8 bg-transparent border-2 border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500/20 transition"
        >
          Contact Me
        </Link>
      </div>

      <p className="mt-16 text-gray-600 text-sm">
        If you believe this is an error, please{" "}
        <a
          href="mailto:rudraksha127@gmail.com"
          className="text-purple-400 hover:text-purple-300 transition"
        >
          let me know
        </a>
        .
      </p>
    </main>
  );
}
