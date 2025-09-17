import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-white text-slate-900">
      {/* 상단 네비 */}
      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-white/40">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">EUNWOO</Link>
          <ul className="flex items-center gap-4 text-lg">
            <li><Link className="hover:text-blue-600" href="/">Home</Link></li>
            <li><Link className="text-blue-700 font-semibold" href="/about">About</Link></li>
            <li><Link className="hover:text-blue-600" href="/goals">Goals</Link></li>
            <li><Link className="hover:text-blue-600" href="/favorites">Favorites</Link></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <section className="py-12 grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-6">
          <div className="flex justify-center md:justify-start">
            {/* 프로필 이미지 */}
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/60 shadow-md bg-white">
              <Image
                src="/profile.jpg"
                alt="정은우 프로필"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              정은우 <span className="text-blue-800/90">Eunwoo Jung</span>
            </h1>
            <p className="mt-3 text-slate-700 leading-relaxed">
              안녕하세요! <b className="font-semibold">PARD 6기 웹파트의 정은우</b> 입니다.<br/> 
              한동대학교 22학번이고, 프론트엔드를 배워보고 싶어 웹파트에 지원하게 되었습니다!
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <a
                className="px-3 py-1 rounded-md bg-white/70 hover:bg-white transition shadow"
                href="mailto:wjddmsdn814@handong.ac.kr"
              >
                my Email
              </a>
              <a
                className="px-3 py-1 rounded-md bg-white/70 hover:bg-white transition shadow"
                href="https://github.com/6th-PARD-WEB-PART/Jung-Eun-Woo-.git"
                target="_blank"
                rel="noreferrer"
              >
                my GitHub
              </a>
            </div>
          </div>
        </section>

        {/* 스킬 (직접 작성) */}
        <section className="py-8" aria-labelledby="skills">
          <h2 id="skills" className="text-2xl font-bold">TMI</h2>
          <p className="mt-2 text-slate-700">간단한 정보</p>

          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 신상 정보 카드 */}
            <div className="rounded-xl bg-white/70 p-5 shadow">
              <h3 className="font-semibold">신상 정보</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">2003년 8월 14일 출생</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">1남 1녀중 장남</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">경상북도 경산시에 거주 중</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">무교</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">현재 4학기째</span>
              </div>
            </div>

            {/* Tools 카드 */}
            <div className="rounded-xl bg-white/70 p-5 shadow">
              <h3 className="font-semibold">Build & Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">Vite</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">Turbopack</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">ESLint/Prettier</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">pnpm/npm</span>
              </div>
            </div>

            {/* Others 카드 */}
            <div className="rounded-xl bg-white/70 p-5 shadow">
              <h3 className="font-semibold">Others</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">REST API</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">Git/GitHub</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">Figma</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-sm">Vercel</span>
              </div>
            </div>
          </div>
        </section>

        {/* 한동에 온 뒤 간단한 타임라인 */}
        <section className="py-8" aria-labelledby="timeline">
          <h2 id="timeline" className="text-2xl font-bold">한동에 온 후 타임라인</h2>
          <ul className="mt-4 space-y-3">
            <li className="rounded-lg bg-white/70 p-4 shadow flex items-start gap-3">
              <span className="mt-1 text-sm text-slate-600 shrink-0 w-24">2022</span>
              <p className="leading-relaxed">
                2022년 한동대학교에 입학, 그러나 코로나로 인한 한스트 불참 이슈와 몇몇 새새의 탈주로 초반 1학기는 방황.<br/>
                2학기 시작 후 너무 놀아버린 탓에 학사경고를 맞은 후 입대를 위해 휴학.
              </p>
            </li>
            <li className="rounded-lg bg-white/70 p-4 shadow flex items-start gap-3">
              <span className="mt-1 text-sm text-slate-600 shrink-0 w-24">2023</span>
              <p className="leading-relaxed">
                23년 4월 17일 논산 훈련소 입소, 운전병 특기 지원으로 종합군수학교에서 교육을 받은 뒤 철원 3사단 백골부대 전입이 결정된 후 절망에 빠짐.<br/>
                전입 후 선임들의 부조리와 철원의 겨울을 견딘다.
              </p>
            </li>
            <li className="rounded-lg bg-white/70 p-4 shadow flex items-start gap-3">
              <span className="mt-1 text-sm text-slate-600 shrink-0 w-24">2024</span>
              <p className="leading-relaxed">
                24년 10월 16일 지루한 군생활 종료. 전역 후 해외여행도 가보고 알바도 하며 복학을 준비하게 된다.<br/>
                그러나 당시 불장인 미국주식에 군적금을 박고 현재까지 물려있게 된다.  
              </p>
            </li>
            <li className="rounded-lg bg-white/70 p-4 shadow flex items-start gap-3">
              <span className="mt-1 text-sm text-slate-600 shrink-0 w-24">2025~</span>
              <p className="leading-relaxed">
                2025년 3월 다시 한동으로 돌아오게 됨. 2년만에 학교에 돌아와서 감회가 새로웠고 첫 전공공부를 시작함.<br/>
                1학년때의 업보를 청산하기 위해 여름계절로 완진 킴의 성경의 이해를 수강.<br/>
                그러던중 파드를 하는 사람들에게서 추천을 받고 파드 6기 웹 파트에 지원하게 된다.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
