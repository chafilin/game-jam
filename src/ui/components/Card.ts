import { Container, Graphics, Sprite, Text, Texture } from "pixi.js";
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
  private rightButton: Container = new Container();
  private leftButton: Container = new Container();
  private singleButton: Container = new Container();

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
    this.pivot.set(this.cardWidth / 2, this.cardHeight);
    this.x = this.cardWidth / 2;
    this.y = this.cardHeight * 2 - 40; // Height of NPCs + spacing
    this.addBackground();
    this.addNpcName();
    this.addNpcLine();
    this.addButtons();
    this.addSwipe();
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
    this.singleButton = createButton(
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
    this.addChild(this.singleButton);
  }

  private addDoubleButtons(
    selectionLeft: SelectionData,
    selectionRight: SelectionData,
  ) {
    const inventory = InventoryManager.getInstance();

    let requirementsItems = selectionLeft.requirementsItems || [];
    let hasRequirementsItems = inventory.hasItems(requirementsItems);
    const buttonWidth = this.cardWidth / 2 - 20;

    this.leftButton = createButton(
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
    this.addChild(this.leftButton);

    requirementsItems = selectionRight.requirementsItems || [];
    hasRequirementsItems = inventory.hasItems(requirementsItems);

    this.rightButton = createButton(
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
    this.addChild(this.rightButton);
  }

  private addSwipe() {
    this.interactive = true;
    const moveTreshold = this.cardWidth / 6;
    let startX: number;
    let deltaX: number;
    let roation: number;
    const singleButtonBg = this.singleButton.getChildByLabel(
      "buttonBg",
    ) as Sprite;

    const leftButtonBg = this.leftButton.getChildByLabel("buttonBg") as Sprite;

    const rightButtonBg = this.rightButton.getChildByLabel(
      "buttonBg",
    ) as Sprite;

    this.on("pointerdown", (event) => {
      startX = event.x;
    });

    this.on("pointermove", (event) => {
      deltaX = event.x - startX;

      roation = (deltaX / 50) * (Math.PI / 180);

      this.rotation = roation;
      this.x = this.cardWidth / 2 + deltaX;
      if (singleButtonBg && (deltaX < -moveTreshold || deltaX > moveTreshold)) {
        singleButtonBg.texture = Texture.from("woodButtonPressed");
      }

      if (deltaX < -moveTreshold) {
        if (leftButtonBg) {
          leftButtonBg.texture = Texture.from("woodButtonPressed");
        }
        if (rightButtonBg) {
          rightButtonBg.texture = Texture.from("woodButton");
        }
      }
      if (deltaX > moveTreshold) {
        if (rightButtonBg) {
          rightButtonBg.texture = Texture.from("woodButtonPressed");
        }
        if (leftButtonBg) {
          leftButtonBg.texture = Texture.from("woodButton");
        }
      }
    });

    this.on("pointerup", () => {
      if (deltaX < -moveTreshold) {
        if (this.card[Selection.Left] === undefined) {
          this.onSelection(Selection.Right);
          soundManager.play("click");
          console.log("Action: Right button clicked");
        } else {
          this.onSelection(Selection.Left);
          soundManager.play("click");
          console.log("Action: Left button clicked");
        }
      }
      if (deltaX > moveTreshold) {
        this.onSelection(Selection.Right);
        soundManager.play("click");
        console.log("Action: Right button clicked");
      }

      if (deltaX < moveTreshold && deltaX > -moveTreshold) {
        this.x = this.cardWidth / 2;
        this.rotation = 0;
        if (singleButtonBg) {
          singleButtonBg.texture = Texture.from("woodButton");
        }
        if (leftButtonBg) {
          leftButtonBg.texture = Texture.from("woodButton");
        }
        if (rightButtonBg) {
          rightButtonBg.texture = Texture.from("woodButton");
        }
      }
    });
  }
}
