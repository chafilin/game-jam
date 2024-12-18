import { Container } from "pixi.js";
import { Card, Selection } from "../types/types";
import { EncounterManager } from "../managers/encounterManager";
import { createImage } from "./components/Image";
import { createCard } from "./components/Card";

export const createEncounter = (
  width: number,
  height: number,
  encounterManager: EncounterManager,
  updateBackground: (background: string) => void
): Container => {
  const encounterContainer = new Container({
    width: width,
    height: height,
  });

  encounterContainer.y = 0;
  encounterContainer.x = 20;

  const renderEncounter = (card: Card) => {
    encounterContainer.removeChildren();

    // Calculate total width needed for all NPCs
    const npcWidth = 220;
    const spacing = 10;
    const totalWidth =
      card.npcs.length * npcWidth + (card.npcs.length - 1) * spacing;

    let startX = width / 2 - totalWidth / 2;

    if (startX < 0) {
      startX = 0;
    }

    // Create and position each NPC
    card.npcs.forEach((npc, index) => {
      const npcSprite = createImage(npc.imgSrc, {
        x: startX + index * (npcWidth + spacing),
        y: 0,
        width: npcWidth,
        height: height / 2,
      });
      encounterContainer.addChild(npcSprite);
    });

    // Position card below NPCs
    const cardStack = createCard(card, changeEncounter, width - 40, height / 2);
    cardStack.x = 0;
    cardStack.y = height / 2 - 40; // Height of NPCs + spacing
    encounterContainer.addChild(cardStack);
  };

  const changeEncounter = (selection: Selection) => {
    encounterManager.changeEncounter(selection);
    const encounter = encounterManager.getCurrentEncounter();
    renderEncounter(encounter);
    updateBackground(encounter.background);
  };

  renderEncounter(encounterManager.getCurrentEncounter());

  return encounterContainer;
};
