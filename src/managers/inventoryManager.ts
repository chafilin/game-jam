import { Item } from "../types/types";

// Inventory singleton
export class InventoryManager {
  private items: Item[] = [];

  private static instance: InventoryManager;

  private constructor() {
    this.items = [];
  }

  static getInstance(): InventoryManager {
    if (!InventoryManager.instance) {
      InventoryManager.instance = new InventoryManager();
    }
    return InventoryManager.instance;
  }

  addItem(item: Item): void {
    console.log("Adding item", item);
    this.items.push(item);
  }

  removeItem(itemId: string): void {
    console.log("Removing item", itemId);
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  hasItem(itemId: string): boolean {
    console.log("Checking if item is in inventory", itemId);
    return this.items.some((item) => item.id === itemId);
  }

  getItems(): Item[] {
    console.log("Getting items", this.items);
    return this.items;
  }

  hasItems(items: string[]): boolean {
    console.log("Checking if items are in inventory", items);
    return items.every((item) => this.hasItem(item));
  }

  setItems(items: Item[]): void {
    console.log("Setting items", items);
    this.items = items;
  }

  clearItems(): void {
    console.log("Clearing items");
    this.items = [];
  }
}
