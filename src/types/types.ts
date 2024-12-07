export enum Selection {
  Right = "right",
  Left = "left",
}

export type Effect = {
  stats?: Partial<Stats>;
  nextCard?: string;
  nextLevel?: string;
};

export type SelectionData = {
  text: string;
  requirements?: Partial<Stats>;
  success: Effect;
  failure?: Effect;
};

export type Card = {
  id: string;
  imgSrc: string;
  npcName: string;
  npcLine: string;
  [Selection.Right]: SelectionData;
  [Selection.Left]?: SelectionData;
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