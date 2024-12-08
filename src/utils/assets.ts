import { Assets } from "pixi.js";

// Load assets required for the game
export const loadAssets = async (onProgress?: (progress: number) => void) => {
  const assetList = [
    { alias: "background", src: "assets/roomBg.png" },
    { alias: "settings_button", src: "assets/settings_icon.png" },
    { alias: "stat_icon", src: "assets/stat_icon.png" },
    { alias: "res_icon", src: "assets/res1.png" },
    { alias: "npc_img", src: "assets/npc1.png" },
    { alias: "frog", src: "assets/frog.png" },
    { alias: "sturgeon", src: "assets/sturgeon.png" },
    { alias: "cookie", src: "assets/cookie.png" },
    { alias: "click", src: "sounds/click.mp3" },
  ];

  for (const asset of assetList) {
    Assets.add(asset);
  }

  // Load all assets with progress tracking
  await Assets.load(
    assetList.map((asset) => asset.alias),
    (progress) => {
      onProgress?.(progress * 100); // Convert to percentage
    }
  );
};
