import { useState } from "react";
import Header from "@/components/Header";
import MainSearchBar from "@/pages/MainSearchBar";
import FiltersSidebar from "@/components/FiltersSidebar";
import ProductCard from "@/components/ProductCard";
import Modal from "@/components/Modal";
import { useSearchStore } from "@/stores/useSearchStore";

const items = Array.from({ length: 7 }).map((_, i) => ({
  id: i,
  title: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
  price: "850,000원",
  meta: "송도동 · 몇초 전",
}));

const mdGridPos = (i: number) => {
  if (i <= 2) return ""; 
  if (i === 3) return "md:col-start-2 lg:col-start-auto";
  if (i === 4) return "md:col-start-3 lg:col-start-auto";
  return "md:hidden lg:block";
};

export default function MainPage() {
  const query = useSearchStore((s) => s.query);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1100px] px-6 pt-4">
        {typeof MainSearchBar !== "undefined" && <MainSearchBar />}

        {/* 모바일 필터 버튼 */}
        <div className="mt-3 flex items-center justify-end sm:hidden">
          <button
            onClick={() => setFilterOpen(true)}
            className="px-3 py-2 rounded-md border bg-white text-sm"
          >
            필터
          </button>
        </div>

        <div className="mt-6 flex gap-6">
          {/* 사이드바(태블릿 이상) */}
          <aside className="w-[220px] hidden sm:block shrink-0">
            <FiltersSidebar variant="sidebar" />
          </aside>
          <section className="flex-1 min-w-0">
            <h2 className="text-lg font-extrabold mb-3 text-[#111827]">
              {query ? query : "검색 결과"}
            </h2>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {items.map((it, i) => (
                <div key={it.id} className={mdGridPos(i)}>
                  <ProductCard item={it} />
                </div>
              ))}
            </div>

            <div className="h-16" />
          </section>
        </div>
      </main>

      {/* 모바일 바텀시트 필터 */}
      <Modal open={filterOpen} onClose={() => setFilterOpen(false)} variant="sheet">
        <div className="mx-auto w-full max-w-[420px] rounded-t-2xl bg-white shadow-lg">
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b">
            <h3 className="text-base font-bold">필터</h3>
            <button
              onClick={() => setFilterOpen(false)}
              className="text-sm text-[#F97316]"
            >
              초기화
            </button>
          </div>

          <div className="px-5 py-4 max-h-[62vh] overflow-auto">
            <FiltersSidebar variant="sheet" />
          </div>

          <div className="px-5 pb-4">
            <button
              onClick={() => setFilterOpen(false)}
              className="w-full py-3 rounded-md bg-[#111827] text-white text-sm font-semibold"
            >
              적용하기
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
