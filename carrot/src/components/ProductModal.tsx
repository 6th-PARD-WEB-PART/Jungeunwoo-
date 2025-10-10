import { useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  price: string;
  meta: string;
  views: number;
  likes: number;
  chats: number;
  onView: () => void;
  onToggleLike: () => void;
  onChat: () => void;
  liked: boolean;
};

export default function ProductModal({
  open,
  onClose,
  title,
  price,
  meta,
  views,
  likes,
  chats,
  onView,
  onToggleLike,
  onChat,
  liked,
}: Props) {
  // Strict Mode 중복 방지
  const viewedOnceRef = useRef(false);
  useEffect(() => {
    if (open && !viewedOnceRef.current) {
      onView();
      viewedOnceRef.current = true;
    }
    if (!open) viewedOnceRef.current = false;
  }, [open, onView]);

  const stop = (e: MouseEvent) => e.stopPropagation();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-[900px] max-w-[95vw] rounded-lg overflow-hidden shadow-xl"
        onClick={stop}
      >
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-[15px] font-semibold">상품 상세</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-100 w-8 h-8 rounded-full text-lg"
          >
            ✕
          </button>
        </div>

        {/* 본문 */}
        <div className="grid grid-cols-2 gap-6 p-6">
          {/* 좌측 이미지 영역 */}
          <div>
            <Image
              src="/iphone.png"
              alt="상품 이미지"
              width={360}
              height={360}
              className="rounded-md w-full h-auto object-cover"
            />
            <div className="mt-3 flex gap-2">
              <div className="w-16 h-16 rounded border-2 border-[#F97316] overflow-hidden">
                <Image
                  src="/iphone.png"
                  alt="썸네일1"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-16 h-16 rounded overflow-hidden">
                <Image
                  src="/iphone.png"
                  alt="썸네일2"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* 우측 상세 영역 */}
          <div className="flex flex-col">
            <h3 className="text-[17px] font-extrabold leading-snug text-[#111827]">
              {title}
            </h3>
            <div className="text-[20px] font-extrabold text-[#111827] mt-1">
              {price}
            </div>

            <div className="mt-2 text-xs text-[#6B7280]">
              송도동 · 몇초 전
            </div>

            <div className="mt-2 flex items-center gap-5 text-xs text-[#6B7280]">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" width={13} height={13}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"/>
                </svg>
                <span>채팅 {chats}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" width={13} height={13}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>관심 {likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" width={13} height={13}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M9 3v2m6-2v2M4 11h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9z"/>
                </svg>
                <span>조회 {views}</span>
              </div>
            </div>

            <p className="mt-4 text-sm text-[#374151] leading-6">
              거의 완전새제품입니다! 기스도없어요 입문용으로 좋아용
            </p>

            {/* 판매자 정보 */}
            <div className="flex items-center gap-3 mt-6 border-t border-gray-200 pt-4">
              <div className="w-8 h-8 rounded-full bg-[#E5E7EB]" />
              <div>
                <p className="text-sm font-semibold">kksa</p>
                <p className="text-xs text-[#9CA3AF]">왕십리도선동</p>
              </div>
              <span className="text-xs text-[#F97316] ml-auto">39.4°C 🥕</span>
            </div>

            {/* 버튼들 */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={onToggleLike}
                className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-50"
              >
                {liked ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#CC2C2C" viewBox="0 0 24 24" stroke="#CC2C2C" width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                )}
              </button>

              <button
                onClick={onChat}
                className="flex-1 bg-[#F97316] text-white text-sm font-semibold rounded py-3 hover:bg-[#ea6d0f]"
              >
                당근 채팅하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
