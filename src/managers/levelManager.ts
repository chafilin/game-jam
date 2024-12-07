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
}
