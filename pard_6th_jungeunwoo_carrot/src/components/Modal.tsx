import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: "center" | "sheet"; // 기본 중앙 모달 / 바텀시트
  containerClassName?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  variant = "center",
  containerClassName,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const isSheet = variant === "sheet";

  return createPortal(
    <div
      className={`fixed inset-0 z-[120] ${isSheet ? "flex items-end justify-center" : "flex items-center justify-center p-4"}`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {isSheet ? (
        // 바텀시트: children이 시트 컨테이너(호출부에서 구성)
        <div onClick={stop} className="relative z-10 w-full px-4 pb-4 sm:hidden">
          {children}
        </div>
      ) : (
        // 중앙 모달
        <div
          onClick={stop}
          className={`relative z-10 w-full max-w-[960px] rounded-lg bg-white shadow-lg ${containerClassName ?? ""}`}
        >
          {children}
        </div>
      )}
    </div>,
    document.body
  );
}
