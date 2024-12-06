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
    nextCard: string;
  };
  [Selection.Decline]: {
    text: string;
    nextCard: string;
  };
};

export type ImgOptions = {
  x: number;
  y: number;
  width: number;
  height: number;
};
