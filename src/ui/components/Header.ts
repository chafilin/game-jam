import { Container, Sprite, Texture, Text, Ticker } from "pixi.js";
import { Stats } from "../../types/types";

const ICON_SIZE = 88;
const STATS_MAP = {
  dexterity: "Ловкость",
  savvy: "Смекалка",
  magic: "Магия",
  karma: "Карма",
};

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
  private changeQueue: string[] = [];
  private isAnimating: boolean = false;
  private animationDelay: number = 500; // Delay in milliseconds

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

  // Show stats animated changes under the character icon
  animateStatsChange(stats: Partial<Stats>) {
    let statsText = "";
    for (const key in stats) {
      const statKey = key as keyof Stats;
      const value = stats[statKey];
      if (!value) {
        continue;
      }
      if (value > 0) {
        const pluses = "+".repeat(value);
        statsText += `${pluses} ${STATS_MAP[statKey]} `;
      } else if (value < 0) {
        const minuses = "-".repeat(-value);
        statsText += `${minuses} ${STATS_MAP[statKey]} `;
      }
    }
    this.enqueueChange(statsText);
  }

  animateInventoryChange = (inventoryChange: string) => {
    this.enqueueChange(inventoryChange);
  };

  private enqueueChange(change: string) {
    this.changeQueue.push(change);
    if (!this.isAnimating) {
      this.processNextChange();
    }
  }

  private processNextChange() {
    if (this.changeQueue.length === 0) {
      this.isAnimating = false;
      return;
    }

    this.isAnimating = true;
    const change = this.changeQueue.shift()!;
    this.animateChanges(change);
  }

  private animateChanges = (str: string) => {
    const statChangeText = new Text({
      text: str,
      style: {
        fontFamily: "Neucha",
        fontSize: 24,
        fill: "#FFFDDD",
      },
    });

    // Position the text below the character button
    statChangeText.x =
      this.characterButton.x +
      this.characterButton.width / 2 -
      statChangeText.width / 2;
    statChangeText.y =
      this.characterButton.y + this.characterButton.height + 10;

    this.addChild(statChangeText);

    // Delay before starting the animation
    setTimeout(() => {
      const ticker = new Ticker();
      let alpha = 1;
      let y = statChangeText.y;

      ticker.add(() => {
        y -= 1; // Move up
        alpha -= 0.02; // Fade out

        statChangeText.y = y;
        statChangeText.alpha = alpha;

        if (alpha <= 0) {
          ticker.stop();
          this.removeChild(statChangeText);
          this.processNextChange();
        }
      });

      ticker.start();
    }, this.animationDelay);
  };
}
