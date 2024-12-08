import { Assets } from "pixi.js";

// Load assets required for the game
export const loadAssets = async (onProgress?: (progress: number) => void) => {
  const assetList = [
    // Images
    { alias: "bgtest", src: "assets/bgtest.png" },
    { alias: "roomBg", src: "assets/roomBg.png" },
    { alias: "settings_button", src: "assets/settings_icon.png" },
    { alias: "stat_icon", src: "assets/stat_icon.png" },
    { alias: "res_icon", src: "assets/res1.png" },
    { alias: "npc_img", src: "assets/npc1.png" },
    { alias: "frog", src: "assets/frog.png" },
    { alias: "froggy", src: "assets/froggy.png" },
    { alias: "knight", src: "assets/knight.png" },
    { alias: "cookie", src: "assets/cookie.png" },
    { alias: "ban", src: "assets/ban.png" },
    { alias: "dragonfly", src: "assets/dragonfly.png" },
    { alias: "tavern", src: "assets/tavern.png" },
    { alias: "insidehouse", src: "assets/insidehouse.png" },
    { alias: "townandriver", src: "assets/townandriver.png" },
    { alias: "townsquare", src: "assets/townsquare.png" },
    { alias: "alley", src: "assets/alley.png" },
    { alias: "desman", src: "assets/desman.png" },
    { alias: "heron", src: "assets/heron.png" },

    { alias: "coin", src: "assets/coin.png" },
    { alias: "solar_stone", src: "assets/solar_stone.png" },

    // Sounds
    { alias: "click", src: "sounds/click.mp3" },
    { alias: "Adventure", src: "sounds/Adventure.mp3" },
    { alias: "Neverland", src: "sounds/Neverland.mp3" },
    { alias: "The-Lone-Wolf", src: "sounds/The-Lone-Wolf.mp3" },
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
