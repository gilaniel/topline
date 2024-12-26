"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Success } from "./success";
import { Confirm } from "./confirm";

export const emailRegExp: any =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

type Errors = {
  [key: string]: boolean;
};

const DEFAULT_FIELDS = {
  name: "",
  email: "",
  company: "",
  desc: "",
  confirm: false,
};

export const Form = ({
  isModal,
  onOpenChange,
}: {
  isModal?: boolean;
  onOpenChange?: (state: boolean) => void;
}) => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [error, setError] = useState<Errors>({});
  const [isSuccess, setSuccess] = useState(false);

  const checkErrors = () => {
    let hasError = false;

    Object.entries(fields).map((item) => {
      const [name, value] = item;

      if (name !== "company") {
        if (!value && !hasError) {
          hasError = true;
        }

        setError((prev) => ({
          ...prev,
          [name]: !value,
        }));
      }
    });

    return hasError;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setError((prev) => ({
      ...prev,
      [name]:
        name === "confirm"
          ? !checked
          : name === "email"
          ? !value.match(emailRegExp)
          : !value,
    }));

    setFields((prev) => ({
      ...prev,
      [name]: name === "confirm" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    const hasError = checkErrors();

    if (hasError) return;

    try {
      const resp = await fetch("/sendmail", {
        method: "POST",
        body: JSON.stringify({ ...fields }),
      });

      if (resp.status !== 200) {
        throw new Error("error");
      }

      setFields(DEFAULT_FIELDS);

      onOpenChange && onOpenChange(false);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col max-w-[468px] lg:max-w-full lg:flex-row gap-10 items-end mb-20 [&>div]:w-full lg:[&>div]:w-auto",
          isModal && "lg:[&>div]:w-full lg:flex-col mb-0 mt-5"
        )}
      >
        <div className="flex flex-col gap-10 basis-1/3">
          <Input
            label="Имя"
            isFlex
            name="name"
            onChange={handleInputChange}
            value={fields.name}
            aria-invalid={!!error["name"]}
          />
          <Input
            label="E-mail"
            isFlex
            name="email"
            onChange={handleInputChange}
            value={fields.email}
            aria-invalid={!!error["email"]}
          />
        </div>

        <div className="flex flex-col gap-10 basis-1/3">
          <Input
            label="Название компании"
            isFlex
            name="company"
            onChange={handleInputChange}
            value={fields.company}
            aria-invalid={!!error["company"]}
          />
          <Input
            label="Комментарий"
            isFlex
            name="desc"
            onChange={handleInputChange}
            value={fields.desc}
            aria-invalid={!!error["desc"]}
          />
        </div>

        <div className="flex flex-col gap-10 basis-1/3">
          <Confirm
            value={fields.confirm}
            onChange={handleInputChange}
            isError={error["confirm"]}
          />
          <Button
            size="sm"
            onClick={handleSubmit}
            className={cn("w-full lg:w-auto", isModal && "lg:w-full")}
          >
            Отправить
          </Button>
        </div>
      </div>

      {isSuccess && <Success onCloseClick={setSuccess} />}
    </>
  );
};
