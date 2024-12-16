import { Card, Level, Part } from "../types/types";

export class LevelManager {
  private levels: Level[];
  private currentLevelIndex = 0;
  private currentPartIndex = 0;
  private currentCardId: string = "1";
  private onSaveProgress: () => void;

  constructor(levels: Level[], onSaveProgress: () => void) {
    this.levels = levels;
    this.onSaveProgress = onSaveProgress;
    console.log("LevelManager initialized with levels:", levels);
  }

  getCurrentLevel(): Level {
    const level = this.levels[this.currentLevelIndex];
    console.log("Current level:", level);
    return level;
  }

  getCurrentPart(): Part | null {
    const level = this.getCurrentLevel();
    const part = level.parts ? level.parts[this.currentPartIndex] : null;
    console.log("Current part:", part);
    return part;
  }

  getCurrentBackground(): string {
    const card = this.getCurrentCard();
    console.log("Current background:", card.background);
    return card.background;
  }

  getCurrentCard(): Card {
    const card = this.getCurrentCards()[this.currentCardId];
    console.log("Current card:", card);
    return card;
  }

  getCurrentCards(): Record<string, Card> {
    const cards = this.getCurrentPart()?.cards || {};
    console.log("Current cards:", cards);
    return cards;
  }

  nextLevel(): void {
    if (this.currentLevelIndex < this.levels.length - 1) {
      this.currentLevelIndex++;
      this.currentPartIndex = 0;
      this.currentCardId = "1"; // Reset card ID when level changes
    } else {
      this.currentLevelIndex = 0; // Loop back to the first level if needed
      this.currentPartIndex = 0;
      this.currentCardId = "1";
    }
    this.onSaveProgress();
    console.log(
      "Moved to next level. Current level index:",
      this.currentLevelIndex
    );
  }

  nextPart(): void {
    const level = this.getCurrentLevel();
    if (level.parts && this.currentPartIndex < level.parts.length - 1) {
      this.currentPartIndex++;
      this.currentCardId = "1"; // Reset card ID when part changes
    } else {
      this.nextLevel();
    }
    console.log(
      "Moved to next part. Current part index:",
      this.currentPartIndex
    );
  }

  setCurrentLevel(levelId: string): void {
    const index = this.levels.findIndex((level) => level.id === levelId);
    if (index !== -1) {
      this.currentLevelIndex = index;
      this.currentPartIndex = 0;
      this.currentCardId = "1"; // Reset card ID when level changes
      console.log("Set current level to:", levelId);
    }
    if (levelId !== "level1") {
      this.onSaveProgress();
    }
  }

  setCurrentPart(partId: string): void {
    const level = this.getCurrentLevel();
    if (level.parts) {
      const index = level.parts.findIndex((part) => part.id === partId);
      if (index !== -1) {
        this.currentPartIndex = index;
        console.log("Set current part to:", partId);
      }
    }
  }

  getCurrentCardId(): string {
    console.log("Current card ID:", this.currentCardId);
    return this.currentCardId;
  }

  setCurrentCardId(cardId: string): void {
    this.currentCardId = cardId;
    console.log("Set current card ID to:", cardId);
  }

  getFirstLevelId(): string {
    const firstLevelId = this.levels[0].id;
    console.log("First level ID:", firstLevelId);
    return firstLevelId;
  }
}
