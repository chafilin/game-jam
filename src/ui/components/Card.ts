import { Container, Graphics, Text } from "pixi.js";
import { DropShadowFilter } from "pixi-filters";
import { Card, Selection } from "../../types/types";
import { createButton } from "./Button";
import { InventoryManager } from "../../managers/inventoryManager";
import { soundManager } from "../../managers/soundManager";

export const createCard = (
  card: Card,
  onSelection: (selection: Selection) => void,
  width: number,
  height: number
): Container => {
  const shadowFilter = new DropShadowFilter({
    color: 0x000000,
    alpha: 0.5,
    blur: 4,
    quality: 3,
  });

  const cardContainer = new Container();
  const cardBg = new Graphics();
  cardBg.roundRect(0, 0, width, height, 10);
  cardBg.fill({ color: "#ffffff" });

  cardBg.filters = [shadowFilter];
  cardContainer.addChild(cardBg);

  const npcName = new Text({
    text: card.npcName,
    style: {
      fontFamily: "Neucha",
      fontSize: 18,
      fill: "#000000",
    },
  });

  npcName.x = 20;
  npcName.y = 20;
  cardContainer.addChild(npcName);

  const npcLine = new Text({
    text: card.npcLine,
    style: {
      fontFamily: "Neucha",
      fontSize: 20,
      fill: "#000000",
      wordWrap: true,
      wordWrapWidth: cardContainer.width - 25,
    },
  });
  npcLine.x = 20;
  npcLine.y = 48;
  cardContainer.addChild(npcLine);

  if (card[Selection.Left] === undefined) {
    const singleButton = createButton(
      card[Selection.Right].text,
      35,
      cardContainer.height - 80,
      cardContainer.width - 70,
      50,
      "#176542",
      () => {
        onSelection(Selection.Right);
        soundManager.play("click");
        console.log("Action: Right button clicked");
      }
    );
    cardContainer.addChild(singleButton);
  } else {
    const inventory = InventoryManager.getInstance();

    let requirementsItems = card[Selection.Left].requirementsItems || [];
    let hasRequirementsItems = inventory.hasItems(requirementsItems);
    let buttonColor = hasRequirementsItems ? "#176542" : "#808080";
    const buttonWidth = cardContainer.width / 2 - 20;

    const leftButton = createButton(
      card[Selection.Left].text,
      10,
      cardContainer.height - 80,
      buttonWidth,
      50,
      buttonColor,
      hasRequirementsItems
        ? () => {
            onSelection(Selection.Left);
            soundManager.play("click");
            console.log("Action: Left button clicked");
          }
        : () => {}
    );
    cardContainer.addChild(leftButton);

    requirementsItems = card[Selection.Right].requirementsItems || [];
    hasRequirementsItems = inventory.hasItems(requirementsItems);
    buttonColor = hasRequirementsItems ? "#176542" : "#808080";

    const rightButton = createButton(
      card[Selection.Right].text,
      cardContainer.width / 2 + 10,
      cardContainer.height - 80,
      buttonWidth,
      50,
      buttonColor,
      hasRequirementsItems
        ? () => {
            onSelection(Selection.Right);
            soundManager.play("click");
            console.log("Action: Right button clicked");
          }
        : () => {}
    );
    cardContainer.addChild(rightButton);
  }

  return cardContainer;
};
