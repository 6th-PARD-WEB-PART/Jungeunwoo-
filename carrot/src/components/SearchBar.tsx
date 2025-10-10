import { useEffect, useRef, useState } from "react";

const TOWNS = ["송도동", "양덕동", "여남동", "양재동"];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const town = "송도동";               
  const [open, setOpen] = useState(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);                 
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = () => {
    const text = query.trim() || "검색어 없음";
    console.log(`“${town}”에서 “${text}”을(를) 찾고 있어요!`);
  };

  return (
    <div className="flex items-center justify-center mt-6" ref={wrapRef}>
      <div className="relative mr-3">
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            h-10 px-4 rounded-full
            bg-[#2B384A] text-white
            flex items-center gap-2
            shadow-sm hover:brightness-[1.05] transition
          "
          aria-expanded={open}
        >
          {/* pin 아이콘 */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10Z"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="11" r="2.8" stroke="white" strokeWidth="2"/>
          </svg>
          <span className="text-[14px] font-semibold">{town}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               className={`ml-1 transition-transform ${open ? "rotate-180" : "rotate-0"}`}>
            <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* 드롭다운 */}
        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 top-9 w-[130px] bg-white rounded-2xl shadow-md pt-3 pb-2 z-30">
            {TOWNS.map((t, idx) => (
              <div
                key={t}
                className={`
                  w-full py-1.5 text-center
                  text-[#1F2937] text-[16px] leading-[24px]
                  ${idx !== 0 ? "mt-0.5" : ""}
                  hover:bg-gray-100 transition
                `}
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 검색 입력 + 버튼 */}
      <div className="flex">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="물건 이름을 입력해주세요"
          className="
            h-10 w-[440px] rounded-l border border-gray-300 bg-white px-3
            text-[14px] outline-none focus:ring-2 focus:ring-orange-300
          "
        />
        <button
          onClick={handleSearch}
          className="
            h-10 px-4 rounded-r bg-[#F97316] text-white text-[14px] font-semibold
            hover:bg-[#ea6d0f] transition
          "
          aria-label="검색"
          title="검색"
        >
          🔍
        </button>
      </div>
    </div>
  );
}
