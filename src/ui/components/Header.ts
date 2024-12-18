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

  characterButton.interactive = true;
  characterButton.on("pointerdown", () => {
    console.log("Character button clicked");
    console.log("Action: Character button clicked");
    onCharacterClick();
  });
  return characterButton;
};

export class Header extends Container {
  private settingsButton: Sprite;
  private characterButton: Container;

  constructor(
    screenWidth: number,
    onSettingsClick: () => void,
    onCharacterClick: () => void
  ) {
    super();

    this.settingsButton = createSettingsButton(onSettingsClick);
    this.addChild(this.settingsButton);

    this.characterButton = createCharacterButton(screenWidth, onCharacterClick);
    this.addChild(this.characterButton);
  }

  resize(screenWidth: number) {
    this.settingsButton.x = 16;
    this.characterButton.x = screenWidth - 16 - this.characterButton.width;
  }
}
