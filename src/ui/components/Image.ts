import { Sprite, Texture, BlurFilter } from "pixi.js";

import { ImgOptions } from "../../types/types";

// Create background sprite with blur effect
export const createBackground = (
  textureSrc: string,
  width: number,
  height: number
): Sprite => {
  const texture = Texture.from(textureSrc);
  const background = new Sprite(texture);
  const blurFilter = new BlurFilter();
  background.filters = [blurFilter];
  background.width = width;
  background.height = height;
  return background;
};

// Create image sprite
export const createImage = (
  imgSrc: string,
  options: ImgOptions = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }
): Sprite => {
  if (!imgSrc) {
    return new Sprite({ height: options.height, width: options.width });
  }
  const texture = Texture.from(imgSrc);
  const sprite = new Sprite(texture);

  // Set position
  sprite.x = options?.x;
  sprite.y = options?.y;

  // If width or height specified, scale proportionally
  if (options?.width || options?.height) {
    const aspectRatio = texture.width / texture.height;

    if (options?.height) {
      // Height is max height - scale width proportionally
      sprite.height = options.height;
      sprite.width = options.height * aspectRatio;
    }
    if (options?.width) {
      // Only use width if resulting height would be less than max
      const heightFromWidth = options.width / aspectRatio;
      if (!options.height || heightFromWidth <= options.height) {
        sprite.width = options.width;
        sprite.height = heightFromWidth;
      }
    }
  }

  return sprite;
};
