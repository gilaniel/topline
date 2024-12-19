import { images } from "./chosen";
import { influencers } from "./influencers";
import { instruments } from "./instruments";

export async function getChosenImages() {
  return Promise.resolve(images);
}

export async function getInstruments() {
  return Promise.resolve(instruments);
}

export async function getInfluencers() {
  return Promise.resolve(influencers);
}
