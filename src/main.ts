import { Application } from "pixi.js";
import cardJson from "./data/cards.json";
import "./style.css";
import { loadAssets } from "./utils/assets";
import { Level } from "./types/types";
import { GameManager } from "./managers/gameManager";
import { createLoader, updateLoader } from "./ui/components/Loader";

// Масштабирование под мобильные устройства
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Load card data
const LEVELS = cardJson.levels as unknown as Level[];

// Initialize the game
const init = async () => {
  const app = await createApp();
  const loader = createLoader(app, screenWidth, screenHeight);

  await loadAssets((progress) => {
    updateLoader(loader, progress);
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
