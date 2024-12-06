import { Container, Graphics, Sprite, Text, Texture } from "pixi.js";

const createSettingsButton = (onClick: () => void): Sprite => {
  const sb_texture = Texture.from("settings_button");
  const settingsButton = new Sprite(sb_texture);
  settingsButton.width = 56;
  settingsButton.height = 56;
  settingsButton.x = 16;
  settingsButton.y = 16;
  settingsButton.eventMode = "static";
  settingsButton.cursor = "pointer";
  settingsButton.on("pointerdown", () => {
    console.log("Settings button clicked");
    console.log("Action: Settings button clicked");
    onClick();
  });
  return settingsButton;
};

const createCharacterButton = (screenWidth: number): Container => {
  const characterButton = new Container();
  const charBg = new Graphics();
  charBg.roundRect(-6, 0, 230, 56, 10);
  charBg.fill({ color: "#ffffff" });
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

export const createHeader = (
  screenWidth: number,
  onSettingsClick: () => void
): Container => {
  const header = new Container();
  header.width = screenWidth;

  const settingsButton = createSettingsButton(onSettingsClick);
  header.addChild(settingsButton);

  const characterButton = createCharacterButton(screenWidth);
  header.addChild(characterButton);

  return header;
};
