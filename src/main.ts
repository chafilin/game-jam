import {
  Application,
  Graphics,
  Assets,
  Sprite,
  Texture,
  Text,
  Container,
} from "pixi.js";
import cardJson from "./cards.json";
import "./style.css";

import { DropShadowFilter } from "pixi-filters";
import { Card, ImgOptions, Selection } from "./types";

const loadAssets = async () => {
  Assets.add({ alias: "background", src: "assets/bgtest.png" });
  Assets.add({ alias: "settings_button", src: "assets/settings_icon.png" });
  Assets.add({ alias: "stat_icon", src: "assets/stat_icon.png" });
  Assets.add({ alias: "res_icon", src: "assets/res1.png" });
  Assets.add({ alias: "npc_img", src: "assets/npc1.png" });
  Assets.add({ alias: "frog", src: "assets/frog.png" });
  Assets.add({ alias: "sturgeon", src: "assets/sturgeon.png" });
  //  Assets.add({alias: 'background', src: 'bgtest.png'});

  await Assets.load("background");
  await Assets.load("settings_button");
  await Assets.load("stat_icon");
  await Assets.load("res_icon");
  await Assets.load("npc_img");
  await Assets.load("frog");
  await Assets.load("sturgeon");
  //  await Assets.load('background')
};

// Create a new application
const app = new Application();
await app.init({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  background: "#ffffff", // белый фон
  resizeTo: window,
});

// @ts-expect-error
globalThis.__PIXI_APP__ = app;

// Append the application canvas to the document body
document.body.appendChild(app.canvas);

// Масштабирование под мобильные устройства
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const createBackground = (width: number, height: number) => {
  // Задний фон "Background_img"
  const texture = Texture.from("background"); // Замените на путь к вашему изображению
  const background = new Sprite(texture);
  background.width = width;
  background.height = height;

  app.stage.addChild(background);
};

const createHeader = (): Graphics => {
  const header = new Graphics();

  // Кнопка настроек "Settings_button" settings_button
  const sb_texture = Texture.from("settings_button"); // Замените на путь к вашему изображению
  const settingsButton = new Sprite(sb_texture);
  settingsButton.width = 56;
  settingsButton.height = 56;
  settingsButton.x = 16;
  settingsButton.y = 16;
  settingsButton.interactive = true;
  settingsButton.on("pointerdown", () => {
    console.log("Settings button clicked");
  });
  header.addChild(settingsButton);

  // Кнопка персонажа "Character_button"
  const characterButton = new Container();

  const charBg = new Graphics();
  charBg.fill("#ffffff");
  charBg.roundRect(-6, 0, 230, 56, 10);
  charBg.fill();
  characterButton.addChild(charBg);

  const stat_icon_texture = Texture.from("stat_icon"); // Замените на путь к вашему изображению
  const stat_icon = new Sprite(stat_icon_texture);
  stat_icon.width = 50;
  stat_icon.height = 50;
  characterButton.addChild(stat_icon);

  const characterStatus = new Text({
    text: "Любитель загадок",
    style: {
      fontSize: 18,
      fill: "#000000",
      align: "left",
    },
  });
  characterStatus.x = 60;
  characterStatus.y = 16;

  characterButton.x = screenWidth - 16 - characterButton.width;
  characterButton.y = 16;
  characterButton.addChild(characterStatus);
  characterButton.interactive = true;
  characterButton.on("pointerdown", () => {
    console.log("Character button clicked");
  });
  header.addChild(characterButton);
  return header;
};

// Ресурсы "Resources_rows"
const createResourceContainer = (value: number, maxVlue: number): Container => {
  const resourceContainer = new Container();

  // Add icon
  const icon = Texture.from("res_icon");
  const iconSprite = new Sprite(icon);
  iconSprite.width = 40;
  iconSprite.height = 40;
  iconSprite.x = 0;
  iconSprite.y = 0;
  resourceContainer.addChild(iconSprite);

  // Add background
  const background = new Graphics();
  background.fill("#000000");
  background.roundRect(44, 2, screenWidth / 3, 34, 10);
  background.fill();
  resourceContainer.addChild(background);

  // Add value bar
  const valueBar = new Graphics();
  valueBar.fill("#404040");
  valueBar.roundRect(44, 2, (screenWidth / 3 / maxVlue) * value, 34, 10);
  valueBar.fill();
  resourceContainer.addChild(valueBar);

  // Add value text
  const valueText = new Text({
    text: `${value}/${maxVlue}`,
    style: {
      fontSize: 20,
      fill: "#ffffff",
      align: "center",
    },
  });

  valueText.x = resourceContainer.width / 2 - valueText.width / 6;
  valueText.y = resourceContainer.height / 2 - valueText.height / 2;
  resourceContainer.addChild(valueText);

  return resourceContainer;
};

const createResources = () => {
  const resourceContainer = createResourceContainer(50, 120);
  resourceContainer.x = 12;
  resourceContainer.y = 100;
  app.stage.addChild(resourceContainer);

  // Resource_2
  const resourceContainer2 = createResourceContainer(100, 120);
  resourceContainer2.x = screenWidth - resourceContainer2.width - 16;
  resourceContainer2.y = 100;
  app.stage.addChild(resourceContainer2);

  // Resource_3
  const resourceContainer3 = createResourceContainer(80, 120);
  resourceContainer3.x = 12;
  resourceContainer3.y = 146;
  app.stage.addChild(resourceContainer3);

  // Resource_4
  const resourceContainer4 = createResourceContainer(40, 120);
  resourceContainer4.x = screenWidth - resourceContainer4.width - 16;
  resourceContainer4.y = 146;
  app.stage.addChild(resourceContainer4);
};
// Изображение персонажа НПС "NPC_img"

const defatultImgOptions: ImgOptions = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const createImage = (
  imgSrc: string,
  options: ImgOptions = defatultImgOptions
) => {
  const texture = Texture.from(imgSrc);
  const sprite = new Sprite(texture);
  sprite.width = options?.width;
  sprite.height = options?.height;
  sprite.x = options?.x;
  sprite.y = options?.y;
  return sprite;
};

const createNpc = (name: string): Container => {
  const npcImg = createImage(name, {
    x: screenWidth / 2 - 110,
    y: 0,
    width: 220,
    height: 248,
  });
  return npcImg;
};

// Стопка карточек
const createCard = (
  card: Card,
  onSelection: (selection: Selection) => void
): Container => {
  // Добавляем тень с использованием DropShadowFilter
  const shadowFilter = new DropShadowFilter({
    color: 0x000000, // Цвет тени (черный)
    alpha: 0.5, // Прозрачность тени
    blur: 4, // Степень размытия
    quality: 3, // Качество тени
  });

  const cardContainer = new Container();

  const cardBg = new Graphics();
  cardBg.fill("#ffffff");
  cardBg.roundRect(0, 0, screenWidth - 80, 300, 10);
  cardBg.fill();
  cardBg.filters = [shadowFilter];
  cardContainer.addChild(cardBg);

  const npcName = new Text({
    text: card.npcName,
    style: {
      fontSize: 18,
      fill: "#000000",
    },
  });

  npcName.x = 20;
  npcName.y = 20;
  cardContainer.addChild(npcName);

  const npcLine = new Text({
    text: card.npcLine,
    style: {
      fontSize: 20,
      fill: "#000000",
      wordWrap: true,
      wordWrapWidth: cardBg.width - 20,
    },
  });
  npcLine.x = 20;
  npcLine.y = 48;
  cardContainer.addChild(npcLine);

  // Add swipe to accept/decline
  cardContainer.interactive = true;
  cardContainer.on("pointerdown", (event) => {
    const startPosition = event.x;
    cardContainer.on("pointermove", (event) => {
      const currentPosition = event.x;
      const offset = currentPosition - startPosition;
      cardContainer.x = offset;
    });
    cardContainer.on("pointerup", (event) => {
      const endPosition = event.x;

      if (endPosition - startPosition > cardContainer.width / 2) {
        onSelection(Selection.Accept);
      } else if (endPosition - startPosition < -cardContainer.width / 2) {
        onSelection(Selection.Decline);
      } else {
        cardContainer.x = screenWidth / 2 - cardContainer.width / 2;
      }
    });
  });

  const declineButton = createButton(
    card[Selection.Decline].text,
    10,
    cardContainer.height - 60,
    140,
    50,
    "#AE1A2E",
    () => {
      onSelection(Selection.Decline);
    }
  );

  cardContainer.addChild(declineButton);

  const acceptButton = createButton(
    card[Selection.Accept].text,
    screenWidth - 230,
    cardContainer.height - 60,
    140,
    50,
    "#176542",
    () => {
      onSelection(Selection.Accept);
    }
  );
  cardContainer.addChild(acceptButton);
  return cardContainer;
};

const createButton = (
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  onClick: () => void
) => {
  const button = new Graphics();
  button.fill(color);
  button.roundRect(x, y, width, height, 20);
  button.fill();
  button.interactive = true;
  button.on("pointerdown", onClick);
  app.stage.addChild(button);

  const buttonText = new Text({
    text,
    style: {
      fontSize: 20,
      fill: "#ffffff",
      align: "center",
    },
  });

  buttonText.x = x + width / 2 - buttonText.width / 2;
  buttonText.y = y + height / 2 - buttonText.height / 2;

  button.addChild(buttonText);

  return button;
};

const CARDS = cardJson as unknown as Record<string, Card>;

const getNextCard = (currentCard: Card, selection: Selection): Card => {
  return CARDS[currentCard[selection].nextCard];
};

const createEncounter = () => {
  let encounter = CARDS["1"];

  const encounterContainer = new Container();
  encounterContainer.y = screenHeight / 3;
  encounterContainer.height = screenHeight;

  const renderEncounter = (card: Card) => {
    encounterContainer.removeChildren();
    const npc = createNpc(card.imgSrc);
    encounterContainer.addChild(npc);

    const cardStack = createCard(card, changeEncounter);
    cardStack.x = screenWidth / 2 - cardStack.width / 2;
    cardStack.y = encounterContainer.height;
    encounterContainer.addChild(cardStack);
  };

  const changeEncounter = (selection: Selection) => {
    encounter = getNextCard(encounter, selection);
    renderEncounter(encounter);
  };

  // Initial card
  renderEncounter(encounter);
  app.stage.addChild(encounterContainer);
};

await loadAssets();
createBackground(screenWidth, screenHeight);
const header = createHeader();
app.stage.addChild(header);
createResources();
createEncounter();
