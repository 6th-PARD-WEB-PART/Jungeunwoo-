import Header from "@/pages/Header";
import MainSearchBar from "@/pages/MainSearchBar";
import FiltersSidebar from "@/pages/FiltersSidebar";
import ProductCard from "@/pages/ProductCard";

const items = Array.from({ length: 7 }).map((_, i) => ({
  id: i,
  title: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
  price: "850,000원",
  meta: "송도동 · 몇초 전",
}));

export default function MainPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 pt-4">
        <MainSearchBar />
        <div className="mt-6 flex gap-6">
          <FiltersSidebar />
          <section className="flex-1">
            <h2 className="text-lg font-bold mb-3">전체 상품</h2>

            <div className="grid grid-cols-4 gap-5">
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
