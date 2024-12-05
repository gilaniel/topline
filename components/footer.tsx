import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";

export const Footer = () => {
  return (
    <footer className="bg-[--grey] py-10 ronded-t-[40px] px-4 md:px-0">
      <div className="container">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt=""
            width={294}
            height={30}
            className="mb-[100px] md:mb-[200px]"
          />
        </Link>

        <h5 className="mb-[50px]">Связаться с нами</h5>

        <Form />

        <span className="font-['Inter'] text-[14px] text-[--text-color-secondary] capitalize font-[400]">
          {new Date().getFullYear()} ООО «Топлайн Медиа». Все права защищены
        </span>
      </div>
    </footer>
  );
};
