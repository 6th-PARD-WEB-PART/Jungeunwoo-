import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSearchStore } from "@/stores/useSearchStore";

export default function SearchBar({ goToMain = false }: { goToMain?: boolean }) {
  const router = useRouter();
  const setQuery = useSearchStore((s) => s.setQuery);

  const [value, setValue] = useState("");

  const handleSearch = () => {
    const q = value.trim();
    if (!q) return;
    setQuery(q);
    router.push("/main");
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <button className="mr-3 h-10 px-3 rounded-full bg-slate-800 text-white text-sm flex items-center gap-1 hover:bg-slate-700 transition">
        📍 송도동 ▾
      </button>

      <div className="flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="물건 이름을 입력해주세요"
          className="h-10 w-[440px] rounded-l border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
        />
        <button
          onClick={handleSearch}
          className="h-10 px-4 rounded-r bg-[#F97316] text-white font-semibold hover:bg-[#ea6d0f] transition"
          aria-label="검색"
        >
          🔍
        </button>
      </div>
    </div>
  );
}
