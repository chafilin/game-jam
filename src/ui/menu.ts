import { Container, Graphics, Text } from "pixi.js";

export const createMenu = (
  screenWidth: number,
  screenHeight: number,
  onResetProgress: () => void
): Container => {
  const menuContainer = new Container();

  // Semi-transparent background
  const overlay = new Graphics();
  overlay.rect(0, 0, screenWidth, screenHeight);
  overlay.fill({ color: "#000000", alpha: 0.5 });
  menuContainer.addChild(overlay);

  // Menu panel
  const panel = new Graphics();
  panel.roundRect(screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 200, 10);
  panel.fill({ color: "#ffffff" });
  menuContainer.addChild(panel);

  // Title
  const title = new Text({
    text: "Menu",
    style: {
      fontSize: 24,
      fill: "#000000",
      align: "center",
    },
  });
  title.x = screenWidth / 2 - title.width / 2;
  title.y = screenHeight / 2 - 80;
  menuContainer.addChild(title);

  // Reset Progress Button
  const resetButton = createMenuButton(
    "Reset Progress",
    screenWidth / 2 - 100,
    screenHeight / 2 - 20,
    200,
    40,
    "#FF4444",
    onResetProgress
  );
  menuContainer.addChild(resetButton);

  // Close Button
  const closeButton = createMenuButton(
    "Close",
    screenWidth / 2 - 100,
    screenHeight / 2 + 40,
    200,
    40,
    "#176542",
    () => {
      menuContainer.visible = false;
    }
  );
  menuContainer.addChild(closeButton);

  return menuContainer;
};

const createMenuButton = (
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
  button.roundRect(0, 0, width, height, 8);
  button.fill({ color });
  buttonContainer.addChild(button);

  const buttonText = new Text({
    text,
    style: {
      fontSize: 16,
      fill: "#FFFFFF",
      align: "center",
    },
  });
  buttonText.x = width / 2 - buttonText.width / 2;
  buttonText.y = height / 2 - buttonText.height / 2;
  buttonContainer.addChild(buttonText);

  buttonContainer.x = x;
  buttonContainer.y = y;
  buttonContainer.eventMode = "static";
  buttonContainer.cursor = "pointer";
  buttonContainer.on("pointerdown", onClick);

  return buttonContainer;
};
