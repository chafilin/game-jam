export enum Selection {
  Right = "right",
  Left = "left",
}

export type Effect = {
  stats?: Partial<Stats>;
  nextCard?: string;
  nextLevel?: string;
  nextPart?: string;
  addItem?: string;
  removeItem?: string;
};

export type SelectionData = {
  text: string;
  requirements?: Partial<Stats>;
  requirementsItems?: string[];
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

export type Part = {
  id: string;
  background: string;
  cards: Record<string, Card>;
};

export type Level = {
  id: string;
  background: string;
  parts?: Part[];
};

export interface NextDestination {
  levelId?: string;
  partId?: string;
}

export type Item = {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
};

export const ITEMS: Record<string, Item> = {
  key: {
    id: "key",
    name: "Rusty Key",
    description: "An old key that might open something",
    imgSrc: "key_icon",
  },
  // Add more items as needed
};
