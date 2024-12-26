import { useEffect, useRef } from "react";

export const Success = ({
  onCloseClick,
}: {
  onCloseClick: (state: boolean) => void;
}) => {
  const closeRef = useRef<HTMLDivElement>(null);

  const handleCloseClick = (e: any) => {
    if (closeRef.current && !closeRef.current.contains(e.target)) {
      onCloseClick(false);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseClick);

    return () => {
      document.removeEventListener("click", handleCloseClick);
    };
  }, [closeRef]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[12] flex items-center justify-center bg-black/80">
      <div
        className="max-w-[400px] bg-white rounded-[4px] p-10 text-center text-[18px] relative text-black inter"
        ref={closeRef}
        onClick={handleCloseClick}
      >
        <div
          className="absolute right-5 top-5 w-[16px] h-[16px] cursor-pointer"
          onClick={() => onCloseClick(false)}
        >
          <div className="w-full h-[2px] bg-gray-500 rotate-[45deg] absolute top-[6px]"></div>
          <div className="w-full h-[2px] bg-gray-500 rotate-[135deg] absolute top-[6px]"></div>
        </div>
        Заявка успешно отправлена. Менеджер свяжется с вами в ближайшее время.
      </div>
    </div>
  );
};
