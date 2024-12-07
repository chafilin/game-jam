import { Application, Container, Graphics, Text } from "pixi.js";

export const createLoader = (
  app: Application,
  screenWidth: number,
  screenHeight: number
): Container => {
  const loaderContainer = new Container();
  loaderContainer.label = "loader";

  const loaderText = new Text({
    text: "Loading... 0%",
    style: { fontSize: 24, fill: 0x000000 },
  });
  loaderText.anchor.set(0.5);
  loaderText.position.set(screenWidth / 2, screenHeight / 2 - 30);

  const progressBar = new Graphics();
  progressBar.label = "progressBarFill";
  progressBar.position.set(screenWidth / 2 - 100, screenHeight / 2);

  loaderContainer.addChild(loaderText, progressBar);
  app.stage.addChild(loaderContainer);

  return loaderContainer;
};

export const updateLoader = (loader: Container, progress: number): void => {
  const progressBarFill = loader.getChildByLabel("progressBarFill") as Graphics;
  const loaderText = loader.getChildAt(0) as Text;

  loaderText.text = `Loading... ${Math.round(progress)}%`;
  progressBarFill
    .clear()
    .roundRect(0, 0, (progress / 100) * 200, 20, 10)
    .fill({ color: 0x4caf50 });
};
