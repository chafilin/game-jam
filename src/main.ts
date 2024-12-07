import { Application, Text, Graphics, Container } from "pixi.js";
import cardJson from "./data/cards.json";
import "./style.css";
import { loadAssets } from "./utils/assets";
import { Level } from "./types/types";

import { GameManager } from "./managers/gameManager";

// Масштабирование под мобильные устройства
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Load card data
const LEVELS = cardJson.levels as unknown as Level[];

const createLoader = (app: Application): void => {
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
};

// Initialize the game
const init = async () => {
  const app = await createApp();
  createLoader(app);

  await loadAssets((progress) => {
    const loader = app.stage.getChildByLabel("loader");
    if (loader) {
      const progressBarFill = loader.getChildByLabel(
        "progressBarFill"
      ) as Graphics;
      const loaderText = loader.getChildAt(0) as Text;

      loaderText.text = `Loading... ${Math.round(progress)}%`;
      progressBarFill
        .clear()
        .roundRect(0, 0, (progress / 100) * 200, 20, 10)
        .fill({ color: 0x4caf50 });
    }
  });

  const gameManager = new GameManager(app, LEVELS, screenWidth, screenHeight);
  gameManager.start();

  window.addEventListener("resize", () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    gameManager.resize(screenWidth, screenHeight);
  });
};

const createApp = async (): Promise<Application> => {
  const app = new Application();
  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    background: "#ffffff", // белый фон
    resizeTo: document.body,
  });

  // @ts-expect-error add the application to the global scope
  globalThis.__PIXI_APP__ = app;

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);
  return app;
};

init();
