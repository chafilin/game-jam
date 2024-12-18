import { Assets } from "pixi.js";

// Load assets required for the game
export const loadAssets = async (onProgress?: (progress: number) => void) => {
  const assetList = [
    // Images
    { alias: "bgtest", src: "assets/images/bgtest.png" },
    { alias: "roomBg", src: "assets/images/roomBg.png" },
    { alias: "settings_button", src: "assets/images/settings_icon.png" },
    { alias: "stat_icon", src: "assets/images/stat_icon.png" },
    { alias: "res_icon", src: "assets/images/res1.png" },
    { alias: "npc_img", src: "assets/images/npc1.png" },
    { alias: "frog", src: "assets/images/frog.png" },
    { alias: "froggy", src: "assets/images/froggy.png" },
    { alias: "knight", src: "assets/images/knight.png" },
    { alias: "cookie", src: "assets/images/cookie.png" },
    { alias: "ban", src: "assets/images/ban.png" },
    { alias: "dragonfly", src: "assets/images/dragonfly.png" },
    { alias: "tavern", src: "assets/images/tavern.png" },
    { alias: "insidehouse", src: "assets/images/insidehouse.png" },
    { alias: "townandriver", src: "assets/images/townandriver.png" },
    { alias: "townsquare", src: "assets/images/townsquare.png" },
    { alias: "alley", src: "assets/images/alley.png" },
    { alias: "desman", src: "assets/images/desman.png" },
    { alias: "heron", src: "assets/images/heron.png" },

    { alias: "coin", src: "assets/images/coin.png" },
    { alias: "solar_stone", src: "assets/images/solar_stone.png" },
    { alias: "player", src: "assets/images/player.png" },
    { alias: "settings", src: "assets/images/settings.png" },

    // Sounds
    { alias: "click", src: "assets/sounds/click.mp3" },
    { alias: "Adventure", src: "assets/sounds/Adventure.mp3" },
    { alias: "Neverland", src: "assets/sounds/Neverland.mp3" },
    { alias: "The-Lone-Wolf", src: "assets/sounds/The-Lone-Wolf.mp3" },
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
