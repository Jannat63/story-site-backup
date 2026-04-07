import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ahsan's Story
        </Link>

        <Link
          href="/about"
          className="text-sm border px-4 py-1 rounded-full hover:bg-black hover:text-white transition"
        >
          About Author
        </Link>

      </div>
    </header>
  );
}