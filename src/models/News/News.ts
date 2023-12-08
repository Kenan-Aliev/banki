import { StaticImageData } from 'next/image';

export interface NewsInterface {
  id: number;
  title: string;
  text: string;
  summary?: string
  content?: string
  image?: StaticImageData;
  subtitle: string;
}


export interface NewsResponseT {
  cards: NewsInterface[];
  result: boolean;
  len: number;
}

export interface NewItemReponseT {
  card: NewsInterface;
  result: boolean;
}
