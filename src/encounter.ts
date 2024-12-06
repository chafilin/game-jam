import { Container } from "pixi.js";
import { Card, Selection } from "./types";
import { createCard, createImage } from "./ui";

// Get the next card based on the current selection
const getNextCard = (
  currentCard: Card,
  selection: Selection,
  CARDS: Record<string, Card>
): Card | null => {
  if (!currentCard[selection].nextCard) {
    return null;
  }
  return CARDS[currentCard[selection].nextCard];
};

// Create NPC container
const createNpc = (name: string, screenWidth: number): Container => {
  const npcImg = createImage(name, {
    x: screenWidth / 2 - 110,
    y: 0,
    width: 220,
    height: 248,
  });
  return npcImg;
};
// Create encounter container
export const createEncounter = (
  screenWidth: number,
  screenHeight: number,
  CARDS: Record<string, Card>,
  onLevelComplete: () => void
): Container => {
  let encounter = CARDS["1"];
  const encounterContainer = new Container();
  encounterContainer.y = screenHeight / 3;
  encounterContainer.height = screenHeight;

  const renderEncounter = (card: Card) => {
    encounterContainer.removeChildren();
    const npc = createNpc(card.imgSrc, screenWidth);
    encounterContainer.addChild(npc);

    const cardStack = createCard(
      card,
      changeEncounter,
      screenWidth,
      onLevelComplete
    );
    cardStack.x = screenWidth / 2 - cardStack.width / 2;
    cardStack.y = encounterContainer.height;
    encounterContainer.addChild(cardStack);
  };

  const changeEncounter = (selection: Selection) => {
    const nextCard = getNextCard(encounter, selection, CARDS);
    if (nextCard) {
      encounter = nextCard;
      console.log(`Action: Encounter changed to card ${encounter.npcName}`);
      renderEncounter(encounter);
    } else if (encounter.isLastCard) {
      onLevelComplete();
      console.log("Action: Level completed");
    } else {
      onLevelComplete();
      console.log("Action: Level completed");
    }
  };

  renderEncounter(encounter);
  return encounterContainer;
};
