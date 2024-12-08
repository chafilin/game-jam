import { Container, Sprite, Texture } from "pixi.js";

const ICON_SIZE = 88;

const createSettingsButton = (onClick: () => void): Sprite => {
  const sb_texture = Texture.from("settings");
  const settingsButton = new Sprite(sb_texture);
  settingsButton.width = ICON_SIZE;
  settingsButton.height = ICON_SIZE;
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

const createCharacterButton = (
  screenWidth: number,
  onCharacterClick: () => void
): Container => {
  const player_texture = Texture.from("player");
  const characterButton = new Sprite(player_texture);
  characterButton.width = ICON_SIZE;
  characterButton.height = ICON_SIZE;
  characterButton.x = screenWidth - 16 - characterButton.width;
  characterButton.y = 16;
  characterButton.eventMode = "static";
  characterButton.cursor = "pointer";

  characterButton.x = screenWidth - 16 - characterButton.width;
  characterButton.y = 16;

  characterButton.interactive = true;
  characterButton.on("pointerdown", () => {
    console.log("Character button clicked");
    console.log("Action: Character button clicked");
    onCharacterClick();
  });
  return characterButton;
};

export const createHeader = (
  screenWidth: number,
  onSettingsClick: () => void,
  onCharacterClick: () => void
): Container => {
  const header = new Container();
  header.width = screenWidth;

  const settingsButton = createSettingsButton(onSettingsClick);
  header.addChild(settingsButton);

  const characterButton = createCharacterButton(screenWidth, onCharacterClick);
  header.addChild(characterButton);

  return header;
};
