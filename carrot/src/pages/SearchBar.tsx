import Link from "next/link";

export default function SearchBar({ goToMain = false }: { goToMain?: boolean }) {
  const Button = (
    <button className="h-10 px-4 rounded-r bg-[#F97316] text-white font-semibold hover:bg-[#FFEDD5] transition">
      🔍
    </button>
  );

  return (
    <div className="flex items-center justify-center mt-6">
      <button className="mr-3 h-10 px-3 rounded-full bg-slate-800 text-white text-sm flex items-center gap-1 hover:bg-slate-700 transition">
        📍 송도동 ▾
      </button>

      <div className="flex">
        <input
          placeholder="물건 이름을 입력해주세요"
          className="h-10 w-[440px] rounded-l border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-orange-300"
        />
        {goToMain ? <Link href="/main">{Button}</Link> : Button}
      </div>
    </div>
  );
}