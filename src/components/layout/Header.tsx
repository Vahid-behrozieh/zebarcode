import Link from "next/link";

// components/Header.tsx
export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
        <Link href='/'>
            <h1 className="text-2xl font-bold text-indigo-600">ZebraCode.ir</h1>
        </Link>
        <div className="flex gap-4 items-center text-sm">
            <button >🇮🇷 فارسی</button>
            <button >🇬🇧 English</button>
            <button id="toggleTheme" className="ml-4 px-3 py-1 rounded bg-slate-200 hover:bg-slate-300">🌓 تم</button>
        </div>
  </header>
  );
}

