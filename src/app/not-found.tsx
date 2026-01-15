import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#0b0b20]">
      <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-[#ff4f5e] to-[#ff9400] mb-4">
        Oops!
      </h1>

      <h2 className="text-white text-xl md:text-2xl font-bold tracking-widest uppercase mb-6">
        404 - PAGE NOT FOUND
      </h2>

      <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="flex items-center gap-2 bg-linear-to-r from-[#ff4f5e] to-[#ff9400] text-white px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg"
      >
        GO TO HOMEPAGE
      </Link>
    </main>
  );
}
