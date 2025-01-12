import { Container } from "pixi.js";
import { Card, Selection } from "../types/types";
import { EncounterManager } from "../managers/encounterManager";
import { createImage } from "./components/Image";
import { CardComponent } from "./components/Card";

export class Encounter extends Container {
  private blockWidth: number;
  private blockHeight: number;
  private encounterManager: EncounterManager;
  private updateBackground: (background: string) => void;

  constructor(
    width: number,
    height: number,
    encounterManager: EncounterManager,
    updateBackground: (background: string) => void,
  ) {
    super();
    this.blockWidth = width;
    this.blockHeight = height;
    this.encounterManager = encounterManager;
    this.updateBackground = updateBackground;

    this.y = 0;
    this.x = 20;

    this.renderEncounter(this.encounterManager.getCurrentEncounter());
  }

  private renderEncounter(card: Card) {
    this.removeChildren();

    // Calculate total width needed for all NPCs
    const npcWidth = 220;
    const spacing = 10;
    const totalWidth =
      card.npcs.length * npcWidth + (card.npcs.length - 1) * spacing;

    let startX = this.blockWidth / 2 - totalWidth / 2;

    if (startX < 0) {
      startX = 0;
    }

    // Create and position each NPC
    card.npcs.forEach((npc, index) => {
      const npcSprite = createImage(npc.imgSrc, {
        x: startX + index * (npcWidth + spacing),
        y: 0,
        width: npcWidth,
        height: this.blockHeight / 2,
      });
      this.addChild(npcSprite);
    });

    // Position card below NPCs
    const cardStack = new CardComponent(
      card,
      this.changeEncounter.bind(this),
      this.blockWidth - 40,
      this.blockHeight / 2,
    );
    cardStack.x = 0;
    cardStack.y = this.blockHeight / 2 - 40; // Height of NPCs + spacing
    this.addChild(cardStack);
  }

  private changeEncounter(selection: Selection) {
    this.encounterManager.changeEncounter(selection);
    const encounter = this.encounterManager.getCurrentEncounter();
    this.renderEncounter(encounter);
    this.updateBackground(encounter.background);
  }
}
