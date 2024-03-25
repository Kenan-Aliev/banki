import { StaticImageData } from 'next/image';

export interface NewsInterface {
  id: number;
  title: string;
  text: string;   // надо потом убрать
  summary?: string
  content?: string
  image?: string;  // убрать потом
  tags?: string[]
  subtitle?: string;        // убрать
  news_type?: {
    title: string
  }
  publish_date?: string
}

export interface NewsCategory {
  id: number
  title: string
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
