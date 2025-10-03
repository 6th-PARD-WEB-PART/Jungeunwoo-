type Item = { id: number; title: string; price: string; meta: string };

export default function ProductCard({ item }: { item: Item }) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl overflow-hidden border border-transparent">
      <div className="h-40 bg-[#FFEDD5]" />

      <div className="p-3">
        <h3 className="text-[13px] font-medium leading-5 text-[#374151]">
          {item.title}
        </h3>

        <p className="mt-1 font-extrabold text-[#111827]">{item.price}</p>
        <p className="mt-1 text-xs text-[#9CA3AF]">{item.meta}</p>

        <div className="mt-2 flex items-center justify-between">
          <button className="px-3 py-[6px] text-xs rounded-full bg-[#F97316] text-[#FFFFFF] hover:bg-[#FFEDD5] transition">
            자세히
          </button>
          <div className="flex items-center gap-3 text-[#9CA3AF] text-xs">
            <span>♡</span>
          </div>
        </div>
      </div>
    </div>
  );
}
