import {
  getChosenImages,
  getInfluencers,
  getInstruments,
} from "@/data-access/api";
import { About } from "./components/about";
import { Animate } from "./components/animate";
import { Chosen } from "./components/chosen";
import { Hero } from "./components/hero";
import { Instruments } from "./components/instruments";
import { ContactsDialog } from "@/components/contactsDialog";
import { Suspense } from "react";
import { Influencers } from "./components/influencers";

export default async function Home() {
  const images = await getChosenImages();
  const instruments = await getInstruments();
  const influencers = await getInfluencers();

  return (
    <main>
      <div className="container">
        <div className="flex flex-col items-center">
          <Hero />
          <About />
          <Animate />
          <Instruments instruments={instruments} />
        </div>
      </div>

      <Influencers influencers={influencers} />

      <div className="container">
        <div className="flex flex-col items-center">
          <Chosen images={images} />
        </div>
      </div>

      <Suspense>
        <ContactsDialog />
      </Suspense>
    </main>
  );
}
