import { Container } from "pixi.js";
import { Card, Selection, Stats } from "./types";
import { createCard, createImage } from "./ui";

// Get the next card based on the current selection
const getNextCard = (
  currentCard: Card,
  selection: Selection,
  CARDS: Record<string, Card>
): Card | null => {
  if (!currentCard[selection]?.nextCard) {
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
  containerHeight: number, // Receive the container height
  CARDS: Record<string, Card>,
  onLevelComplete: () => void,
  initialCardId: string,
  saveCurrentCardId: (cardId: string) => void,
  stats: Stats, // Pass current stats
  updateStats: (newStats: Stats) => void // Function to update stats
): Container => {
  let encounter = CARDS[initialCardId];
  const encounterContainer = new Container();
  encounterContainer.y = containerHeight + 20;

  const renderEncounter = (card: Card) => {
    encounterContainer.removeChildren();
    const npc = createNpc(card.imgSrc, screenWidth);
    npc.y = 40; // Position at the top of encounterContainer
    encounterContainer.addChild(npc);

    const cardStack = createCard(
      card,
      changeEncounter,
      screenWidth,
      onLevelComplete
    );
    cardStack.x = screenWidth / 2 - cardStack.width / 2;
    // Position cardStack below the NPC image with some spacing
    cardStack.y = npc.height + 60;
    encounterContainer.addChild(cardStack);
  };

  const changeEncounter = (selection: Selection) => {
    const nextCard = getNextCard(encounter, selection, CARDS);
    const selectionData = encounter[selection];
    console.log("stats", stats);
    // Check for stat requirements
    if (selectionData?.statRequirements) {
      const requirementsMet = Object.entries(
        selectionData.statRequirements
      ).every(([key, value]) => stats[key as keyof Stats] >= value);
      if (!requirementsMet) {
        console.log(
          "Stat requirements not met",
          selectionData.statRequirements,
          stats
        );
        // Optionally display a message to the player
        return;
      }
    }

    // Apply stat changes
    if (selectionData?.statChanges) {
      const newStats = { ...stats };
      Object.entries(selectionData.statChanges).forEach(([key, value]) => {
        console.log(`Action: ${key} changed by ${value}`);
        newStats[key as keyof Stats] += value;
      });
      updateStats(newStats);
    }

    if (nextCard) {
      encounter = nextCard;
      saveCurrentCardId(nextCard.id);
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
