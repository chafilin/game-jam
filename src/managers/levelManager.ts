import { Level } from "../types/types";

export class LevelManager {
  private levels: Level[];
  private currentLevelIndex: number;

  constructor(levels: Level[]) {
    this.levels = levels;
    this.currentLevelIndex = 0;
  }

  getCurrentLevel(): Level {
    return this.levels[this.currentLevelIndex];
  }

  nextLevel(): void {
    if (this.currentLevelIndex < this.levels.length - 1) {
      this.currentLevelIndex++;
    }
  }

  previousLevel(): void {
    if (this.currentLevelIndex > 0) {
      this.currentLevelIndex--;
    }
  }

  setCurrentLevel(levelId: string): void {
    const levelIndex = this.levels.findIndex((level) => level.id === levelId);
    if (levelIndex !== -1) {
      this.currentLevelIndex = levelIndex;
    }
  }

  getFirstLevelId(): string {
    return this.levels[0].id;
  }
}
