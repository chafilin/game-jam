import { Card, Selection, SelectionData, Stats } from "../types/types";

export class EncounterManager {
  private encounter: Card;
  private cards: Record<string, Card>;
  private stats: Stats;
  private updateStats: (newStats: Stats) => void;
  private saveCurrentCardId: (cardId: string) => void;
  private onLevelComplete: (nextLevelId?: string) => void;

  constructor(
    cards: Record<string, Card>,
    initialCardId: string,
    stats: Stats,
    updateStats: (newStats: Stats) => void,
    saveCurrentCardId: (cardId: string) => void,
    onLevelComplete: (nextLevelId?: string) => void
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

  private checkStatRequirements(selectionData: SelectionData): boolean {
    if (!selectionData.statRequirements) {
      return true;
    }
    return Object.entries(selectionData.statRequirements).every(
      ([key, value]) => this.stats[key as keyof Stats] >= value
    );
  }

  private handleStatChanges(selectionData: SelectionData): void {
    const newStats = { ...this.stats };
    if (!selectionData.statChanges) {
      return;
    }
    Object.entries(selectionData.statChanges).forEach(([key, value]) => {
      console.log(`Action: ${key} changed by ${value}`);
      newStats[key as keyof Stats] += value;
    });
    this.updateStats(newStats);
  }

  private handleFailure(selectionData: SelectionData): Card | null {
    if (selectionData?.failureCard) {
      this.encounter = this.cards[selectionData.failureCard];
      this.saveCurrentCardId(this.encounter.id);
      console.log(
        `Action: Encounter changed to failure card ${this.encounter.id}`
      );
      return this.encounter;
    } else if (selectionData?.failureLevel !== undefined) {
      this.onLevelComplete(selectionData.failureLevel);
      console.log("Action: Level completed due to stat failure");
      return null;
    }
    console.log(
      "Stat requirements not met",
      selectionData.statRequirements,
      this.stats
    );
    return null;
  }

  private handleNextCard(selection: Selection): Card | null {
    const nextCard = this.getNextCard(this.encounter, selection);
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

  public changeEncounter(selection: Selection): Card | null {
    const selectionData = this.encounter[selection];
    console.log("stats", this.stats);

    if (
      selectionData?.statRequirements &&
      !this.checkStatRequirements(selectionData)
    ) {
      return this.handleFailure(selectionData);
    }

    if (selectionData?.statChanges) {
      this.handleStatChanges(selectionData);
    }

    return this.handleNextCard(selection);
  }

  public getCurrentEncounter(): Card {
    return this.encounter;
  }
}
