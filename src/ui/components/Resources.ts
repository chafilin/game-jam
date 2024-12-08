import { Container, Graphics, Sprite, Text, Texture } from "pixi.js";
import { Stats } from "../../types/types";

const createResourceContainer = (
  value: number,
  maxValue: number,
  screenWidth: number
): Container => {
  const resourceContainer = new Container();
  const icon = Texture.from("res_icon");
  const iconSprite = new Sprite(icon);
  iconSprite.width = 40;
  iconSprite.height = 40;
  iconSprite.x = 0;
  iconSprite.y = 0;
  resourceContainer.addChild(iconSprite);

  const background = new Graphics();
  background.roundRect(44, 2, screenWidth / 3, 34, 10);
  background.fill({ color: "#000000" });

  resourceContainer.addChild(background);

  const valueBar = new Graphics();
  valueBar.roundRect(44, 2, (screenWidth / 3 / maxValue) * value, 34, 10);
  valueBar.fill({ color: "#404040" });
  resourceContainer.addChild(valueBar);

  const valueText = new Text({
    text: `${value}/${maxValue}`,
    style: {
      fontSize: 20,
      fill: "#ffffff",
      align: "center",
    },
  });

  valueText.x = resourceContainer.width / 2 - valueText.width / 6;
  valueText.y = resourceContainer.height / 2 - valueText.height / 2;
  resourceContainer.addChild(valueText);

  return resourceContainer;
};

export const createResources = (
  screenWidth: number,
  stats: Stats
): Container => {
  const resourcesContainer = new Container();
  resourcesContainer.width = screenWidth;

  const resourceContainer1 = createResourceContainer(
    stats.dexterity * 10,
    120,
    screenWidth
  );
  resourceContainer1.x = 12;
  resourceContainer1.y = 100;
  resourcesContainer.addChild(resourceContainer1);

  const resourceContainer2 = createResourceContainer(
    stats.magic * 10,
    120,
    screenWidth
  );
  resourceContainer2.x = screenWidth - resourceContainer2.width - 16;
  resourceContainer2.y = 100;
  resourcesContainer.addChild(resourceContainer2);

  const resourceContainer3 = createResourceContainer(
    stats.savvy * 10,
    120,
    screenWidth
  );
  resourceContainer3.x = 12;
  resourceContainer3.y = 146;
  resourcesContainer.addChild(resourceContainer3);

  const resourceContainer4 = createResourceContainer(
    stats.karma * 10,
    120,
    screenWidth
  );
  resourceContainer4.x = screenWidth - resourceContainer4.width - 16;
  resourceContainer4.y = 146;
  resourcesContainer.addChild(resourceContainer4);

  return resourcesContainer;
};
