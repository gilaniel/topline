import { getChosenImages, getInstruments } from "@/data-access/api";
import { About } from "./components/about";
import { Animate } from "./components/animate";
import { Chosen } from "./components/chosen";
import { Hero } from "./components/hero";
import { Instruments } from "./components/instruments";
import { ContactsDialog } from "@/components/contactsDialog";
import { Suspense } from "react";

export default async function Home() {
  const images = await getChosenImages();
  const instruments = await getInstruments();

  return (
    <div className="container">
      <main className="flex flex-col items-center">
        <Hero />
        <About />
        <Animate />
        <Instruments instruments={instruments} />
        <Chosen images={images} />
      </main>

      <Suspense>
        <ContactsDialog />
      </Suspense>
    </div>
  );
}
