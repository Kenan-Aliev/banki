import { StaticImageData } from 'next/image';

export interface NewsInterface {
  title: string;
  text: string;
  id: number;
  image?: StaticImageData;
  subtitle: string;
}

export interface NewsItemT {
  subtitle: string;
  id: number;
  image: string;
  title: string;
  text: string;
}

export interface NewsResponseT {
  cards: NewsItemT[];
  result: boolean;
  len: number;
}

export interface NewItemReponseT {
  card: NewsItemT;
  result: boolean;
}
