import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
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

  // 바깥(Backdrop) 클릭 시 닫기
  const handleBackdropClick = () => onClose();
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] bg-[rgba(17,24,39,0.5)] flex items-center justify-center p-4"
    >
      <div
        onClick={stop}
        className="w-full max-w-[960px] rounded-lg bg-[#FFFFFF] shadow-lg"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
