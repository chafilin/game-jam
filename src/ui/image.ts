import { Sprite, Texture } from "pixi.js";
import { ImgOptions } from "../types/types";

// Create background sprite
export const createBackground = (
  textureSrc: string,
  width: number,
  height: number
): Sprite => {
  const texture = Texture.from(textureSrc);
  const background = new Sprite(texture);
  background.width = width;
  background.height = height;
  return background;
};

// Default image options
const defaultImgOptions: ImgOptions = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

// Create image sprite
export const createImage = (
  imgSrc: string,
  options: ImgOptions = defaultImgOptions
): Sprite => {
  const texture = Texture.from(imgSrc);
  const sprite = new Sprite(texture);
  sprite.width = options?.width;
  sprite.height = options?.height;
  sprite.x = options?.x;
  sprite.y = options?.y;
  return sprite;
};
