import { Stats } from "../types/types";

export class SaveManager {
  private readonly PROGRESS_KEY = "gameProgress";

  public saveProgress(progress: {
    levelId: string;
    cardId: string;
    stats: Stats;
  }): void {
    localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
    console.log("Action: Progress saved", progress);
  }

  public loadProgress(): {
    levelId: string;
    cardId: string;
    stats: Stats;
  } | null {
    const saved = localStorage.getItem(this.PROGRESS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  }

  public resetProgress(): void {
    localStorage.removeItem(this.PROGRESS_KEY);
    console.log("Action: Progress reset");
  }
}
