"use client";

import { useEffect, useState } from "react";
import { Form } from "./form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useRouter, useSearchParams } from "next/navigation";

export const ContactsDialog = () => {
  const router = useRouter();
  const params = useSearchParams();
  const isOpenContacts = !!params.get("isOpen");

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpenContacts) return;

    setOpen(isOpenContacts);
    router.replace("/", { scroll: false });
  }, [isOpenContacts]);

  const css = `
    body[data-scroll-locked] {
      margin-right: 0!important;
    }
  `;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-w-[343px] md:max-w-[468px]">
          <DialogHeader>
            <DialogTitle className="text-start">
              Связаться <br />с нами
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <p className="inter">
            Повысьте узнаваемость вашего <br />
            бренда с нами
          </p>

          <Form isModal onOpenChange={setOpen} />
        </DialogContent>
      </Dialog>

      <style>{css}</style>
    </>
  );
};
