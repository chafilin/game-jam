import { Application, Container, Text } from "pixi.js";
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

// Initialize the game
const init = async () => {
  const app = await createApp();
  showLoader(app);

  await loadAssets();
  hideLoader(app);

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

const showLoader = (app: Application): void => {
  const loaderContainer = new Container();
  loaderContainer.name = "loader";
  const loaderText = new Text({
    text: "Loading...",
    style: {
      fontSize: 36,
      fill: "#000000",
    },
  });
  loaderText.anchor.set(0.5);
  loaderText.position.set(screenWidth / 2, screenHeight / 2);
  loaderContainer.addChild(loaderText);
  app.stage.addChild(loaderContainer);
};

const hideLoader = (app: Application): void => {
  const loader = app.stage.getChildByName("loader");
  if (loader) {
    app.stage.removeChild(loader);
  }
};

init();
