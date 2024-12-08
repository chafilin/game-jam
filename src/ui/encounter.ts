import { Container } from "pixi.js";
import { Card, Selection } from "../types/types";
import { EncounterManager } from "../managers/encounterManager";
import { createImage } from "./components/Image";
import { createCard } from "./components/Card";

export const createEncounter = (
  screenWidth: number,
  screenHeight: number,
  encounterManager: EncounterManager
): Container => {
  const encounterContainer = new Container();
  encounterContainer.y = screenHeight / 4;

  const renderEncounter = (card: Card) => {
    encounterContainer.removeChildren();

    // Calculate total width needed for all NPCs
    const npcWidth = 250;
    const spacing = 10;
    const totalWidth =
      card.npcs.length * npcWidth + (card.npcs.length - 1) * spacing;
    const startX = screenWidth / 2 - totalWidth / 2;

    // Create and position each NPC
    card.npcs.forEach((npc, index) => {
      const npcSprite = createImage(npc.imgSrc, {
        x: startX + index * (npcWidth + spacing),
        y: 0,
        width: npcWidth,
        height: 250,
      });
      encounterContainer.addChild(npcSprite);
    });

    // Position card below NPCs
    const cardStack = createCard(card, changeEncounter, screenWidth);
    cardStack.x = screenWidth / 2 - cardStack.width / 2;
    cardStack.y = 248 + 20; // Height of NPCs + spacing
    encounterContainer.addChild(cardStack);
  };

  const changeEncounter = (selection: Selection) => {
    const nextEncounter = encounterManager.changeEncounter(selection);
    if (nextEncounter) {
      renderEncounter(nextEncounter);
    }
  };

  renderEncounter(encounterManager.getCurrentEncounter());

  return encounterContainer;
};
