import { Container, Graphics, Text } from "pixi.js";
import { DropShadowFilter } from "pixi-filters";
import { Card, Selection } from "../../types/types";
import { createButton } from "./Button";

export const createCard = (
  card: Card,
  onSelection: (selection: Selection) => void,
  screenWidth: number
): Container => {
  const shadowFilter = new DropShadowFilter({
    color: 0x000000,
    alpha: 0.5,
    blur: 4,
    quality: 3,
  });

  const cardContainer = new Container();
  const cardBg = new Graphics();
  cardBg.roundRect(0, 0, screenWidth - 80, 300, 10);
  cardBg.fill({ color: "#ffffff" });

  cardBg.filters = [shadowFilter];
  cardContainer.addChild(cardBg);

  const npcName = new Text({
    text: card.npcName,
    style: {
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
      fontSize: 20,
      fill: "#000000",
      wordWrap: true,
      wordWrapWidth: cardContainer.width - 20,
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
        console.log("Action: Right button clicked");
      }
    );
    cardContainer.addChild(singleButton);
  } else {
    const leftButton = createButton(
      card[Selection.Left].text,
      10,
      cardContainer.height - 80,
      140,
      50,
      "#176542",
      () => {
        onSelection(Selection.Left);
        console.log("Action: Left button clicked");
      }
    );
    cardContainer.addChild(leftButton);

    const rightButton = createButton(
      card[Selection.Right].text,
      screenWidth - 230,
      cardContainer.height - 80,
      140,
      50,
      "#176542",
      () => {
        onSelection(Selection.Right);
        console.log("Action: Right button clicked");
      }
    );
    cardContainer.addChild(rightButton);
  }

  return cardContainer;
};
