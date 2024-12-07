export enum Selection {
  Right = "right",
  Left = "left",
}

export type SelectionData = {
  text: string;
  nextCard: string | null;
  statChanges?: Partial<Stats>;
  statRequirements?: Partial<Stats>;
  failureCard?: string;
  failureLevel?: string;
};

export type Card = {
  id: string;
  imgSrc: string;
  npcName: string;
  npcLine: string;
  [Selection.Right]: SelectionData;
  [Selection.Left]?: SelectionData;
  isLastCard?: boolean;
};

export type Stats = {
  dexterity: number;
  savvy: number;
  magic: number;
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

export type Player = {
  stats: Stats;
};
