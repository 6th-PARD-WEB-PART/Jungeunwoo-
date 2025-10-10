import Modal from "./Modal";
import { useState } from "react";

export type Item = {
  id: number;
  title: string;
  price: string;
  meta: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  item: Item;
};

export default function ProductDetailModal({ open, onClose, item }: Props) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    setLiked((p) => !p);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <Modal open={open} onClose={onClose}>
      {/* 헤더 */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
        <h3 className="text-[16px] font-bold text-[#111827]">상품 상세</h3>
        <button
          onClick={onClose}
          className="w-8 h-8 grid place-items-center rounded hover:bg-[#F9FAFB]"
          aria-label="닫기"
          title="닫기"
        >
          {/* X 아이콘 */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="#374151"
            fill="none"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>

      {/* 본문 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* 좌측: 큰 이미지 + 썸네일 */}
        <div>
          <div className="aspect-[4/3] w-full bg-[#F3F4F6] rounded-lg overflow-hidden">
            {/* 데모용 플레이스홀더 */}
            <div className="w-full h-full bg-[#FFEDD5]" />
          </div>

          {/* 썸네일들 (데모) */}
          <div className="flex gap-3 mt-3">
            <div className="w-16 h-16 rounded border border-[#E5E7EB] bg-[#FFEDD5]" />
            <div className="w-16 h-16 rounded border border-[#E5E7EB] bg-[#FFEDD5]" />
            <div className="w-16 h-16 rounded border border-[#E5E7EB] bg-[#FFEDD5]" />
          </div>
        </div>

        {/* 우측: 텍스트/버튼들 */}
        <div>
          <h2 className="text-[18px] font-extrabold leading-7 text-[#111827]">
            {item.title}
          </h2>
          <div className="mt-2 text-[20px] font-extrabold text-[#111827]">
            {item.price}
          </div>
          <div className="mt-1 text-[13px] text-[#9CA3AF]">{item.meta}</div>

          <p className="mt-4 text-[14px] leading-6 text-[#374151]">
            거의 완전새제품입니다! 기스도 없어요. 입문용으로 좋아요. (데모 텍스트)
          </p>

          {/* 좋아요 + 조회/관심(데모) */}
          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={toggleLike}
              className="flex items-center gap-1 text-[14px] select-none"
              title="관심"
            >
              {liked ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#CC2C2C" stroke="#CC2C2C">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              )}
              <span className={liked ? "text-[#CC2C2C]" : "text-[#9CA3AF]"}>{likeCount}</span>
            </button>

            <span className="text-[13px] text-[#9CA3AF]">조회 317</span>
          </div>

          {/* 하단 액션 */}
          <div className="mt-6 flex gap-3">
            <button
              className="px-4 py-3 rounded-md text-[14px] font-semibold bg-[#F97316] text-[#FFFFFF] hover:bg-[#ea6d0f] transition"
              onClick={() => alert("채팅하기(데모)")}
            >
              당근 채팅하기
            </button>
            <button
              className="px-4 py-3 rounded-md text-[14px] font-semibold border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] transition"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
