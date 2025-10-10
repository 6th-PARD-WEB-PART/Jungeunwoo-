// src/pages/ProductCard.tsx
import { useState } from "react";
import ProductModal from "./ProductModal";

export type Item = {
  id: number;
  title: string;
  price: string;
  meta: string;
  views?: number;
  likes?: number;
  chats?: number;
};

export default function ProductCard({ item }: { item: Item }) {
  const [views, setViews] = useState(item.views ?? 0);
  const [likes, setLikes] = useState(item.likes ?? 0);
  const [chats, setChats] = useState(item.chats ?? 0);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  // 채팅 수 +1
  const incChats = () => setChats((v) => v + 1);
  // 모달 열기
  const openModal = () => setOpen(true);
  // 모달 닫기
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="bg-[#FFFFFF] rounded-xl overflow-hidden border border-transparent">
        <div className="h-40 bg-[#FFEDD5]" />

        <div className="p-3">
          <h3 className="text-[13px] font-medium leading-5 text-[#374151]">
            {item.title}
          </h3>

          <p className="mt-1 font-extrabold text-[#111827]">{item.price}</p>
          <p className="mt-1 text-xs text-[#9CA3AF]">{item.meta}</p>

          <div className="mt-2 flex items-center justify-between">
            {/* 자세히 → 모달 열기 */}
            <button
              onClick={openModal}
              className="px-3 py-[6px] text-xs rounded-full bg-[#F97316] text-[#FFFFFF] hover:bg-[#ea6d0f] transition"
            >
              자세히
            </button>

            {/* 하트 + 숫자 (카드에서도 토글 가능 / 모달과 수치 공유됨) */}
            <button
              onClick={toggleLike}
              className="flex items-center gap-1 text-xs"
              aria-label="좋아요"
            >
              {liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#CC2C2C"
                  viewBox="0 0 24 24"
                  stroke="#CC2C2C"
                  width={18}
                  height={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#9CA3AF"
                  width={18}
                  height={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.13 2.44C11.09 5 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              )}
              <span className={liked ? "text-[#CC2C2C]" : "text-[#9CA3AF]"}>
                {likes}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {open && (
        <ProductModal
          open={open}
          onClose={closeModal}
          title={item.title}
          price={item.price}
          meta={item.meta}
          views={views}
          likes={likes}
          chats={chats}
          onView={() => setViews((v) => v + 1)} 
          onToggleLike={() => {
            setLiked((p) => !p);
            setLikes((prev) => (liked ? prev - 1 : prev + 1));
          }}
          onChat={() => setChats((v) => v + 1)}
          liked={liked}
        />
      )}
    </>
  );
}
