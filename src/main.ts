import { Application, Graphics,Assets, Sprite, Texture, Text, Container } from 'pixi.js';
import cardData from './cards.json'
import './style.css'

import { DropShadowFilter } from 'pixi-filters';

const loadAssets = async () => {
  Assets.add({alias: 'background', src: 'assets/bgtest.png'});
  Assets.add({alias: 'settings_button', src: 'assets/settings_icon.png'});
  Assets.add({alias: 'stat_icon', src: 'assets/stat_icon.png'});
  Assets.add({alias: 'res_icon', src: 'assets/res1.png'});
  Assets.add({alias: 'npc_img', src: 'assets/npc1.png'});
  //  Assets.add({alias: 'background', src: 'bgtest.png'});

  await Assets.load('background')
  await Assets.load('settings_button')
  await Assets.load('stat_icon')
  await Assets.load('res_icon')
  await Assets.load('npc_img')
  //  await Assets.load('background')
}

(async () => {
  // Create a new application
   const app = new Application();
   await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    background: '#ffffff', // белый фон
    resizeTo: window,
  });

  await loadAssets()
  
  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  // Масштабирование под мобильные устройства
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight;

  // Задний фон "Background_img"
  const texture = Texture.from('background'); // Замените на путь к вашему изображению
  const background = new Sprite(texture);
  background.width = screenWidth;
  background.height = screenHeight;
  
  app.stage.addChild(background);

  // Кнопка настроек "Settings_button" settings_button
  const sb_texture = Texture.from('settings_button'); // Замените на путь к вашему изображению
  const settingsButton = new Sprite(sb_texture);
  settingsButton.width = 56;
  settingsButton.height = 56;
  settingsButton.x = 16;
  settingsButton.y = 16;
  settingsButton.interactive = true;
  settingsButton.on('pointerdown', () => {
    console.log('Settings button clicked');
  });
  app.stage.addChild(settingsButton);

  // Кнопка персонажа "Character_button"
  const characterButton = new Container();

  const Charbg = new Graphics();
  Charbg.fill('#ffffff');
  Charbg.roundRect(-6, 0, 230, 56, 10);
  Charbg.fill();
  characterButton.addChild(Charbg);

  const stat_icon_texture = Texture.from('stat_icon'); // Замените на путь к вашему изображению
  const stat_icon = new Sprite(stat_icon_texture);
  stat_icon.width = 50;
  stat_icon.height = 50;
  characterButton.addChild(stat_icon);
  
  const characterStatus = new Text({
    text:'Любитель загадок',
    style:{
      fontSize: 18,
      fill: '#000000',
      align: 'left',
    }
  });
  characterStatus.x = 60;
  characterStatus.y = 16;

  characterButton.x = screenWidth - 16 - characterButton.width;
  characterButton.y = 16;
  characterButton.addChild(characterStatus);
  characterButton.interactive = true;
  characterButton.on('pointerdown', () => {
    console.log('Character button clicked');
  });
  app.stage.addChild(characterButton);

  // Ресурсы "Resources_rows"

  // Resource_1
  
  const res_icon_texture1 = Texture.from('res_icon'); // Замените на путь к вашему изображению
  const res_icon1 = new Sprite(res_icon_texture1);
  res_icon1.width = 40;
  res_icon1.height = 40;
  res_icon1.x = 0;
  res_icon1.y = 0;
  
  const resourceContainer1 = new Container();
  resourceContainer1.addChild(res_icon1);
  
  const resourceBar1 = new Graphics();
    resourceBar1.fill('#000000');
    resourceBar1.roundRect(44, 2, 120, 34, 10);
    resourceBar1.fill();
  resourceContainer1.addChild(resourceBar1);
  const resourceBar11 = new Graphics();
    resourceBar11.fill('#404040');
    resourceBar11.roundRect(44, 2, 60, 34, 10);
    resourceBar11.fill();
  resourceContainer1.addChild(resourceBar11);
  const resText1 = new Text({
    text:resourceBar11.width+'/'+resourceBar1.width,
    style:{
      fontSize: 20,
      fill: '#ffffff',
      align: 'center',
    }
  });
  resText1.x = 80;
  resText1.y = 10;
  resourceContainer1.addChild(resText1);
  resourceContainer1.x = 12;
  resourceContainer1.y = 100;
  app.stage.addChild(resourceContainer1);

  // Resource_2
  const res_icon_texture2 = Texture.from('res_icon'); // Замените на путь к вашему изображению
  const res_icon2 = new Sprite(res_icon_texture2);
  res_icon2.width = 40;
  res_icon2.height = 40;
  res_icon2.x = 0;
  res_icon2.y = 0;

  const resourceContainer2 = new Container();
  resourceContainer2.addChild(res_icon2);
  
  const resourceBar2 = new Graphics();
    resourceBar2.fill('#000000');
    resourceBar2.roundRect(44, 2, 120, 34, 10);
    resourceBar2.fill();
  resourceContainer2.addChild(resourceBar2);
  const resourceBar22 = new Graphics();
    resourceBar22.fill('#404040');
    resourceBar22.roundRect(44, 2, 50, 34, 10);
    resourceBar22.fill();
  resourceContainer2.addChild(resourceBar22);
  const resText2 = new Text({
    text:resourceBar22.width+'/'+resourceBar2.width,
    style:{
      fontSize: 20,
      fill: '#ffffff',
      align: 'center',
    }
  });
  resText2.x = 80;
  resText2.y = 10;
  resourceContainer2.addChild(resText2);
  resourceContainer2.x = screenWidth-resourceContainer2.width-16;
  resourceContainer2.y = 100;
  app.stage.addChild(resourceContainer2);


// Resource_3
const res_icon_texture3 = Texture.from('res_icon'); // Замените на путь к вашему изображению
const res_icon3 = new Sprite(res_icon_texture3);
res_icon3.width = 40;
res_icon3.height = 40;
res_icon3.x = 0;
res_icon3.y = 0;

const resourceContainer3 = new Container();
resourceContainer3.addChild(res_icon3);

const resourceBar3 = new Graphics();
  resourceBar3.fill('#000000');
  resourceBar3.roundRect(44, 2, 120, 34, 10);
  resourceBar3.fill();
resourceContainer3.addChild(resourceBar3);
const resourceBar33 = new Graphics();
  resourceBar33.fill('#404040');
  resourceBar33.roundRect(44, 2, 50, 34, 10);
  resourceBar33.fill();
resourceContainer3.addChild(resourceBar33);
const resText3 = new Text({
  text:resourceBar33.width+'/'+resourceBar3.width,
  style:{
    fontSize: 20,
    fill: '#ffffff',
    align: 'center',
  }
});
resText3.x = 80;
resText3.y = 10;
resourceContainer3.addChild(resText3);
resourceContainer3.x = 12;
resourceContainer3.y = 146;
app.stage.addChild(resourceContainer3);



// Resource_4
const res_icon_texture4 = Texture.from('res_icon'); // Замените на путь к вашему изображению
const res_icon4 = new Sprite(res_icon_texture4);
res_icon4.width = 40;
res_icon4.height = 40;
res_icon4.x = 0;
res_icon4.y = 0;

const resourceContainer4 = new Container();
resourceContainer4.addChild(res_icon4);

const resourceBar4 = new Graphics();
  resourceBar4.fill('#000000');
  resourceBar4.roundRect(44, 2, 120, 34, 10);
  resourceBar4.fill();
resourceContainer4.addChild(resourceBar4);
const resourceBar44 = new Graphics();
  resourceBar44.fill('#404040');
  resourceBar44.roundRect(44, 2, 50, 34, 10);
  resourceBar44.fill();
resourceContainer4.addChild(resourceBar44);
const resText4 = new Text({
  text:resourceBar44.width+'/'+resourceBar4.width,
  style:{
    fontSize: 20,
    fill: '#ffffff',
    align: 'center',
  }
});
resText4.x = 80;
resText4.y = 10;
resourceContainer4.addChild(resText4);
resourceContainer4.x = screenWidth-resourceContainer4.width-16;
resourceContainer4.y = 146;
app.stage.addChild(resourceContainer4);




// Изображение персонажа НПС "NPC_img"

const npcImg_texture = Texture.from('npc_img'); // Замените на путь к вашему изображению
const npcImg = new Sprite(npcImg_texture);
npcImg.width = 220;
npcImg.height = 248;
npcImg.x = screenWidth/2-npcImg.width/2;
npcImg.y = 200;
app.stage.addChild(npcImg);



// Стопка карточек



// // Добавляем тень с использованием DropShadowFilter

const shadowFilter = new DropShadowFilter({
  color: 0x000000,    // Цвет тени (черный)
  alpha: 0.5,         // Прозрачность тени
  blur: 4,            // Степень размытия
  quality: 3,         // Качество тени
});





  const cardStack = new Container();
  cardStack.x = 36;
  cardStack.y = screenHeight - 330;
  app.stage.addChild(cardStack);

  

  cardData.reverse().forEach((data) => {
    const card = new Container();
    card.y = data.offset_y;
    card.x = data.offset_x;
    

    const cardBg = new Graphics();
    cardBg.fill('#ffffff'); // Заглушка, белый цвет
    cardBg.roundRect(0, 0, screenWidth - 80, 300, 10);
    cardBg.fill();
    cardBg.alpha = 1;
    card.addChild(cardBg);
    cardBg.filters = [shadowFilter];

    const npcName = new Text({
      text:data.npcName,
      style:{
        fontSize: 18,
        fill: '#000000',
      }
    });

    npcName.x = 20;
    npcName.y = 20;
    card.addChild(npcName);

    const npcLine = new Text({
      text:data.npcLine,
      style:{
        fontSize: 20,
        fill: '#000000',
        wordWrap: true,
        wordWrapWidth: cardBg.width - 20,
      }
    });

    npcLine.x = 20;
    npcLine.y = 48;
    card.addChild(npcLine);

    const declineButton = new Graphics();
    declineButton.fill('#AE1A2E'); // Красная кнопка отказа
    declineButton.roundRect(10, cardBg.height-60, 140, 50, 20);
    declineButton.fill();
    declineButton.interactive = true;
    declineButton.on('pointerdown', () => {
      console.log(`Decline: ${data.declineText}`);
    });
    card.addChild(declineButton);

    const declineText = new Text({
      text:data.declineText,
      style:{
        fontSize: 20,
        fill: '#ffffff',
        align: 'center',
      }
    });

    declineText.x = 25;
    declineText.y = cardBg.height-48;
    card.addChild(declineText);

    const acceptButton = new Graphics();
    acceptButton.fill('#176542'); // Зеленая кнопка согласия
    acceptButton.roundRect(screenWidth - 230, cardBg.height-60, 140, 50, 20);
    acceptButton.fill();
    acceptButton.interactive = true;
    acceptButton.on('pointerdown', () => {
      console.log(`Accept: ${data.acceptText}`);
    });
    card.addChild(acceptButton);

    const acceptText = new Text({
      text:data.acceptText,
      style:{
        fontSize: 20,
        fill: '#ffffff',
        align: 'center',
      }
    });
   
    acceptText.x = screenWidth - 220;
    acceptText.y = cardBg.height-48;
    card.addChild(acceptText);

    cardStack.addChild(card);





  });



//   // Создаем прямоугольник с округленными углами
// const graphics = new Graphics();
// graphics.fill(0x87cefa);
// graphics.roundRect(100, 100, 200, 150, 20);
// graphics.fill();

// // Добавляем прямоугольник на сцену
// app.stage.addChild(graphics);

// // Добавляем тень с использованием DropShadowFilter

// const shadowFilter = new DropShadowFilter({
//   color: 0x000000,    // Цвет тени (черный)
//   alpha: 0.5,         // Прозрачность тени
//   blur: 4,            // Степень размытия
//   quality: 3,         // Качество тени
// });
// graphics.filters = [shadowFilter];

})();

