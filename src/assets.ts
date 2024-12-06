import { Assets } from "pixi.js";

// Load assets required for the game
export const loadAssets = async () => {
  Assets.add({ alias: "background", src: "assets/bgtest.png" });
  Assets.add({ alias: "settings_button", src: "assets/settings_icon.png" });
  Assets.add({ alias: "stat_icon", src: "assets/stat_icon.png" });
  Assets.add({ alias: "res_icon", src: "assets/res1.png" });
  Assets.add({ alias: "npc_img", src: "assets/npc1.png" });
  Assets.add({ alias: "frog", src: "assets/frog.png" });
  Assets.add({ alias: "sturgeon", src: "assets/sturgeon.png" });
  Assets.add({ alias: "cookie", src: "assets/cookie.png" });

  // Add stat icons
  // Assets.add({ alias: "dexterity_icon", src: "assets/dexterity_icon.png" });
  // Assets.add({ alias: "savvy_icon", src: "assets/savvy_icon.png" });
  // Assets.add({ alias: "magic_icon", src: "assets/magic_icon.png" });

  await Assets.load("background");
  await Assets.load("settings_button");
  await Assets.load("stat_icon");
  await Assets.load("res_icon");
  await Assets.load("npc_img");
  await Assets.load("frog");
  await Assets.load("sturgeon");
  await Assets.load("cookie");

  // await Assets.load("dexterity_icon");
  // await Assets.load("savvy_icon");
  // await Assets.load("magic_icon");
};
