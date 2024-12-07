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
    const npc = createImage(card.imgSrc, {
      x: screenWidth / 2 - 110,
      y: 0,
      width: 220,
      height: 248,
    });
    npc.y = 0;
    encounterContainer.addChild(npc);

    const cardStack = createCard(card, changeEncounter, screenWidth);
    cardStack.x = screenWidth / 2 - cardStack.width / 2;
    cardStack.y = npc.height + 20;
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
