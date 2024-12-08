import { Container, Graphics, Sprite, Text } from "pixi.js";
import { InventoryManager } from "../../managers/inventoryManager";

export const createInventory = (
  screenWidth: number,
  screenHeight: number,
  onClose: () => void
): Container => {
  const inventory = InventoryManager.getInstance();
  const items = inventory.getItems();
  const inventoryContainer = new Container();

  // Semi-transparent background
  const overlay = new Graphics();
  overlay.rect(0, 0, screenWidth, screenHeight);
  overlay.fill({ color: "#000000", alpha: 0.5 });
  inventoryContainer.addChild(overlay);

  // Inventory panel
  const panel = new Graphics();
  panel.roundRect(screenWidth / 2 - 200, screenHeight / 2 - 250, 400, 500, 10);
  panel.fill({ color: "#ffffff" });
  inventoryContainer.addChild(panel);

  // Title
  const title = new Text({
    text: "Inventory",
    style: {
      fontSize: 24,
      fill: "#000000",
      align: "center",
    },
  });
  title.x = screenWidth / 2 - title.width / 2;
  title.y = screenHeight / 2 - 230;
  inventoryContainer.addChild(title);

  // Items grid
  const itemsContainer = new Container();
  items.forEach((item, index) => {
    const itemContainer = new Container();

    // Item background
    const itemBg = new Graphics();
    itemBg.roundRect(0, 0, 80, 80, 5);
    itemBg.fill({ color: "#f0f0f0" });
    itemContainer.addChild(itemBg);

    // Item sprite
    const sprite = Sprite.from(item.imgSrc);
    sprite.width = 60;
    sprite.height = 60;
    sprite.x = 10;
    sprite.y = 10;
    itemContainer.addChild(sprite);

    // Position in grid
    itemContainer.x = (index % 4) * 90;
    itemContainer.y = Math.floor(index / 4) * 90;

    itemsContainer.addChild(itemContainer);
  });

  itemsContainer.x = screenWidth / 2 - 180;
  itemsContainer.y = screenHeight / 2 - 180;
  inventoryContainer.addChild(itemsContainer);

  // Close button
  const closeButton = new Text({
    text: "×",
    style: { fontSize: 32, fill: "#000000" },
  });
  closeButton.x = screenWidth / 2 + 170;
  closeButton.y = screenHeight / 2 - 240;
  closeButton.eventMode = "static";
  closeButton.cursor = "pointer";
  closeButton.on("pointerdown", onClose);
  inventoryContainer.addChild(closeButton);

  return inventoryContainer;
};
