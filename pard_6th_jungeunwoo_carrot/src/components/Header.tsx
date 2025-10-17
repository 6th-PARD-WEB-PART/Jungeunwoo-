import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="mx-auto max-w-6xl h-14 flex items-center justify-between px-5">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/carrot.png" alt="당근 로고" width={28} height={28} priority />
          <span className="text-[#F97316] font-extrabold text-lg">당근</span>
        </Link>

        {/* 데스크탑/태블릿 메뉴 */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#374151]">
          <Link href="/main" className="hover:text-[#F97316]">중고거래</Link>
          <span>부동산</span>
          <span>중고차</span>
          <span>알바</span>
          <span>동네업체</span>
          <span>동네생활</span>
          <span>모임</span>
        </nav>

        <div className="flex items-center gap-4">

          <button
            type="button"
            className="md:hidden text-[22px]"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen(true)}
          >
            ≡
          </button>

          {/* 위치/글쓰기(태블릿 이상) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-[#6B7280] flex items-center gap-1">
              <span className="text-[#F97316]">📍</span> 송도동 ▾
            </button>
            <button className="rounded px-3 py-1.5 text-sm font-semibold bg-[#F97316] text-white hover:bg-[#ea6d0f] transition">
              글쓰기
            </button>
          </div>
        </div>
      </div>

      {/* 오른쪽 패널 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 z-[130] md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
          <aside
            className="relative z-10 ml-auto h-full w-[78%] max-w-[380px] bg-white p-7 flex flex-col shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="self-end text-2xl"
              aria-label="메뉴 닫기"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <nav className="mt-6 space-y-5 text-[17px] text-[#111827]">
              <a className="block">중고거래</a>
              <a className="block">부동산</a>
              <a className="block">중고차</a>
              <a className="block">알바</a>
              <a className="block">동네업체</a>
              <a className="block">동네생활</a>
              <a className="block">모임</a>
            </nav>
            <button
              type="button"
              className="mt-8 bg-[#F97316] text-white px-6 py-2 rounded font-semibold self-start"
            >
              글쓰기
            </button>
          </aside>
        </div>
      )}
    </header>
  );
}
