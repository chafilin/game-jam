import { Container, Graphics, Text } from "pixi.js";

export const createButton = (
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  onClick: () => void
): Container => {
  const buttonContainer = new Container();
  const button = new Graphics();
  button.roundRect(x, y, width, height + 20, 20);
  button.fill({ color });

  buttonContainer.interactive = true;
  buttonContainer.on("pointerdown", onClick);
  buttonContainer.addChild(button);

  const buttonText = new Text({
    text,
    style: {
      fontSize: 14,
      fill: "#ffffff",
      align: "center",
      wordWrap: true,
      wordWrapWidth: width - 20,
    },
  });

  buttonText.x = x + width / 2 - buttonText.width / 2;
  buttonText.y = y + (height + 20) / 2 - buttonText.height / 2;

  buttonContainer.addChild(buttonText);

  return buttonContainer;
};
