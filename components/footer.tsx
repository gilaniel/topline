import Link from "next/link";
import { Form } from "./form";
import { FadeImg } from "./image";

export const Footer = () => {
  return (
    <footer className="bg-[--grey] py-10 ronded-t-[40px] px-4 md:px-0">
      <div className="container">
        <Link href="/">
          <FadeImg
            src="/logo.svg"
            alt=""
            width={294}
            height={30}
            className="mb-[100px] lg:mb-[200px]"
          />
        </Link>

        <h5 className="mb-[50px]">Связаться с нами</h5>

        <Form />

        <div className="flex flex-wrap gap-5">
          <Link
            href="/privacy_policy"
            className="text-[12px] font-[400]"
            style={{
              fontFamily: "var(--font-family)",
              textTransform: "initial",
            }}
          >
            Политика обработки персональных данных
          </Link>
          <span className="font-['Inter'] text-[14px] text-[--text-color-secondary] capitalize font-[400]">
            {new Date().getFullYear()} ООО «Топлайн Медиа». Все права защищены
          </span>
        </div>
      </div>
    </footer>
  );
};
