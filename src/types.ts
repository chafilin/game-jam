export enum Selection {
  Accept = "accept",
  Decline = "decline",
}

export type Card = {
  imgSrc: string;
  npcName: string;
  npcLine: string;
  [Selection.Accept]: {
    text: string;
    nextCard: string | null;
  };
  [Selection.Decline]: {
    text: string | null;
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
