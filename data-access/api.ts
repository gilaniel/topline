import { images } from "./chosen";
import { instruments } from "./instruments";

export async function getChosenImages() {
  return Promise.resolve(images);
}

export async function getInstruments() {
  return Promise.resolve(instruments);
}
