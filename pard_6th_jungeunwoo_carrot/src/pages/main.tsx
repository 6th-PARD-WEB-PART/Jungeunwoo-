import Header from "@/components/Header";
import MainSearchBar from "@/pages/MainSearchBar"; // 있다면 그대로 사용, 없으면 생략해도 됩니다.
import FiltersSidebar from "@/pages/FiltersSidebar";
import ProductCard from "@/components/ProductCard";
import { useSearchStore } from "@/stores/useSearchStore";

const items = Array.from({ length: 7 }).map((_, i) => ({
  id: i,
  title: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
  price: "850,000원",
  meta: "송도동 · 몇초 전",
}));

export default function MainPage() {
  const query = useSearchStore((s) => s.query);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 pt-4">
        {/* 메인 상단 검색바가 따로 있다면 보여주고, 없어도 무방 */}
        {typeof MainSearchBar !== "undefined" && <MainSearchBar />}

        <div className="mt-6 flex gap-6">
          <aside className="w-[220px] hidden md:block">
            <FiltersSidebar />
          </aside>

          <section className="flex-1">
            {/* 여기 제목이 사용자가 입력한 검색어로 표시됩니다 */}
            <h2 className="text-lg font-extrabold mb-3 text-[#111827]">
              {query ? query : "검색 결과"}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map((it) => (
                <ProductCard key={it.id} item={it} />
              ))}
            </div>

            <div className="h-16" />
          </section>
        </div>
      </main>
    </div>
  );
}
