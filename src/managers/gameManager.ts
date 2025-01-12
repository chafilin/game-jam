import { Application, Container, Sprite, Texture } from "pixi.js";
import { createBackground } from "../ui/components/Image";
import { Level, Stats } from "../types/types";
import { LevelManager } from "./levelManager";
import { Encounter } from "../ui/encounter";
import { createMenu } from "../ui/menu";
import { Header } from "../ui/components/Header";

import { EncounterManager } from "./encounterManager";
import { SaveManager } from "./saveManager";
import { createInventory } from "../ui/components/Inventory";
import { InventoryManager } from "./inventoryManager";
import { BackgroundMusicManager } from "./backgroundMusicManager";

export class GameManager {
  private app: Application;
  private levelManager: LevelManager;
  private screenWidth: number;
  private screenHeight: number;
  private stats: Stats;
  private background: Sprite;
  private header: Header;

  private encounterContainer: Container;
  private menu: Container;
  private encounterManager?: EncounterManager;
  private saveManager: SaveManager;
  private inventoryContainer?: Container;

  constructor(
    app: Application,
    levels: Level[],
    screenWidth: number,
    screenHeight: number,
  ) {
    this.app = app;
    this.levelManager = new LevelManager(levels, this.saveProgress);
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
      screenHeight,
    );
    this.header = new Header(
      screenWidth,
      () => {
        this.menu.visible = true;
      },
      () => {
        this.openInventory();
      },
    );

    this.encounterContainer = new Container({
      y: this.header.height + 20,
    });
    this.encounterContainer.width = screenWidth;

    this.app.stage.addChild(this.background);
    this.app.stage.addChild(this.header);

    this.app.stage.addChild(this.encounterContainer);

    this.menu = createMenu(screenWidth, screenHeight, () => {
      this.resetProgress();
      this.menu.visible = false;
    });
    this.menu.visible = false;
    this.app.stage.addChild(this.menu);
    BackgroundMusicManager.getInstance().addTrack("Adventure");
    BackgroundMusicManager.getInstance().addTrack("Neverland");
    BackgroundMusicManager.getInstance().addTrack("The-Lone-Wolf");
    InventoryManager.getInstance().setChangeCallback(
      this.header.animateInventoryChange,
    );
  }

  start() {
    this.renderLevel();
    BackgroundMusicManager.getInstance().play();
  }

  resize(screenWidth: number, screenHeight: number) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.background.width = screenWidth;
    this.background.height = screenHeight;

    this.header.resize(screenWidth);

    this.app.stage.removeChild(this.menu);
    this.menu = createMenu(screenWidth, screenHeight, () => {
      this.resetProgress();
      this.menu.visible = false;
    });
    this.menu.visible = false;
    this.app.stage.addChild(this.menu);

    this.renderLevel();
  }

  private saveProgress = () => {
    const progress = {
      levelId: this.levelManager.getCurrentLevel().id,
      cardId: this.levelManager.getCurrentCardId(),
      stats: this.stats || {
        dexterity: 0,
        savvy: 0,
        magic: 0,
        karma: 0,
      },
      inventory: InventoryManager.getInstance().getItems(),
    };
    // this.saveManager.saveProgress(progress);
    console.log("Action: Progress saved", progress);
  };

  private updateStats = (newStats: Stats) => {
    const changedStatsObject: Partial<Stats> = {};
    for (const key in newStats) {
      const statKey = key as keyof Stats;
      if (newStats[statKey] === this.stats[statKey]) {
        continue;
      }
      changedStatsObject[statKey] = newStats[statKey] - this.stats[statKey];
    }

    this.header.animateStatsChange(changedStatsObject);
    Object.assign(this.stats, newStats);
    console.log("Action: Stats updated", this.stats);
  };

  private renderLevel() {
    this.encounterContainer.removeChildren();
    const cards = this.levelManager.getCurrentCards();
    const cardId = this.levelManager.getCurrentCardId();

    this.encounterManager = new EncounterManager(
      cards[cardId],
      this.stats,
      this.updateStats,
      this.levelManager,
    );

    const encounter = new Encounter(
      this.screenWidth,
      this.screenHeight - this.header.height,
      this.encounterManager,
      this.updateBackground,
    );

    this.encounterContainer.addChild(encounter);

    // Update background
    this.updateBackground(this.levelManager.getCurrentBackground());
  }

  private updateBackground = (background: string) => {
    this.background.texture = Texture.from(background);
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
      this.stats,
      () => this.closeInventory(),
    );
    this.app.stage.addChild(this.inventoryContainer);
  };

  private closeInventory = () => {
    if (this.inventoryContainer) {
      this.app.stage.removeChild(this.inventoryContainer);
    }
  };
}
