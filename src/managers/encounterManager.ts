import { Card, Selection, Stats, Effect } from "../types/types";

export class EncounterManager {
  private encounter: Card;
  private cards: Record<string, Card>;
  private stats: Stats;
  private updateStats: (newStats: Stats) => void;
  private saveCurrentCardId: (cardId: string) => void;
  private onLevelComplete: (nextLevelId?: string) => void;
  private currentLevelId: string;

  constructor(
    cards: Record<string, Card>,
    initialCardId: string,
    stats: Stats,
    updateStats: (newStats: Stats) => void,
    saveCurrentCardId: (cardId: string) => void,
    onLevelComplete: (nextLevelId?: string) => void,
    currentLevelId: string
  ) {
    this.cards = cards;
    this.encounter = cards[initialCardId];
    this.stats = stats;
    this.updateStats = updateStats;
    this.saveCurrentCardId = saveCurrentCardId;
    this.onLevelComplete = onLevelComplete;
    this.currentLevelId = currentLevelId;
  }

  private handleEffect(effect: Effect): Card | null {
    if (effect.stats) {
      const newStats = { ...this.stats };
      Object.entries(effect.stats).forEach(([key, value]) => {
        console.log(`Action: ${key} changed by ${value}`);
        newStats[key as keyof Stats] += value;
      });
      this.updateStats(newStats);
    }

    if (effect.nextLevel) {
      this.onLevelComplete(effect.nextLevel);
      return null;
    }

    if (effect.nextCard) {
      if (effect.nextCard === "1" && this.currentLevelId === "level1") {
        this.updateStats({ dexterity: 0, savvy: 0, magic: 0 });
      }

      this.encounter = this.cards[effect.nextCard];
      this.saveCurrentCardId(this.encounter.id);
      return this.encounter;
    }

    this.onLevelComplete();
    return null;
  }

  public changeEncounter(selection: Selection): Card | null {
    const selectionData = this.encounter[selection];
    console.log("stats", this.stats);

    if (selectionData?.requirements) {
      const meetsRequirements = Object.entries(
        selectionData.requirements
      ).every(([key, value]) => this.stats[key as keyof Stats] >= value);

      if (!meetsRequirements && selectionData.failure) {
        return this.handleEffect(selectionData.failure);
      }
    }

    if (!selectionData) {
      return null;
    }

    return this.handleEffect(selectionData.success);
  }

  public getCurrentEncounter(): Card {
    return this.encounter;
  }
}
