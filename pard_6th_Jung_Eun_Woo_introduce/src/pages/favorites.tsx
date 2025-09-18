import Link from "next/link";

export default function Favorites() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-white text-slate-900">
      {/* 상단 네비 */}
      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-white/40">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">Favorite page</Link>
          <ul className="flex items-center gap-4 text-lg">
            <li><Link className="hover:text-blue-600" href="/">Home</Link></li>
            <li><Link className="hover:text-blue-600" href="/about">About</Link></li>
            <li><Link className="hover:text-blue-600" href="/goals">Goals</Link></li>
            <li><Link className="text-blue-700 font-semibold" href="/favorites">Favorites</Link></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4">
        {/* 헤더 */}
        <section className="py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-blue-800/90">Favorite</span>
          </h1>
          <p className="mt-3 text-slate-700">음악, 취미, 음식 3가지!<br/><br/><br/><br/><br/></p>
        </section>

        {/* 관심사 카드 */}
        <section className="flex flex-col gap-8 pb-20">
          {/* 좋아하는 음악 */}
          <Link
            href="https://www.youtube.com/watch?v=DZ2oK_KDMBY"
            target="_blank"
            className="flex items-center w-full rounded-2xl bg-white/80 px-8 py-10 shadow hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-6xl mr-8">🎵</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">좋아하는 음악</h2>
              <p className="text-lg text-slate-700">J-Pop, 인디 음악을 즐겨 듣고, 좋아하는 가수는 바운디, 한로로 이런 애들 좋아합니다 </p>
            </div>
          </Link>

          {/* 취미 */}
          <Link
            href="https://www.youtube.com/watch?v=nbcxLhnCn44&t=2092s"
            target="_blank"
            className="flex items-center w-full rounded-2xl bg-white/80 px-8 py-10 shadow hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-6xl mr-8">💪</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">취미</h2>
              <p className="text-lg text-slate-700">평소 헬스를 즐겨하고, 스트레스를 푸는 편입니다! 풋살이나 축구하는 것도 좋아해요</p>
            </div>
          </Link>

          {/* 좋아하는 음식 */}
          <Link
            href="https://map.naver.com/p/entry/place/1087791107?lng=128.5908938&lat=35.87123&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509181244&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            className="flex items-center w-full rounded-2xl bg-white/80 px-8 py-10 shadow hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-6xl mr-8">🍖</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">좋아하는 음식</h2>
              <p className="text-lg text-slate-700">고기 관련 음식은 전부 좋아합니다!! 싫어하는 음식은 해산물은 좀 피하는거 같아요</p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
