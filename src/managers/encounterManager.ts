import { Card, Selection, Stats, Effect } from "../types/types";
import { LevelManager } from "./levelManager";
import { InventoryManager } from "./inventoryManager";
import { ITEMS } from "../data/items";

const rollD20 = () => {
  const roll = Math.floor(Math.random() * 20) + 1;
  console.log("Roll: ", roll);
  return roll;
};

export class EncounterManager {
  private encounter: Card;
  private stats: Stats;
  private updateStats: (newStats: Stats) => void;
  private levelManager: LevelManager;

  constructor(
    encounter: Card,
    stats: Stats,
    updateStats: (newStats: Stats) => void,
    levelManager: LevelManager
  ) {
    this.encounter = encounter;
    this.stats = stats;
    this.updateStats = updateStats;
    this.levelManager = levelManager;
  }

  private handleEffect(effect: Effect): void {
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

    if (effect.nextLevel) {
      this.levelManager.setCurrentLevel(effect.nextLevel);
      this.levelManager.setCurrentCardId("1");
    } else if (effect.nextPart) {
      this.levelManager.setCurrentPart(effect.nextPart);
      this.levelManager.setCurrentCardId("1");
    } else if (effect.nextCard) {
      this.levelManager.setCurrentCardId(effect.nextCard);
    } else {
      this.levelManager.nextPart();
      this.levelManager.setCurrentCardId("1");
    }
  }

  public changeEncounter(selection: Selection): void {
    const selectionData = this.encounter[selection];
    if (!selectionData) return;

    const meetsRequirements = Object.entries(
      selectionData.requirements || {}
    ).every(([key, value]) => {
      const stat = this.stats[key as keyof Stats];
      const check = stat + rollD20() >= value;
      console.log("Stat:", stat);
      console.log("Requirements", key, value);
      console.log("Requirements check", check);
      return check;
    });

    if (!meetsRequirements && selectionData.failure) {
      this.handleEffect(selectionData.failure);
    } else {
      this.handleEffect(selectionData.success);
    }

    this.encounter = this.levelManager.getCurrentCard();
  }

  public getCurrentEncounter(): Card {
    return this.encounter;
  }
}
