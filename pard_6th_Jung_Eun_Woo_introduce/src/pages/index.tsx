import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 to-white">
      {/* 상단 네비게이션 */}
      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-white/40">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">Welcome to EUNWOO's first homepage</Link>
          <ul className="flex items-center gap-4 text-lg">
            <li><Link className="text-blue-700 font-semibold" href="/">Home</Link></li>
            <li><Link className="hover:text-blue-600" href="/about">About</Link></li>
            <li><Link className="hover:text-blue-600" href="/goals">Goals</Link></li>
            <li><Link className="hover:text-blue-600" href="/favorites">Favorites</Link></li>
          </ul>
        </nav>
      </header>

      {/* 메인 텍스트 중앙 배치 */}
      <div className="flex flex-grow items-center justify-center -translate-y-32">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          안녕하세요, PARD 6기 웹파트 정은우입니다!
        <p>
          파드를 통해 더 나은 개발자가 되고 싶습니다!!
        </p>
        </h1>
        
        
      </div>
    </div>
  );
}
