export enum Selection {
  Right = "right",
  Left = "left",
}

export type Card = {
  id: string;
  imgSrc: string;
  npcName: string;
  npcLine: string;
  [Selection.Right]: {
    text: string;
    nextCard: string | null;
  };
  [Selection.Left]?: {
    text: string;
    nextCard: string | null;
  };
  isLastCard?: boolean;
};

export type ImgOptions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Game = {
  currentCard: string;
  cards: Record<string, Card>;
};

export type Level = {
  id: string;
  background: string;
  cards: Record<string, Card>;
};
