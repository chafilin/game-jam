import { Card, Selection, Stats } from "../types/types";

export class EncounterManager {
  private encounter: Card;
  private cards: Record<string, Card>;
  private stats: Stats;
  private updateStats: (newStats: Stats) => void;
  private saveCurrentCardId: (cardId: string) => void;
  private onLevelComplete: () => void;

  constructor(
    cards: Record<string, Card>,
    initialCardId: string,
    stats: Stats,
    updateStats: (newStats: Stats) => void,
    saveCurrentCardId: (cardId: string) => void,
    onLevelComplete: () => void
  ) {
    this.cards = cards;
    this.encounter = cards[initialCardId];
    this.stats = stats;
    this.updateStats = updateStats;
    this.saveCurrentCardId = saveCurrentCardId;
    this.onLevelComplete = onLevelComplete;
  }

  private getNextCard(currentCard: Card, selection: Selection): Card | null {
    if (!currentCard[selection]?.nextCard) {
      return null;
    }
    return this.cards[currentCard[selection].nextCard];
  }

  public changeEncounter(selection: Selection): Card | null {
    const nextCard = this.getNextCard(this.encounter, selection);
    const selectionData = this.encounter[selection];
    console.log("stats", this.stats);

    if (selectionData?.statRequirements) {
      const requirementsMet = Object.entries(
        selectionData.statRequirements
      ).every(([key, value]) => this.stats[key as keyof Stats] >= value);
      if (!requirementsMet) {
        console.log(
          "Stat requirements not met",
          selectionData.statRequirements,
          this.stats
        );
        return null;
      }
    }

    if (selectionData?.statChanges) {
      const newStats = { ...this.stats };
      Object.entries(selectionData.statChanges).forEach(([key, value]) => {
        console.log(`Action: ${key} changed by ${value}`);
        newStats[key as keyof Stats] += value;
      });
      this.updateStats(newStats);
    }

    if (nextCard) {
      this.encounter = nextCard;
      this.saveCurrentCardId(nextCard.id);
      console.log(
        `Action: Encounter changed to card ${this.encounter.npcName}`
      );
      return this.encounter;
    } else if (this.encounter.isLastCard) {
      this.onLevelComplete();
      console.log("Action: Level completed");
      return null;
    } else {
      this.onLevelComplete();
      console.log("Action: Level completed");
      return null;
    }
  }

  public getCurrentEncounter(): Card {
    return this.encounter;
  }
}
