import { Container, Graphics, Sprite, Text, Texture } from "pixi.js";

export const createButton = (
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  onClick: () => void,
): Container => {
  const buttonContainer = new Container();
  const button = new Graphics();
  const buttonBg = new Sprite();
  buttonBg.texture = Texture.from("woodButton");
  buttonBg.width = width;
  buttonBg.height = height;
  buttonBg.x = x;
  buttonBg.y = y;
  buttonBg.label = "buttonBg";
  buttonContainer.addChild(buttonBg);

  buttonContainer.interactive = true;
  buttonContainer.on("pointerdown", () => {
    buttonBg.texture = Texture.from("woodButtonPressed");
  });
  buttonContainer.on("pointerup", () => {
    buttonBg.texture = Texture.from("woodButton");
    onClick();
  });
  buttonContainer.addChild(button);

  const buttonText = new Text({
    text,
    style: {
      fontFamily: "Neucha",
      fontSize: 23,
      fill: "#ffffff",
      align: "center",
      wordWrap: true,
      wordWrapWidth: width - 20,
      stroke: {
        color: "#42210B",
        width: 2,
      },
    },
  });

  buttonText.x = x + width / 2 - buttonText.width / 2;
  buttonText.y = y + height / 2 - buttonText.height / 2;

  buttonContainer.addChild(buttonText);

  return buttonContainer;
};
