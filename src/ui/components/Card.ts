import { Container, Graphics, Text } from "pixi.js";
import { DropShadowFilter } from "pixi-filters";
import { Card, Selection, SelectionData } from "../../types/types";
import { createButton } from "./Button";
import { InventoryManager } from "../../managers/inventoryManager";
import { soundManager } from "../../managers/soundManager";

export class CardComponent extends Container {
  label = "CardComponent";
  private card: Card;
  private onSelection: (selection: Selection) => void;
  private cardWidth: number;
  private cardHeight: number;

  constructor(
    card: Card,
    onSelection: (selection: Selection) => void,
    width: number,
    height: number,
  ) {
    super();
    this.cardWidth = width;
    this.cardHeight = height;
    this.card = card;
    this.onSelection = onSelection;
    this.initialize();
  }

  private initialize() {
    this.addBackground();
    this.addNpcName();
    this.addNpcLine();
    this.addButtons();
  }

  private addBackground() {
    const shadowFilter = new DropShadowFilter({
      color: 0x000000,
      alpha: 0.5,
      blur: 4,
      quality: 3,
    });

    const cardBg = new Graphics();
    cardBg.roundRect(0, 0, this.cardWidth, this.cardHeight, 10);
    cardBg.fill({ color: "#F6E9C9" });
    cardBg.filters = [shadowFilter];
    this.addChild(cardBg);
  }

  private addNpcName() {
    const npcName = new Text({
      text: this.card.npcName,
      style: {
        fontFamily: "Neucha",
        fontSize: 18,
        fill: "#000000",
      },
    });

    npcName.x = 20;
    npcName.y = 20;
    this.addChild(npcName);
  }

  private addNpcLine() {
    const npcLine = new Text({
      text: this.card.npcLine,
      style: {
        fontFamily: "Neucha",
        fontSize: 22,
        fill: "#000000",
        wordWrap: true,
        wordWrapWidth: this.cardWidth - 25,
      },
    });

    npcLine.x = 20;
    npcLine.y = 48;
    this.addChild(npcLine);
  }

  private addButtons() {
    if (this.card[Selection.Left] === undefined) {
      this.addSingleButton();
    } else {
      this.addDoubleButtons(
        this.card[Selection.Left],
        this.card[Selection.Right],
      );
    }
  }

  private addSingleButton() {
    const singleButton = createButton(
      this.card[Selection.Right].text,
      35,
      this.cardHeight - 80,
      this.cardWidth - 70,
      71,
      () => {
        this.onSelection(Selection.Right);
        soundManager.play("click");
        console.log("Action: Right button clicked");
      },
    );
    this.addChild(singleButton);
  }

  private addDoubleButtons(
    selectionLeft: SelectionData,
    selectionRight: SelectionData,
  ) {
    const inventory = InventoryManager.getInstance();

    let requirementsItems = selectionLeft.requirementsItems || [];
    let hasRequirementsItems = inventory.hasItems(requirementsItems);
    const buttonWidth = this.cardWidth / 2 - 20;

    const leftButton = createButton(
      selectionLeft.text,
      10,
      this.cardHeight - 80,
      buttonWidth,
      71,
      hasRequirementsItems
        ? () => {
            this.onSelection(Selection.Left);
            soundManager.play("click");
            console.log("Action: Left button clicked");
          }
        : () => {},
    );
    this.addChild(leftButton);

    requirementsItems = selectionRight.requirementsItems || [];
    hasRequirementsItems = inventory.hasItems(requirementsItems);

    const rightButton = createButton(
      selectionRight.text,
      this.cardWidth / 2 + 10,
      this.cardHeight - 80,
      buttonWidth,
      71,
      hasRequirementsItems
        ? () => {
            this.onSelection(Selection.Right);
            soundManager.play("click");
            console.log("Action: Right button clicked");
          }
        : () => {},
    );
    this.addChild(rightButton);
  }
}
