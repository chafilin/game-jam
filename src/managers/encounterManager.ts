import {
  Card,
  Selection,
  Stats,
  Effect,
  NextDestination,
} from "../types/types";

export class EncounterManager {
  private encounter: Card;
  private cards: Record<string, Card>;
  private stats: Stats;
  private updateStats: (newStats: Stats) => void;
  private onLevelComplete: (destination?: NextDestination) => void;

  constructor(
    cards: Record<string, Card>,
    initialCardId: string,
    stats: Stats,
    updateStats: (newStats: Stats) => void,
    onLevelComplete: (destination?: NextDestination) => void
  ) {
    this.cards = cards;
    this.encounter = cards[initialCardId];
    this.stats = stats;
    this.updateStats = updateStats;
    this.onLevelComplete = onLevelComplete;
  }

  private handleEffect(effect: Effect): Card | null {
    if (effect.stats) {
      const newStats = { ...this.stats };
      Object.entries(effect.stats).forEach(([key, value]) => {
        newStats[key as keyof Stats] += value;
      });
      this.updateStats(newStats);
    }

    if (effect.nextLevel || effect.nextPart) {
      this.onLevelComplete(
        effect.nextLevel
          ? { levelId: effect.nextLevel }
          : { partId: effect.nextPart }
      );
      return null;
    }

    if (effect.nextCard) {
      this.encounter = this.cards[effect.nextCard];
      return this.encounter;
    }

    this.onLevelComplete();
    return null;
  }

  public changeEncounter(selection: Selection): Card | null {
    const selectionData = this.encounter[selection];
    if (!selectionData) return null;

    const meetsRequirements = Object.entries(
      selectionData.requirements || {}
    ).every(([key, value]) => this.stats[key as keyof Stats] >= value);

    if (!meetsRequirements && selectionData.failure) {
      return this.handleEffect(selectionData.failure);
    }

    return this.handleEffect(selectionData.success);
  }

  public getCurrentEncounter(): Card {
    return this.encounter;
  }
}
