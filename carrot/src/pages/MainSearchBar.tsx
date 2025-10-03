import Link from "next/link";

const tags = ["아이맥","아이폰","삼성","빔프로","자전거","노트북","의자","책상"];

export default function MainSearchBar() {
  return (
    <div className="mx-auto max-w-6xl px-5 mt-4">
      <div className="relative">
        <input
          placeholder="물건이름을 입력해주세요"
          className="w-full h-10 rounded border border-[#E5E7EB] pl-4 pr-24 outline-none
                     placeholder:text-[#9CA3AF]
                     focus:ring-2 focus:ring-[#F97316]/30"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Link
            href="#"
            aria-label="검색"
            className="w-8 h-8 rounded bg-[#F97316] text-[#FFFFFF] grid place-items-center hover:bg-[#FFEDD5] transition"
          >
            검색
          </Link>
          <button className="text-sm text-[#374151]">송도동 ▾</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map(t => (
          <span
            key={t}
            className="px-3 py-1 rounded-full bg-[#F3F4F6] text-[#374151] text-sm"
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}

