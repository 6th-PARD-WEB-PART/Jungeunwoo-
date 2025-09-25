import Link from "next/link";

export default function Goals() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-white">
      {/* 상단 네비 */}
       <header className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-white/40">
         <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
           <Link href="/" className="font-extrabold tracking-tight">
             Goal
           </Link>
           <ul className="flex items-center gap-4 text-lg">
             <li><Link className="hover:text-blue-600" href="/">Home</Link></li>
             <li><Link className="hover:text-blue-600" href="/about">About</Link></li>
             <li><Link className="text-blue-700 font-semibold" href="/goals">Goals</Link></li>
             <li><Link className="hover:text-blue-600" href="/favorites">Favorites</Link></li>
           </ul>
         </nav>
       </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-extrabold mb-8 text-slate-800">
          이번 학기 목표!!<br/><br/><br/><br/> 
        </h1>

        {/* 목표 카드 세로 나열 */}
        <div className="flex flex-col gap-6">
          {/* 학업 관련 */}
          <div className="w-full rounded-xl bg-white/80 p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3">학업 관련</h2>
            <ul className="space-y-2 text-slate-700">
              <li>· 전공 수업 예습, 복습 꾸준히 하기</li>
              <li>· 오픈소스스튜디오 A+ 받아보기</li>
              <li>· 이번 학기 평점 4.0 이상 목표로 하기</li>
            </ul>
          </div>

          {/* 학교 생활 관련 */}
          <div className="w-full rounded-xl bg-white/80 p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3">학교 생활</h2>
            <ul className="space-y-2 text-slate-700">
              <li>· 헬스 주 4회는 꾸준히 하기</li>
              <li>· 팀 새내기들 군대 보내기</li>
              <li>· 막학기인 동기 새내기들과 자주 시간보내기</li>
            </ul>
          </div>

          {/* PARD 관련 */}
          <div className="w-full rounded-xl bg-white/80 p-6 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3">PARD 관련</h2>
            <ul className="space-y-2 text-slate-700">
              <li>· 프론트 엔드 마스터</li>
              <li>· githurb 잔디 매일 심기</li>
              <li>· 팀원들과 협업하면서 소통하는 능력 기르기</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

