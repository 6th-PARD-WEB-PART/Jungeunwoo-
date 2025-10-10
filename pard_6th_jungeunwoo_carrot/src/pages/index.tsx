import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />
      <main className="pt-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-2xl font-extrabold mb-2 flex items-center justify-center gap-2 text-[#111827]">
            <span className="text-[#F97316]">📍</span>
            송도동에서 알바 찾고 계신가요?
          </h1>

          <SearchBar/>

          <div className="mt-3 text-sm text-[#374151]">
            인기 검색어:{" "}
            {["아이폰","에어팟","노트북","전동 킥보드","자전거","의자","컴퓨터","캠핑","배송"].map((w,i)=>(
              <span key={w} className="text-[#F97316]">{(i?' ':'')+w}</span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-7 gap-4 text-center">
            {["중고거래","알바","부동산","중고차","동네업체","동네생활","모임"].map(cat => (
              <div key={cat} className="bg-[#F3F4F6] rounded-lg p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#FFEDD5] mb-2" />
                <span className="text-sm font-medium text-[#374151]">{cat}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-7 gap-2 text-center text-sm text-[#374151]">
            {["송도동","역삼동","홍대동","협실동","배광동","서교동","우정동",
              "신림동","광당동","합정동","희동동","다선동","미금동","업구장동","배곡동","오정동"]
              .map(town => (
                <div key={town} className="rounded-full bg-[#F3F4F6] py-1">{town}</div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
