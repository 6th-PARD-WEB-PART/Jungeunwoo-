const towns = ["송도동","송도1동","송도2동","연수동","동춘동","청학동"];
  
  export default function FiltersSidebar() {
    return (
      <aside className="w-[220px]">
        <div className="bg-[#FFFFFF] rounded p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">필터</h3>
            <button className="text-xs text-[#F97316]">초기화</button>
          </div>
  
          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="accent-[#F97316]" /> 거래 가능만 보기
            </label>
          </div>
  
          <div className="text-sm text-[#374151] mb-1">위치</div>
          <div className="text-xs text-[#374151] mb-2">인천광역시 연수구</div>
  
          <div className="space-y-1">
            {towns.map((t, i) => (
              <label key={t} className="flex items-center gap-2 text-sm">
                <input type="radio" name="loc" defaultChecked={i === 0} className="accent-[#F97316]"/>
                {t}
              </label>
            ))}
          </div>
  
          <button className="mt-2 text-sm text-[#F97316]">더보기</button>
        </div>
      </aside>
    );
  }
  