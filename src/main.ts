import { Application, Container, Texture, Text } from "pixi.js";
import cardJson from "./cards.json";
import "./style.css";
import { loadAssets } from "./assets";
import { createBackground, createHeader, createResources } from "./ui";
import { Level, Stats } from "./types";
import { LevelManager } from "./levelManager";
import { createEncounter } from "./encounter";

// Масштабирование под мобильные устройства
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Adjust for Safari bottom toolbar
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  screenHeight = window.innerHeight - 56; // Adjust height to account for the toolbar
}

// Load card data
const LEVELS = cardJson.levels as unknown as Level[];

// Initialize the game
const init = async () => {
  const app = await createApp();
  showLoader(app);

  await loadAssets();
  hideLoader(app);

  const levelManager = new LevelManager(LEVELS);
  let currentLevel = levelManager.getCurrentLevel();
  let currentCardId = "1";

  const background = createBackground(
    currentLevel.background,
    screenWidth,
    screenHeight
  );
  app.stage.addChild(background);

  const header = createHeader(screenWidth);
  app.stage.addChild(header);

  const stats: Stats = {
    dexterity: 0,
    savvy: 0,
    magic: 0,
  };

  const updateStats = (newStats: Stats) => {
    // Update the existing stats object instead of reassigning
    Object.assign(stats, newStats);
    console.log("Action: Stats updated", stats);
    app.stage.removeChild(resources);
    resources = createResources(screenWidth, stats);
    app.stage.addChild(resources);
  };

  let resources = createResources(screenWidth, stats);
  app.stage.addChild(resources);

  // Calculate the total height occupied by header and resources
  const usedHeight = header.height + resources.height;

  const encounterContainer = new Container();
  // Adjust the encounterContainer position and size
  encounterContainer.y = usedHeight;
  encounterContainer.height = screenHeight - usedHeight;
  app.stage.addChild(encounterContainer);

  const renderLevel = (level: Level, cardId: string) => {
    encounterContainer.removeChildren();
    const encounter = createEncounter(
      screenWidth,
      encounterContainer.height, // Pass the updated height
      level.cards,
      onLevelComplete,
      cardId,
      (newCardId) => {
        currentCardId = newCardId;
      },
      stats,
      updateStats
    );
    encounterContainer.addChild(encounter);
  };

  const onLevelComplete = () => {
    levelManager.nextLevel();
    currentLevel = levelManager.getCurrentLevel();
    currentCardId = "1";
    background.texture = Texture.from(currentLevel.background);
    renderLevel(currentLevel, "1");
    console.log(`Action: Level changed to ${currentLevel.id}`);
  };

  renderLevel(currentLevel, "1");

  window.addEventListener("resize", () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    // Adjust for Safari bottom toolbar
    if (isSafari) {
      screenHeight = window.innerHeight - 56;
    }

    background.width = screenWidth;
    background.height = screenHeight;
    header.width = screenWidth;
    app.stage.removeChild(resources);
    resources = createResources(screenWidth, stats);
    app.stage.addChild(resources);

    // Recalculate used height and adjust encounterContainer
    const usedHeight = header.height + resources.height;
    encounterContainer.y = usedHeight;
    encounterContainer.height = screenHeight - usedHeight;

    renderLevel(currentLevel, currentCardId);
  });
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

  // @ts-expect-error add the application to the global scope
  globalThis.__PIXI_APP__ = app;

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);
  return app;
};

const showLoader = (app: Application) => {
  const loaderText = new Text({
    text: "Loading...",
    style: {
      fontSize: 36,
      fill: "#000000",
    },
  });
  loaderText.x = screenWidth / 2 - loaderText.width / 2;
  loaderText.y = screenHeight / 2 - loaderText.height / 2;
  app.stage.addChild(loaderText);
};

const hideLoader = (app: Application) => {
  app.stage.removeChildren();
};

init();
