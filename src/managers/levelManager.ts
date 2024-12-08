import { Card, Level, Part } from "../types/types";

export class LevelManager {
  private levels: Level[];
  private currentLevelIndex = 0;
  private currentPartIndex = 0;
  private currentCardId: string = "1";

  constructor(levels: Level[]) {
    this.levels = levels;
  }

  getCurrentLevel(): Level {
    return this.levels[this.currentLevelIndex];
  }

  getCurrentPart(): Part | null {
    const level = this.getCurrentLevel();
    return level.parts ? level.parts[this.currentPartIndex] : null;
  }

  getCurrentBackground(): string {
    const card = this.getCurrentCard();
    return card.background;
  }

  getCurrentCard(): Card {
    return this.getCurrentCards()[this.currentCardId];
  }

  getCurrentCards(): Record<string, Card> {
    return this.getCurrentPart()?.cards || {};
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
  }

  nextPart(): void {
    const level = this.getCurrentLevel();
    if (level.parts && this.currentPartIndex < level.parts.length - 1) {
      this.currentPartIndex++;
      this.currentCardId = "1"; // Reset card ID when part changes
    } else {
      this.nextLevel();
    }
  }

  setCurrentLevel(levelId: string): void {
    const index = this.levels.findIndex((level) => level.id === levelId);
    if (index !== -1) {
      this.currentLevelIndex = index;
      this.currentPartIndex = 0;
      this.currentCardId = "1"; // Reset card ID when level changes
    }
  }

  setCurrentPart(partId: string): void {
    const level = this.getCurrentLevel();
    if (level.parts) {
      const index = level.parts.findIndex((part) => part.id === partId);
      if (index !== -1) {
        this.currentPartIndex = index;
      }
    }
  }

  getCurrentCardId(): string {
    return this.currentCardId;
  }

  setCurrentCardId(cardId: string): void {
    this.currentCardId = cardId;
  }

  getFirstLevelId(): string {
    return this.levels[0].id;
  }
}
