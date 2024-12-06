import { Application, Container, Texture } from "pixi.js";
import cardJson from "./cards.json";
import "./style.css";
import { loadAssets } from "./assets";
import { createBackground, createHeader, createResources } from "./ui";
import { Level } from "./types";
import { LevelManager } from "./levelManager";
import { createEncounter } from "./encounter";

// Масштабирование под мобильные устройства
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Load card data
const LEVELS = cardJson.levels as unknown as Level[];

// Initialize the game
const init = async () => {
  await loadAssets();
  const app = await createApp();

  const levelManager = new LevelManager(LEVELS);
  let currentLevel = levelManager.getCurrentLevel();

  const background = createBackground(
    currentLevel.background,
    screenWidth,
    screenHeight
  );
  app.stage.addChild(background);

  const header = createHeader(screenWidth);
  app.stage.addChild(header);

  const resources = createResources(screenWidth);
  app.stage.addChild(resources);

  const encounterContainer = new Container();
  app.stage.addChild(encounterContainer);

  const renderLevel = (level: Level) => {
    encounterContainer.removeChildren();
    const encounter = createEncounter(
      screenWidth,
      screenHeight,
      level.cards,
      onLevelComplete
    );
    encounterContainer.addChild(encounter);
  };

  const onLevelComplete = () => {
    levelManager.nextLevel();
    currentLevel = levelManager.getCurrentLevel();
    background.texture = Texture.from(currentLevel.background);
    renderLevel(currentLevel);
    console.log(`Action: Level changed to ${currentLevel.id}`);
  };

  renderLevel(currentLevel);
};

const createApp = async () => {
  const app = new Application();
  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    background: "#ffffff", // белый фон
    resizeTo: document.body,
  });

  // @ts-expect-error
  globalThis.__PIXI_APP__ = app;

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);
  return app;
};

init();
