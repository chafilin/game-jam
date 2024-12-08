import {
  Card,
  Selection,
  Stats,
  Effect,
  NextDestination,
} from "../types/types";
import { LevelManager } from "./levelManager";
import { InventoryManager } from "./inventoryManager";
import { ITEMS } from "../data/items";

export class EncounterManager {
  private encounter: Card;
  private cards: Record<string, Card>;
  private stats: Stats;
  private updateStats: (newStats: Stats) => void;
  private updateBackground: (background: string) => void;
  private onLevelComplete: (destination?: NextDestination) => void;
  private levelManager: LevelManager;

  constructor(
    cards: Record<string, Card>,
    initialCardId: string,
    stats: Stats,
    updateStats: (newStats: Stats) => void,
    onLevelComplete: (destination?: NextDestination) => void,
    levelManager: LevelManager,
    updateBackground: (background: string) => void
  ) {
    this.cards = cards;
    this.encounter = cards[initialCardId];
    this.stats = stats;
    this.updateStats = updateStats;
    this.onLevelComplete = onLevelComplete;
    this.levelManager = levelManager;
    this.updateBackground = updateBackground;
  }

  private handleEffect(effect: Effect): Card | null {
    if (effect.stats) {
      const newStats = { ...this.stats };
      Object.entries(effect.stats).forEach(([key, value]) => {
        if (value === 0) {
          newStats[key as keyof Stats] = 0;
        } else {
          const newValue = newStats[key as keyof Stats] + value;
          if (newValue > 120) {
            newStats[key as keyof Stats] = 120;
          } else if (newValue < 0) {
            newStats[key as keyof Stats] = 0;
          } else {
            newStats[key as keyof Stats] += value;
          }
        }
      });
      this.updateStats(newStats);
    }
    const inventoryManager = InventoryManager.getInstance();

    if (effect.addItem) {
      const item = ITEMS[effect.addItem];
      console.log("Adding item", item);
      if (item) {
        inventoryManager.addItem(item);
      }
    }

    if (effect.removeItem) {
      console.log("Removing item", effect.removeItem);
      inventoryManager.removeItem(effect.removeItem);
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
      this.levelManager.setCurrentCardId(effect.nextCard); // Update currentCardId in LevelManager
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

    let nextEncounter;

    if (!meetsRequirements && selectionData.failure) {
      nextEncounter = this.handleEffect(selectionData.failure);
    }

    nextEncounter = this.handleEffect(selectionData.success);
    this.updateBackground(nextEncounter?.background || "");

    return nextEncounter;
  }

  public getCurrentEncounter(): Card {
    return this.encounter;
  }
}
