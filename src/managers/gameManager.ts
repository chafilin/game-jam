import { Application, Container, Sprite, Texture } from "pixi.js";
import { createBackground } from "../ui/components/Image";
import { Level, Stats } from "../types/types";
import { LevelManager } from "./levelManager";
import { createEncounter } from "../ui/encounter";
import { createMenu } from "../ui/menu";
import { createHeader } from "../ui/components/Header";
import { createResources } from "../ui/components/Resources";
import { EncounterManager } from "./encounterManager";

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
  private readonly PROGRESS_KEY = "gameProgress";
  private menu: Container;
  private encounterManager?: EncounterManager;

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

    // Load saved progress
    const savedProgress = this.loadProgress();
    if (savedProgress) {
      this.levelManager.setCurrentLevel(savedProgress.levelId);
      this.currentLevel = this.levelManager.getCurrentLevel();
    } else {
      this.currentLevel = this.levelManager.getCurrentLevel();
    }

    this.currentCardId = savedProgress?.cardId || "1";
    this.stats = savedProgress?.stats || { dexterity: 0, savvy: 0, magic: 0 };

    this.background = createBackground(
      this.levelManager.getCurrentBackground(),
      screenWidth,
      screenHeight
    );
    this.header = createHeader(screenWidth, () => {
      this.menu.visible = true;
    });
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
    this.renderLevel(this.currentCardId);
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

    this.renderLevel(this.currentCardId);
  }

  private saveProgress() {
    const progress = {
      levelId: this.currentLevel.id,
      cardId: "1",
      stats: this.stats,
    };
    localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
    console.log("Action: Progress saved", progress);
  }

  private loadProgress() {
    const saved = localStorage.getItem(this.PROGRESS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  }

  private updateStats = (newStats: Stats) => {
    Object.assign(this.stats, newStats);
    console.log("Action: Stats updated", this.stats);
    this.app.stage.removeChild(this.resources);
    this.resources = createResources(this.screenWidth, this.stats);
    this.app.stage.addChild(this.resources);
  };

  private renderLevel(cardId: string) {
    this.encounterContainer.removeChildren();
    const cards = this.levelManager.getCurrentCards();

    this.encounterManager = new EncounterManager(
      cards,
      cardId,
      this.stats,
      this.updateStats,
      this.onLevelComplete
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
      }
      if (destination.partId) {
        this.levelManager.setCurrentPart(destination.partId);
      }
    } else {
      this.levelManager.nextPart();
    }

    this.currentLevel = this.levelManager.getCurrentLevel();
    this.currentCardId = "1";
    this.renderLevel(this.currentCardId);
    this.saveProgress();
  };

  public resetProgress() {
    localStorage.removeItem(this.PROGRESS_KEY);
    this.levelManager.setCurrentLevel(this.levelManager.getFirstLevelId());
    this.currentLevel = this.levelManager.getCurrentLevel();
    this.currentCardId = "1";
    this.stats = { dexterity: 0, savvy: 0, magic: 0 };
    this.updateStats(this.stats);
    this.renderLevel(this.currentCardId);
    console.log("Action: Progress reset");
  }
}
