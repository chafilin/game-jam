import { Graphics, Sprite, Texture, Text, Container } from "pixi.js";
import { DropShadowFilter } from "pixi-filters";
import { Card, ImgOptions, Selection, Stats } from "../types/types";

// Create background sprite
export const createBackground = (
  textureSrc: string,
  width: number,
  height: number
): Sprite => {
  const texture = Texture.from(textureSrc);
  const background = new Sprite(texture);
  background.width = width;
  background.height = height;
  return background;
};

// Create settings button sprite
const createSettingsButton = (): Sprite => {
  const sb_texture = Texture.from("settings_button");
  const settingsButton = new Sprite(sb_texture);
  settingsButton.width = 56;
  settingsButton.height = 56;
  settingsButton.x = 16;
  settingsButton.y = 16;
  settingsButton.interactive = true;
  settingsButton.on("pointerdown", () => {
    console.log("Settings button clicked");
    console.log("Action: Settings button clicked");
  });
  return settingsButton;
};

// Create character button container
const createCharacterButton = (screenWidth: number): Container => {
  const characterButton = new Container();
  const charBg = new Graphics();
  charBg.fill("#ffffff");
  charBg.roundRect(-6, 0, 230, 56, 10);
  charBg.fill();
  characterButton.addChild(charBg);

  const stat_icon_texture = Texture.from("stat_icon");
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
    console.log("Action: Character button clicked");
  });
  return characterButton;
};

// Create header container
export const createHeader = (screenWidth: number): Container => {
  const header = new Container();
  header.width = screenWidth; // Ensure header adjusts width
  const settingsButton = createSettingsButton();
  header.addChild(settingsButton);

  const characterButton = createCharacterButton(screenWidth);
  header.addChild(characterButton);

  return header;
};

// Create resource container
const createResourceContainer = (
  value: number,
  maxValue: number,
  screenWidth: number
): Container => {
  const resourceContainer = new Container();
  const icon = Texture.from("res_icon");
  const iconSprite = new Sprite(icon);
  iconSprite.width = 40;
  iconSprite.height = 40;
  iconSprite.x = 0;
  iconSprite.y = 0;
  resourceContainer.addChild(iconSprite);

  const background = new Graphics();
  background.fill("#000000");
  background.roundRect(44, 2, screenWidth / 3, 34, 10);
  background.fill();
  resourceContainer.addChild(background);

  const valueBar = new Graphics();
  valueBar.fill("#404040");
  valueBar.roundRect(44, 2, (screenWidth / 3 / maxValue) * value, 34, 10);
  valueBar.fill();
  resourceContainer.addChild(valueBar);

  const valueText = new Text({
    text: `${value}/${maxValue}`,
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

// Create resources container
export const createResources = (
  screenWidth: number,
  stats: Stats
): Container => {
  const resourcesContainer = new Container();
  resourcesContainer.width = screenWidth; // Ensure resources adjust width
  const resourceContainer1 = createResourceContainer(
    stats.dexterity * 10,
    120,
    screenWidth
  );
  resourceContainer1.x = 12;
  resourceContainer1.y = 100;
  resourcesContainer.addChild(resourceContainer1);

  const resourceContainer2 = createResourceContainer(
    stats.magic * 10,
    120,
    screenWidth
  );
  resourceContainer2.x = screenWidth - resourceContainer2.width - 16;
  resourceContainer2.y = 100;
  resourcesContainer.addChild(resourceContainer2);

  const resourceContainer3 = createResourceContainer(
    stats.savvy * 10,
    120,
    screenWidth
  );
  resourceContainer3.x = 12;
  resourceContainer3.y = 146;
  resourcesContainer.addChild(resourceContainer3);

  return resourcesContainer;
};

// Default image options
const defatultImgOptions: ImgOptions = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

// Create image sprite
export const createImage = (
  imgSrc: string,
  options: ImgOptions = defatultImgOptions
): Sprite => {
  const texture = Texture.from(imgSrc);
  const sprite = new Sprite(texture);
  sprite.width = options?.width;
  sprite.height = options?.height;
  sprite.x = options?.x;
  sprite.y = options?.y;
  return sprite;
};

// Create button graphics
const createButton = (
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
  button.fill(color);
  button.roundRect(x, y, width, height + 20, 20); // Increase height by 20
  button.fill();

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
      wordWrapWidth: width - 20, // Wrap text if too long
    },
  });

  buttonText.x = x + width / 2 - buttonText.width / 2;
  buttonText.y = y + (height + 20) / 2 - buttonText.height / 2; // Adjust for increased height

  buttonContainer.addChild(buttonText);

  return buttonContainer;
};

// Create card container with fixed interaction logic
export const createCard = (
  card: Card,
  onSelection: (selection: Selection) => void,
  screenWidth: number,
  onLevelComplete: () => void
): Container => {
  const shadowFilter = new DropShadowFilter({
    color: 0x000000,
    alpha: 0.5,
    blur: 4,
    quality: 3,
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
      wordWrapWidth: cardContainer.width - 20,
    },
  });
  npcLine.x = 20;
  npcLine.y = 48;
  cardContainer.addChild(npcLine);

  if (card.isLastCard) {
    const nextLevelButton = createButton(
      card[Selection.Right].text,
      35,
      cardContainer.height - 80,
      cardContainer.width - 70,
      50,
      "#0000FF",
      () => {
        onLevelComplete();
        console.log("Action: Next level button clicked");
      }
    );
    cardContainer.addChild(nextLevelButton);
  } else {
    if (card[Selection.Left] !== undefined) {
      const leftButton = createButton(
        card[Selection.Left].text,
        10,
        cardContainer.height - 80,
        140,
        50,
        "#176542",
        () => {
          onSelection(Selection.Left);
          console.log("Action: Left button clicked");
        }
      );
      cardContainer.addChild(leftButton);

      const rightButton = createButton(
        card[Selection.Right].text,
        screenWidth - 230,
        cardContainer.height - 80,
        140,
        50,
        "#176542",
        () => {
          onSelection(Selection.Right);
          console.log("Action: Right button clicked");
        }
      );
      cardContainer.addChild(rightButton);
    } else {
      const rightButton = createButton(
        card[Selection.Right].text,
        35,
        cardContainer.height - 80,
        cardContainer.width - 70,
        50,
        "#176542",
        () => {
          onSelection(Selection.Right);
          console.log("Action: Right button clicked");
        }
      );
      cardContainer.addChild(rightButton);
    }
  }

  return cardContainer;
};
