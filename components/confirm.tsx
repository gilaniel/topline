import Link from "next/link";

export const Confirm = ({
  value,
  onChange,
  isError,
}: {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}) => {
  return (
    <label className="container-confirm flex items-start gap-2">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        name="confirm"
      />
      <div
        className={`checkmark translate-y-[1px]  ${isError ? "invalid" : ""}`}
      ></div>
      <span
        className="text-white flex-1 text-[14px] font-[400] leading-[20px]"
        style={{
          fontFamily: "Inter",
          textTransform: "initial",
        }}
      >
        Нажимая отправить вы соглашаетесь с{" "}
        <Link href="/privacy_policy" target="_blank">
          политикой обработки персональных
        </Link>
        данных.
      </span>
    </label>
  );
};
