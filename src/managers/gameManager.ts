import { Application, Container, Sprite, Texture } from "pixi.js";
import { createBackground } from "../ui/components/Image";
import { Level, Stats } from "../types/types";
import { LevelManager } from "./levelManager";
import { createEncounter } from "../ui/encounter";
import { createMenu } from "../ui/menu";
import { createHeader } from "../ui/components/Header";
import { createResources } from "../ui/components/Resources";
import { EncounterManager } from "./encounterManager";
import { SaveManager } from "./saveManager";
import { createInventory } from "../ui/components/Inventory";
import { InventoryManager } from "./inventoryManager";

export class GameManager {
  private app: Application;
  private levelManager: LevelManager;
  private screenWidth: number;
  private screenHeight: number;
  private stats: Stats;
  private background: Sprite;
  private header: Container;
  private resources: Container;
  private encounterContainer: Container;
  private menu: Container;
  private encounterManager?: EncounterManager;
  private saveManager: SaveManager;
  private inventoryContainer?: Container;

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
    this.saveManager = new SaveManager();

    // Load saved progress
    const savedProgress = this.saveManager.loadProgress();
    if (savedProgress) {
      this.levelManager.setCurrentLevel(savedProgress.levelId);
      this.levelManager.setCurrentCardId(savedProgress.cardId);
      this.stats = savedProgress.stats;
      InventoryManager.getInstance().setItems(savedProgress.inventory);
    } else {
      this.levelManager.setCurrentLevel(this.levelManager.getFirstLevelId());
      this.levelManager.setCurrentCardId("1");
      this.stats = { dexterity: 0, savvy: 0, magic: 0, karma: 0 };
    }

    this.background = createBackground(
      this.levelManager.getCurrentBackground(),
      screenWidth,
      screenHeight
    );
    this.header = createHeader(
      screenWidth,
      () => {
        this.menu.visible = true;
      },
      () => {
        this.openInventory();
      }
    );
    this.resources = createResources(screenWidth, this.stats);
    this.encounterContainer = new Container();
    this.app.stage.addChild(this.background);
    this.app.stage.addChild(this.header);
    this.app.stage.addChild(this.resources);
    this.app.stage.addChild(this.encounterContainer);

    this.menu = createMenu(screenWidth, screenHeight, () => {
      this.resetProgress();
      this.menu.visible = false;
    });
    this.menu.visible = false;
    this.app.stage.addChild(this.menu);
  }

  start() {
    this.renderLevel();
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

    this.app.stage.removeChild(this.menu);
    this.menu = createMenu(screenWidth, screenHeight, () => {
      this.resetProgress();
      this.menu.visible = false;
    });
    this.menu.visible = false;
    this.app.stage.addChild(this.menu);

    this.renderLevel();
  }

  private saveProgress() {
    const progress = {
      levelId: this.levelManager.getCurrentLevel().id,
      cardId: this.levelManager.getCurrentCardId(),
      stats: this.stats,
      inventory: InventoryManager.getInstance().getItems(),
    };
    this.saveManager.saveProgress(progress);
    console.log("Action: Progress saved", progress);
  }

  private updateStats = (newStats: Stats) => {
    Object.assign(this.stats, newStats);
    console.log("Action: Stats updated", this.stats);
    this.app.stage.removeChild(this.resources);
    this.resources = createResources(this.screenWidth, this.stats);
    this.app.stage.addChild(this.resources);
  };

  private renderLevel() {
    this.encounterContainer.removeChildren();
    const cards = this.levelManager.getCurrentCards();
    const cardId = this.levelManager.getCurrentCardId();

    this.encounterManager = new EncounterManager(
      cards,
      cardId,
      this.stats,
      this.updateStats,
      this.onLevelComplete,
      this.levelManager
    );

    const encounter = createEncounter(
      this.screenWidth,
      this.screenHeight,
      this.encounterManager
    );

    this.encounterContainer.addChild(encounter);

    // Update background
    this.background.texture = Texture.from(
      this.levelManager.getCurrentBackground()
    );
  }

  private onLevelComplete = (destination?: {
    levelId?: string;
    partId?: string;
  }) => {
    if (destination) {
      if (destination.levelId) {
        this.levelManager.setCurrentLevel(destination.levelId);
        this.saveProgress();
      }
      if (destination.partId) {
        this.levelManager.setCurrentPart(destination.partId);
      }
    } else {
      this.levelManager.nextPart();
    }

    this.levelManager.setCurrentCardId("1");
    this.renderLevel();
  };

  public resetProgress() {
    this.saveManager.resetProgress();
    this.levelManager.setCurrentLevel(this.levelManager.getFirstLevelId());
    this.levelManager.setCurrentCardId("1");
    InventoryManager.getInstance().clearItems();
    this.stats = { dexterity: 0, savvy: 0, magic: 0, karma: 0 };
    this.updateStats(this.stats);
    this.renderLevel();
    console.log("Action: Progress reset");
  }

  private openInventory = () => {
    this.inventoryContainer = createInventory(
      this.screenWidth,
      this.screenHeight,
      () => this.closeInventory()
    );
    this.app.stage.addChild(this.inventoryContainer);
  };

  private closeInventory = () => {
    if (this.inventoryContainer) {
      this.app.stage.removeChild(this.inventoryContainer);
    }
  };
}
