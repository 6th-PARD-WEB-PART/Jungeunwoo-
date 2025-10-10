// src/pages/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto max-w-6xl h-14 flex items-center justify-between px-5">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/carrot.png"
            alt="당근 로고"
            width={28}
            height={28}
          />
          <span className="text-[#F97316] font-extrabold text-lg">당근</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[#374151]">
          <Link href="/main" className="hover:text-[#F97316]">
            중고거래
          </Link>
          <span>부동산</span>
          <span>중고차</span>
          <span>알바</span>
          <span>동네업체</span>
          <span>동네생활</span>
          <span>모임</span>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm text-[#6B7280] flex items-center gap-1">
            <span className="text-[#F97316]">📍</span> 송도동 ▾
          </button>
          <button className="rounded px-3 py-1.5 text-sm font-semibold bg-[#F97316] text-white hover:bg-[#ea6d0f] transition">
            글쓰기
          </button>
        </div>
      </div>
    </header>
  );
}
