import { Container, Graphics, Text } from "pixi.js";
import { createButton } from "./components/Button";

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
  overlay.eventMode = "static";
  overlay.on("pointerdown", () => {
    menuContainer.visible = false;
  });
  menuContainer.addChild(overlay);

  // Menu panel
  const panel = new Graphics();
  panel.roundRect(screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 200, 10);
  panel.fill({ color: "#ffffff" });
  menuContainer.addChild(panel);

  // Title
  const title = new Text({
    text: "Меню",
    style: {
      fontFamily: "Neucha",
      fontSize: 24,
      fill: "#000000",
      align: "center",
    },
  });
  title.x = screenWidth / 2 - title.width / 2;
  title.y = screenHeight / 2 - 80;
  menuContainer.addChild(title);

  // Reset Progress Button
  const resetButton = createButton(
    "Сбросить прогресс",
    screenWidth / 2 - 100,
    screenHeight / 2 - 20,
    200,
    50,
    onResetProgress
  );
  menuContainer.addChild(resetButton);

  // Close Button
  const closeButton = createButton(
    "Закрыть",
    screenWidth / 2 - 100,
    screenHeight / 2 + 40,
    200,
    50,
    () => {
      menuContainer.visible = false;
    }
  );
  menuContainer.addChild(closeButton);

  return menuContainer;
};
