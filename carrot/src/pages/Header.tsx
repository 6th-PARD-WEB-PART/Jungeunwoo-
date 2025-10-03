import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <div className="mx-auto max-w-6xl h-14 flex items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block w-6 h-6 rounded-full bg-[#F97316]" />
          <span className="text-[#F97316] font-extrabold text-lg">당근</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[#374151]">
          <a>중고거래</a><a>부동산</a><a>중고차</a>
          <a>알바</a><a>동네업체</a><a>동네생활</a><a>모임</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm text-[#374151] flex items-center gap-1">
            <span className="text-[#F97316]">📍</span> 송도동 ▾
          </button>
          <button className="rounded px-3 py-1.5 text-sm font-semibold bg-[#F97316] text-[#FFFFFF] hover:bg-[#ea6d0f] transition">
            글쓰기
          </button>
        </div>
      </div>
    </header>
  );
}


