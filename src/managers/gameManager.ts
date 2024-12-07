import { Application, Container, Sprite, Texture } from "pixi.js";
import { createBackground, createHeader, createResources } from "../ui/ui";
import { Level, Stats } from "../types/types";
import { LevelManager } from "./levelManager";
import { createEncounter } from "../ui/encounter";

export class GameManager {
  private app: Application;
  private levelManager: LevelManager;
  private screenWidth: number;
  private screenHeight: number;
  private currentLevel: Level;
  private currentCardId: string;
  private stats: Stats;
  private background: Sprite;
  private header: Container;
  private resources: Container;
  private encounterContainer: Container;

  constructor(
    app: Application,
    levels: Level[],
    screenWidth: number,
    screenHeight: number
  ) {
    this.app = app;
    this.levelManager = new LevelManager(levels);
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.currentLevel = this.levelManager.getCurrentLevel();
    this.currentCardId = "1";
    this.stats = { dexterity: 0, savvy: 0, magic: 0 };
    this.background = createBackground(
      this.currentLevel.background,
      screenWidth,
      screenHeight
    );
    this.header = createHeader(screenWidth);
    this.resources = createResources(screenWidth, this.stats);
    this.encounterContainer = new Container();
    this.app.stage.addChild(this.background);
    this.app.stage.addChild(this.header);
    this.app.stage.addChild(this.resources);
    this.app.stage.addChild(this.encounterContainer);
  }

  start() {
    this.renderLevel(this.currentLevel, this.currentCardId);
  }

  resize(screenWidth: number, screenHeight: number) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.background.width = screenWidth;
    this.background.height = screenHeight;
    this.header.width = screenWidth;
    this.app.stage.removeChild(this.resources);
    this.resources = createResources(screenWidth, this.stats);
    this.app.stage.addChild(this.resources);

    this.renderLevel(this.currentLevel, this.currentCardId);
  }

  private updateStats(newStats: Stats) {
    Object.assign(this.stats, newStats);
    console.log("Action: Stats updated", this.stats);
    this.app.stage.removeChild(this.resources);
    this.resources = createResources(this.screenWidth, this.stats);
    this.app.stage.addChild(this.resources);
  }

  private renderLevel(level: Level, cardId: string) {
    this.encounterContainer.removeChildren();
    const encounter = createEncounter(
      this.screenWidth,
      this.screenHeight,
      level.cards,
      this.onLevelComplete.bind(this),
      cardId,
      (newCardId) => {
        this.currentCardId = newCardId;
      },
      this.stats,
      this.updateStats.bind(this)
    );
    this.encounterContainer.addChild(encounter);
  }

  private onLevelComplete() {
    this.levelManager.nextLevel();
    this.currentLevel = this.levelManager.getCurrentLevel();
    this.currentCardId = "1";
    this.background.texture = Texture.from(this.currentLevel.background);
    this.renderLevel(this.currentLevel, "1");
    console.log(`Action: Level changed to ${this.currentLevel.id}`);
  }
}
