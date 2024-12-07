import { Card, Level, Part } from "../types/types";

export class LevelManager {
  private levels: Level[];
  private currentLevelIndex: number = 0;
  private currentPartIndex: number = 0;

  constructor(levels: Level[]) {
    this.levels = levels;
  }

  getCurrentLevel(): Level {
    return this.levels[this.currentLevelIndex];
  }

  getCurrentPart(): Part {
    const level = this.getCurrentLevel();
    if (!level.parts || level.parts.length === 0) {
      throw new Error(`Level ${level.id} has no parts`);
    }
    return level.parts[this.currentPartIndex];
  }

  getCurrentBackground(): string {
    return this.getCurrentPart().background;
  }

  getCurrentCards(): Record<string, Card> {
    return this.getCurrentPart().cards;
  }

  nextLevel(): void {
    if (this.currentLevelIndex < this.levels.length - 1) {
      this.currentLevelIndex++;
      this.currentPartIndex = 0;
    }
  }

  nextPart(): void {
    const level = this.getCurrentLevel();
    if (level.parts && this.currentPartIndex < level.parts.length - 1) {
      this.currentPartIndex++;
    } else {
      this.nextLevel();
    }
  }

  setCurrentLevel(levelId: string): void {
    const levelIndex = this.levels.findIndex((level) => level.id === levelId);
    if (levelIndex !== -1) {
      this.currentLevelIndex = levelIndex;
      this.currentPartIndex = 0;
    }
  }

  getFirstLevelId(): string {
    return this.levels[0].id;
  }

  setCurrentPart(partId: string): void {
    const level = this.getCurrentLevel();
    if (!level.parts) return;

    const partIndex = level.parts.findIndex((part) => part.id === partId);
    if (partIndex !== -1) {
      this.currentPartIndex = partIndex;
    }
  }
}
