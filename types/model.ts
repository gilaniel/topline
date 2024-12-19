export type ChosenImg = {
  id: number;
  url: string;
};

export type Instrument = {
  id: number;
  title: string;
  desc: string;
  desc_list?: string[];
};

export type Influencer = {
  id: number;
  img: string;
  title: string;
  author: string;
  genre: string;
  desc: string;
  socials: {
    name: string;
    subs: string;
    views: string;
    comments: string;
  }[];
};
