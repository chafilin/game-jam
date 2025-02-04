import { Level } from "../types/types";

export const levels: Level[] = [
  {
    id: "level1",
    background: "roomBg",
    parts: [
      {
        id: "level1_part1",
        background: "roomBg",
        cards: {
          1: {
            id: "1",
            npcName: "",
            npcLine:
              "Ты возвращаешься из школы. Учёба в третьем классе даётся нелегко.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Грустить",
              success: {
                nextCard: "2",
              },
            },
          },
          2: {
            id: "2",
            npcName: "",
            npcLine:
              "Вместо хороших оценок вам дают наклейки. И сегодня ты опять ничего не получил.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Мечтать",
              success: {
                nextCard: "3",
              },
            },
          },
          3: {
            id: "3",
            npcName: "",
            npcLine:
              "Вот бы наконец-то получить весёлого динозаврика или машинку.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Мечтать",
              success: {
                nextCard: "4",
              },
            },
          },
          4: {
            id: "4",
            npcName: "",
            npcLine:
              "Но больше всего ты мечтаешь о золотом плюсике! Он сияет на солнце словно сокровище.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Мечтать…",
              success: {
                nextCard: "5",
              },
            },
          },
          5: {
            id: "5",
            npcName: "",
            npcLine: "Как бы хотелось получить этот золотой плюсик.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "С другой стороны…",
              success: {
                nextCard: "6",
              },
            },
          },
          6: {
            id: "6",
            npcName: "",
            npcLine:
              "Вместо учёбы можно было бы заняться своими любимыми делами…",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Комиксы",
              success: {
                nextCard: "7",
                stats: {
                  savvy: 1,
                },
              },
            },
            left: {
              text: "Велосипед",
              success: {
                nextCard: "7",
                stats: {
                  dexterity: 1,
                },
              },
            },
          },
          7: {
            id: "7",
            npcName: "",
            npcLine: "Или поиграть…",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "На площадке",
              success: {
                nextCard: "8",
                stats: {
                  dexterity: 1,
                },
              },
            },
            left: {
              text: "В лего",
              success: {
                nextCard: "8",
                stats: {
                  savvy: 1,
                },
              },
            },
          },
          8: {
            id: "8",
            npcName: "",
            npcLine:
              "Но легендарная наклейка так и манит. Может, всё же поучиться?",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Учиться",
              success: {
                nextPart: "level1_part2",
              },
            },
            left: {
              text: "Лень",
              success: {
                nextCard: "1",
                stats: {
                  savvy: 0,
                  dexterity: 0,
                  magic: 0,
                },
              },
            },
          },
        },
      },
      {
        id: "level1_part2",
        background: "roomBg",
        cards: {
          1: {
            id: "1",
            npcName: "",
            npcLine: "Ты полон решимости и садишься за уроки.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: 'Открыть "Окружающий мир"',
              success: {
                nextCard: "2",
              },
            },
          },
          2: {
            id: "2",
            npcName: "",
            npcLine: "Волга — река в Европейской части России.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Читать",
              success: {
                nextCard: "3",
              },
            },
          },
          3: {
            id: "3",
            npcName: "",
            npcLine:
              "По разнообразию рыбы Волга одна из богатейших рек. В реке водятся: сазан, окунь, лещ, сом, судак, щука и ерш. В Волге живут также осётры, белуги и севрюги.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Читать дальше",
              success: {
                nextCard: "4",
              },
            },
          },
          4: {
            id: "4",
            npcName: "",
            npcLine:
              "На берегах реки можно увидеть таких редких и красивых птиц, как кудрявый пеликан, большая белая цапля, фазан и многих других.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Читать…",
              success: {
                nextCard: "5",
              },
            },
          },
          5: {
            id: "5",
            npcName: "",
            npcLine: "В дельте Волги в тростниках обитают дикие кабаны…",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Читать…",
              success: {
                nextCard: "6",
              },
            },
          },
          6: {
            id: "6",
            npcName: "",
            npcLine: "…насекомые, змеи и лягушки…",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Читать…",
              success: {
                nextCard: "7",
              },
            },
          },
          7: {
            id: "7",
            npcName: "",
            npcLine: "…печенька…",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Печенька?",
              success: {
                nextPart: "level1_part3",
              },
            },
          },
        },
      },
      {
        id: "level1_part3",
        background: "roomBg",
        cards: {
          1: {
            id: "1",
            npcName: "Печенька",
            npcLine:
              "Ты готов к приключениям? Ради золотого плюсика придётся попотеть!",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "cookie",
              },
            ],
            right: {
              text: "Приключениям?",
              success: {
                nextCard: "2",
              },
            },
          },
          2: {
            id: "2",
            npcName: "Печенька",
            npcLine:
              "Да, но они опаснее обычных приключений. Тебе понадобится помощь. Вот, держи…",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "cookie",
              },
            ],
            right: {
              text: "Что это?",
              success: {
                nextCard: "3",
              },
            },
          },
          3: {
            id: "3",
            npcName: "Печенька",
            npcLine: "Это магия! Теперь ты волшебник, Гарри!",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "cookie",
              },
            ],
            right: {
              text: "Я не Гарри",
              success: {
                nextCard: "4",
              },
            },
          },
          4: {
            id: "4",
            npcName: "Печенька",
            npcLine: "Смотри, справа сверху твои навыки и предметы!",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "cookie",
              },
            ],
            right: {
              text: "Но зачем?",
              success: {
                nextCard: "5",
              },
            },
          },
          5: {
            id: "5",
            npcName: "Печенька",
            npcLine:
              "Они пригодятся! Тебя ждёт множество непростых выборов. А выборы влияют на карму.",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "cookie",
              },
            ],
            right: {
              text: "Карма?",
              success: {
                nextCard: "6",
              },
            },
          },
          6: {
            id: "6",
            npcName: "Печенька",
            npcLine: "Карма приведёт к той или иной развязке. Удачи!",
            background: "roomBg",
            npcs: [
              {
                imgSrc: "cookie",
              },
            ],
            right: {
              text: "Подожди!",
              success: {
                nextLevel: "level2",
              },
            },
          },
        },
      },
    ],
  },
  {
    id: "level2",
    background: "roomBg",
    parts: [
      {
        id: "level2_part1",
        background: "roomBg",
        cards: {
          1: {
            id: "1",
            npcName: "",
            npcLine:
              "Ты стоишь возле широкой реки. Перед тобой каменный город с высокими стенами и башнями, прямо как в мультиках.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Оглядеться",
              success: {
                nextCard: "2",
              },
            },
            left: {
              text: "Идти в город",
              success: {
                nextCard: "3",
              },
            },
          },
          2: {
            id: "2",
            npcName: "",
            npcLine: "Вдоль реки ты видишь луга, а далеко за ними густой лес.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Идти в город",
              success: {
                nextCard: "3",
              },
            },
          },
          3: {
            id: "3",
            npcName: "",
            npcLine:
              "У ворот никого нет. Проходя внутрь, ты слышишь множество криков.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Идти на крики",
              success: {
                nextCard: "4",
              },
            },
          },
          4: {
            id: "4",
            npcName: "",
            npcLine:
              "Под опрокинутой телегой сидит девочка с лицом лягушки. Она плачет.",
            background: "alley",
            npcs: [
              {
                imgSrc: "frog",
              },
            ],
            right: {
              text: "Спросить про лицо",
              success: {
                nextCard: "8",
              },
            },
            left: {
              text: "Что случилось?",
              success: {
                nextCard: "5",
              },
            },
          },
          5: {
            id: "5",
            npcName: "Лягушка",
            npcLine: "Стрекоза страшная! И я потерялась.",
            background: "alley",
            npcs: [
              {
                imgSrc: "frog",
              },
            ],
            right: {
              text: "Стрекозы не страшные",
              success: {
                nextCard: "7",
              },
            },
            left: {
              text: "Помочь",
              success: {
                nextCard: "6",
                stats: {
                  karma: 1,
                },
                addItem: "coin",
              },
            },
          },
          6: {
            id: "6",
            npcName: "",
            npcLine:
              "Ты помогаешь девочке найти дом. В благодарность она вручает тебе монетку.",
            background: "alley",
            npcs: [
              {
                imgSrc: "frog",
              },
            ],
            right: {
              text: "Идти дальше",
              success: {
                nextCard: "9",
              },
            },
          },
          7: {
            id: "7",
            npcName: "",
            npcLine: "Девочка удивлённо на тебя смотрит.",
            background: "alley",
            npcs: [
              {
                imgSrc: "frog",
              },
            ],
            left: {
              text: "Помочь",
              success: {
                nextCard: "6",
                stats: {
                  karma: 1,
                },
                addItem: "coin",
              },
            },
            right: {
              text: "Идти дальше",
              success: {
                nextCard: "9",
              },
            },
          },
          8: {
            id: "8",
            npcName: "",
            npcLine:
              "Девочка не отвечает. Но ты замечаешь, что и руки, и ноги у неё тоже лягушачьи.",
            background: "alley",
            npcs: [
              {
                imgSrc: "frog",
              },
            ],
            right: {
              text: "Идти дальше",
              success: {
                nextCard: "9",
              },
            },
            left: {
              text: "Что случилось?",
              success: {
                nextCard: "5",
              },
            },
          },
          9: {
            id: "9",
            npcName: "",
            npcLine:
              "Ты выходишь на площадь и видишь стрекозу размером с дом. Вокруг раскиданы люди в доспехах.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Приглядеться",
              success: {
                nextCard: "10",
              },
            },
          },
          10: {
            id: "10",
            npcName: "",
            npcLine:
              "Недалеко от чудовища стоит паренёк. Похоже, его пытается защитить женщина в доспехах, но она слишком сильно ранена.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Помочь",
              success: {
                nextCard: "11",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Сбежать",
              success: {
                nextCard: "19",
                stats: {
                  karma: -1,
                },
              },
            },
          },
          11: {
            id: "11",
            npcName: "",
            npcLine: "Кажется, Печенька говорил, что я теперь волшебник?",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Камень",
              success: {
                nextCard: "17",
                stats: {
                  dexterity: 1,
                },
              },
            },
            left: {
              text: "Магия",
              success: {
                nextCard: "12",
                stats: {
                  magic: 1,
                },
              },
            },
          },
          12: {
            id: "12",
            npcName: "",
            npcLine:
              "Ты творишь магическую вспышку — и она срабатывает! Стрекоза временно слепнет, а паренёк и рыцарь прячутся за угол дома.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Атаковать",
              success: {
                nextCard: "13",
              },
            },
            left: {
              text: "Сбежать",
              success: {
                nextCard: "18",
              },
            },
          },
          13: {
            id: "13",
            npcName: "",
            npcLine:
              "Перенапряжение даёт о себе знать. Эта атака будет сложнее.\n(Испытание навыка)",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Камень",
              requirements: {
                dexterity: 12,
              },
              success: {
                nextCard: "15",
                stats: {
                  dexterity: 2,
                },
              },
              failure: {
                nextCard: "13_1",
                stats: {
                  dexterity: 1,
                },
              },
            },
            left: {
              text: "Магия",
              requirements: {
                magic: 12,
              },
              success: {
                nextCard: "14",
                stats: {
                  magic: 2,
                },
              },
              failure: {
                nextCard: "14_1",
                stats: {
                  magic: 1,
                },
              },
            },
          },
          14: {
            id: "14",
            npcName: "",
            npcLine:
              "Стрела бьётся о крепкий хитин Стрекозы. Монстр замирает, изучая тебя своими огромными глазами.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Атаковать",
              success: {
                nextCard: "21",
              },
            },
            left: {
              text: "Рассмотреть",
              success: {
                nextCard: "16",
                stats: {
                  karma: 1,
                },
              },
            },
          },
          "14_1": {
            id: "14_1",
            npcName: "",
            npcLine:
              "Магия не слушается. В мгновение чудовище оказывается рядом.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Готовиться к смерти",
              success: {
                nextCard: "22",
              },
            },
          },
          15: {
            id: "15",
            npcName: "",
            npcLine:
              "Камень попадает, но отскакивает от крепкого хитина Стрекозы. Монстр замирает, изучая тебя своими огромными глазами.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Атаковать",
              success: {
                nextCard: "21",
              },
            },
            left: {
              text: "Рассмотреть",
              success: {
                nextCard: "16",
                stats: {
                  karma: 1,
                },
              },
            },
          },
          "15_1": {
            id: "15_1",
            npcName: "",
            npcLine:
              "Твои руки дрожат, и камень пролетает мимо. В мгновение чудовище оказывается рядом.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Готовиться к смерти",
              success: {
                nextCard: "22",
              },
            },
          },
          16: {
            id: "16",
            npcName: "",
            npcLine:
              "Что-то красное на шее.\nРана? Или в чешуе что-то застряло?\nТы не успеваешь рассмотреть: огромное создание поворачивается и улетает.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Отдышаться",
              success: {
                nextCard: "23",
              },
            },
          },
          17: {
            id: "17",
            npcName: "",
            npcLine:
              "Ты метко запускаешь камень прямо в глаз Стрекозе. Этого достаточно, чтобы она отвлеклась на тебя.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Сбежать",
              success: {
                nextCard: "18",
              },
            },
            left: {
              text: "Атаковать",
              success: {
                nextCard: "13",
              },
            },
          },
          18: {
            id: "18",
            npcName: "",
            npcLine: "Чудовище стремительно нагоняет тебя. Нужно спрятаться!",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "В узкий переулок",
              success: {
                nextCard: "57",
              },
            },
            left: {
              text: "В дом",
              success: {
                nextCard: "82",
              },
            },
          },
          19: {
            id: "19",
            npcName: "",
            npcLine:
              "Убегая, ты слышишь, как на площади что-то шипит и взрывается.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "В дом",
              success: {
                nextCard: "82",
              },
            },
            left: {
              text: "Из города",
              success: {
                nextCard: "20",
                stats: {
                  karma: -1,
                },
              },
            },
          },
          20: {
            id: "20",
            npcName: "",
            npcLine:
              "У ворот тебя накрывает тень Стрекозы. Чудовище пролетает над лугами и скрывается в кроне леса.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Отдышаться",
              success: {
                nextCard: "122",
              },
            },
          },
          21: {
            id: "21",
            npcName: "",
            npcLine:
              "Готовое к твоей атаке, чудовище уворачивается. В мгновение оно оказывается рядом.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Готовиться к смерти",
              success: {
                nextCard: "22",
              },
            },
          },
          22: {
            id: "22",
            npcName: "",
            npcLine:
              "Слышится взрыв, и Стрекозу относит в сторону. Она ошарашено хватает лапами пустоту. Сквозь пыль ты различаешь спасённого тобой паренька, который тянет тебя за собой в укрытие.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "dragonfly",
              },
            ],
            right: {
              text: "Следовать",
              success: {
                nextCard: "45",
              },
            },
          },
          23: {
            id: "23",
            npcName: "",
            npcLine:
              "На площади собираются люди-животные, пытаясь оказать помощь раненым. Однако не всем можно помочь. Страх сменяется отчаянием и горем.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Заплакать",
              success: {
                nextCard: "25",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Я победил?",
              success: {
                nextCard: "24",
              },
            },
          },
          24: {
            id: "24",
            npcName: "Рыцарь",
            npcLine:
              "Проклятое отродие улетело. Но почему?\n(К вам подходит женщина в доспехах, опираясь на плечо паренька.)",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "26",
              },
            },
            left: {
              text: "Кто вы?",
              success: {
                nextCard: "27",
              },
            },
          },
          25: {
            id: "25",
            npcName: "Рыцарь",
            npcLine:
              "Вы многим помогли. Спасибо. У вас сердце героя.\n(К вам подходит женщина в доспехах, опираясь на плечо паренька.)",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "26",
              },
            },
            left: {
              text: "Кто вы?",
              success: {
                nextCard: "27",
              },
            },
          },
          26: {
            id: "26",
            npcName: "Рыцарь",
            npcLine:
              "Стрекоза — загадочное чудовище. Уже месяц оно терроризирует наш город. Ещё пару таких нападений мы не выдержим.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Кто вы?",
              success: {
                nextCard: "27",
              },
            },
          },
          27: {
            id: "27",
            npcName: "Леди Осетрина",
            npcLine:
              "Леди Осетрина, рыцарь короны. Это мой оруженосец и изобретатель, Выхухольд. Но кто ты, отважный юноша?",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Честно",
              success: {
                nextCard: "29",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Соврать",
              success: {
                nextCard: "28",
              },
            },
          },
          28: {
            id: "28",
            npcName: "",
            npcLine:
              "Ты притворяешься обычным путешественником. Выходит не очень складно. Но, кажется, твою ложь не пытаются разоблачить.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Что теперь?",
              success: {
                nextCard: "32",
              },
            },
          },
          29: {
            id: "29",
            npcName: "",
            npcLine:
              "Ты рассказываешь свою историю. Леди Осетрина выглядит задумчивой и уставшей. Выхухольд же наоборот приободряется.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Осетрина",
              success: {
                nextCard: "30",
              },
            },
            left: {
              text: "Выхухольд",
              success: {
                nextCard: "31",
              },
            },
          },
          30: {
            id: "30",
            npcName: "Леди Осетрина",
            npcLine:
              "Многое из твоего рассказа я не поняла. Но это ужасно, что дети вашего мира подвергаются такой опасности ради золотого клея.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Что теперь?",
              success: {
                nextCard: "32",
              },
            },
          },
          31: {
            id: "31",
            npcName: "Выхухольд",
            npcLine:
              "Я надеялся, что существуют другие миры и путешествия между ними! Какая почва для экспериментов!",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Осетрина",
              success: {
                nextCard: "30",
              },
            },
            left: {
              text: "Что теперь?",
              success: {
                nextCard: "32",
              },
            },
          },
          32: {
            id: "32",
            npcName: "Леди Осетрина",
            npcLine:
              "У тебя будет кров и еда. Но до тех пор, пока не разберусь с чудовищем, помочь большим не могу.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Хочу помочь",
              success: {
                nextCard: "35",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Согласиться",
              success: {
                nextCard: "33",
              },
            },
          },
          33: {
            id: "33",
            npcName: "",
            npcLine:
              "Ты находишь приют в семье ежей. Ты скучаешь по своему дому, но привыкаешь к новой жизни.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Привыкать",
              success: {
                nextCard: "34",
              },
            },
          },
          34: {
            id: "34",
            npcName: "",
            npcLine:
              "К тебе хорошо относятся. Никто не заставляет тебя работать, и у тебя много свободного времени. Чем ты занимаешься?",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          35: {
            id: "35",
            npcName: "",
            npcLine:
              "Ты должен помочь городу с чудовищем. И начинаешь убеждать Осетрину взять тебя с собой.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Я волшебник",
              success: {
                nextCard: "40",
              },
            },
            left: {
              text: "Я умный и ловкий",
              success: {
                nextCard: "36",
              },
            },
          },
          36: {
            id: "36",
            npcName: "Леди Осетрина",
            npcLine:
              "В мире много умных и сильных детей. Это не повод рисковать их жизнью. Чудовища детям не игрушка!",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Я волшебник",
              success: {
                nextCard: "40",
              },
            },
            left: {
              text: "Я из другого мира",
              success: {
                nextCard: "37",
              },
            },
          },
          37: {
            id: "37",
            npcName: "Леди Осетрина",
            npcLine:
              "Думаю, ты прав. Это может помочь. Но не в бою. Я отведу тебя к Королеве.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Королеве?!",
              success: {
                nextCard: "38",
              },
            },
          },
          38: {
            id: "38",
            npcName: "",
            npcLine:
              "Тебя проводят по уютному, небольшому замку. Отстояв очередь, ты наконец встречаешься с королевой.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Рассмотреть",
              success: {
                nextCard: "39",
              },
            },
          },
          39: {
            id: "39",
            npcName: "",
            npcLine:
              "Это женщина, словно сделанная из воды. Она слушает Леди Осетрину, улыбается тебе и представляется королевой Вольгой.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          40: {
            id: "40",
            npcName: "",
            npcLine:
              "Ты стреляешь магическим снарядом в бутылку. На удивление, это производит большое впечатление на твоих собеседников.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Я буду полезен",
              success: {
                nextCard: "41",
              },
            },
          },
          41: {
            id: "41",
            npcName: "Леди Остерина",
            npcLine:
              "Магия — невероятная редкость в нашем мире! Это действительно может помочь со Стрекозой…",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Выстрелить в птицу",
              success: {
                nextCard: "42",
                stats: {
                  karma: -2,
                },
              },
            },
            left: {
              text: "Я буду слушаться",
              success: {
                nextCard: "44",
                stats: {
                  savvy: 1,
                },
              },
            },
          },
          42: {
            id: "42",
            npcName: "",
            npcLine:
              "Магия достигает ворона, он в ужасе кричит и падает на землю. Оказывается, это был житель города. К счастью, он едва ранен. Леди Осетрина кричит на тебя.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Извините…",
              success: {
                nextCard: "43",
              },
            },
          },
          43: {
            id: "43",
            npcName: "Леди Осетрина",
            npcLine:
              "Ты слишком импульсивен! Я не могу взять тебя с собой. Но… твои способности могут пригодиться Королеве.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Королеве?!",
              success: {
                nextCard: "38",
              },
            },
          },
          44: {
            id: "44",
            npcName: "Леди Осетрина",
            npcLine:
              "Хорошо. Я буду учить тебя защите. Будешь прилежным и осторожным, я возьму тебя в поход на чудовище.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          45: {
            id: "45",
            npcName: "",
            npcLine:
              "Тебе помогают зайти в дом. Твоим проводником оказывается паренёк, которого ты спас от чудовища. Рядом лежит рыцарь, прикладывая ткань к ране.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Что за взрыв?",
              success: {
                nextCard: "46",
              },
            },
            left: {
              text: "Смотреть в окно",
              success: {
                nextCard: "49",
              },
            },
          },
          46: {
            id: "46",
            npcName: "Паренёк",
            npcLine:
              "Вещество, способное аккумулировать энергию солнца. При нарушении целостности оболочки происходит активное высвобождение этой энергии…",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Слушать",
              success: {
                nextCard: "47",
              },
            },
            left: {
              text: "Смотреть в окно",
              success: {
                nextCard: "49",
              },
            },
          },
          47: {
            id: "47",
            npcName: "Паренёк",
            npcLine:
              "К сожалению, я пока не нашёл месторождение этого вещества и израсходовал почти всё, что у меня было. Но я рад, что она сработала, и вы живы.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Спасибо",
              success: {
                nextCard: "48",
                addItem: "solar_stone",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Смотреть в окно",
              success: {
                nextCard: "49",
              },
            },
          },
          48: {
            id: "48",
            npcName: "Паренёк",
            npcLine:
              "Спасибо вам, что спасли нас. Пожалуйста, примите в подарок остатки вещества, о котором я рассказывал. Я назвал его Солнечник.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Смотреть в окно",
              success: {
                nextCard: "49",
              },
            },
          },
          49: {
            id: "49",
            npcName: "",
            npcLine:
              "Стрекоза хищно маневрирует над городом и, не найдя новую жертву, улетает.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Выйти на площадь",
              success: {
                nextCard: "50",
              },
            },
          },
          50: {
            id: "50",
            npcName: "",
            npcLine:
              "На площади собираются люди-животные, пытаясь оказать помощь раненым. Однако не всем можно помочь. Страх сменяется отчаянием и горем.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Поговорить",
              success: {
                nextCard: "51",
              },
            },
            left: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
          },
          51: {
            id: "51",
            npcName: "",
            npcLine:
              "Недалеко от тебя уже знакомые тебе раненная рыцарь и паренёк. С кем поговорить?",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Рыцарь",
              success: {
                nextCard: "25",
              },
            },
            left: {
              text: "Паренёк",
              success: {
                nextCard: "52",
              },
            },
          },
          52: {
            id: "52",
            npcName: "Выхухольд",
            npcLine:
              "Спасибо вам, что спасли нас. Это Леди Осетрина, рыцарь короны. А я Выхухольд, её оруженосец.\n(Он скромно кланяется.)",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "53",
              },
            },
          },
          53: {
            id: "53",
            npcName: "Выхухольд",
            npcLine:
              "Стрекоза — очень интересное существо. Несмотря на свои размеры, она обладает удивительной аэродинамикой и мобильностью.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Оно злое?",
              success: {
                nextCard: "54",
              },
            },
          },
          54: {
            id: "54",
            npcName: "Выхухольд",
            npcLine:
              "Агрессивный хищник, да. Появилось 4 недели назад. Могу предположить, что ещё 4 недели город не выдержит. Могу я тоже задать вопрос?",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Конечно",
              success: {
                nextCard: "55",
              },
            },
            left: {
              text: "Нет",
              success: {
                nextCard: "56",
                stats: {
                  karma: -2,
                },
              },
            },
          },
          55: {
            id: "55",
            npcName: "Выхухольд",
            npcLine:
              "Я заметил, что вы немного отличаетесь от среднестатистического жителя этого города. Могу я узнать, кто вы?",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Честно",
              success: {
                nextCard: "29",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Соврать",
              success: {
                nextCard: "28",
              },
            },
          },
          56: {
            id: "56",
            npcName: "",
            npcLine:
              "Выхухольд стыдливо умолкает. Леди Остерина смотрит на тебя с осуждением. Они уходят.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "knight",
              },
              {
                imgSrc: "desman",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
          },
          57: {
            id: "57",
            npcName: "",
            npcLine:
              "Лапы монстра почти достают тебя. У самого уха слышно жевание массивной челюсти. Но этот звук прерывает свист.",
            background: "alley",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Откуда?",
              success: {
                nextCard: "58",
              },
            },
          },
          58: {
            id: "58",
            npcName: "",
            npcLine:
              "Стрелы. В переулке перед тобой стоит цапля-лучница. Ловкими движениями она выпускает одну стрелу за другой вслед улетающему чудовищу.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "62",
              },
            },
            left: {
              text: "Поблагодарить",
              success: {
                nextCard: "59",
              },
            },
          },
          59: {
            id: "59",
            npcName: "Лучница",
            npcLine:
              "Если бы ты не загораживал, тварь была бы уже мертва.\n(Раздражённый голос навевает мысли о твоей старшей сестре.)",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "62",
              },
            },
            left: {
              text: "Возразить",
              success: {
                nextCard: "60",
              },
            },
          },
          60: {
            id: "60",
            npcName: "",
            npcLine:
              "Ты видел, что стрелы едва ранили Стрекозу. Но, видимо, лучница с тобой не согласна.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "62",
              },
            },
            left: {
              text: "Спорить",
              success: {
                nextCard: "61",
              },
            },
          },
          61: {
            id: "61",
            npcName: "",
            npcLine:
              'Лучница говорит, что у неё есть дела важнее, чем спорить с "капризным ребёнком". Она уходит.',
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
            left: {
              text: "Пойти за ней",
              success: {
                nextCard: "69",
              },
            },
          },
          62: {
            id: "62",
            npcName: "Лучница",
            npcLine:
              "Стрекоза, может, и хорошо летает, но не лучше моих стрел! Скоро я с ней разделаюсь.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Кто вы?",
              success: {
                nextCard: "63",
              },
            },
          },
          63: {
            id: "63",
            npcName: "Лучница",
            npcLine:
              "Та, кто спасла твою глупую голову. Тебе жить надоело?\n(Раздражённый голос навевает мысли о твоей старшей сестре.)",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Промолчать",
              success: {
                nextCard: "64",
              },
            },
            left: {
              text: "О себе",
              success: {
                nextCard: "65",
              },
            },
          },
          64: {
            id: "64",
            npcName: "Лучница",
            npcLine:
              "В любом случае, очевидно, что ты не можешь позаботиться о себе. Где твой дом?",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "О себе",
              success: {
                nextCard: "65",
              },
            },
          },
          65: {
            id: "65",
            npcName: "",
            npcLine:
              "Лучница так и не назвала своего имени. Стоит ли доверить ей правду о себе?",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Честно",
              success: {
                nextCard: "66",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Соврать",
              requirements: {
                savvy: 12,
              },
              success: {
                nextCard: "79",
                stats: {
                  savvy: 2,
                },
              },
              failure: {
                nextCard: "67",
                stats: {
                  savvy: 1,
                },
              },
            },
          },
          66: {
            id: "66",
            npcName: "",
            npcLine:
              "Ты рассказываешь свою историю. Лучница смеётся, похоже, она тебе не верит.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Это правда!",
              success: {
                nextCard: "68",
              },
            },
          },
          67: {
            id: "67",
            npcName: "",
            npcLine:
              "Ты притворяешься обычным путешественником. Выходит не очень складно. Лучница смеётся.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Это правда!",
              success: {
                nextCard: "68",
              },
            },
            left: {
              text: "Сказать правду",
              success: {
                nextCard: "66",
              },
            },
          },
          68: {
            id: "68",
            npcName: "Лучница",
            npcLine:
              "Брехун из тебя посредственный. Но спасибо, что развеселил. Удачи!\n(Она собирается уходить.)",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
            left: {
              text: "Пойти за ней",
              success: {
                nextCard: "66",
              },
            },
          },
          69: {
            id: "69",
            npcName: "",
            npcLine: "Лучница делает вид, что не замечает тебя.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
            left: {
              text: "Прожолжать преследование",
              success: {
                nextCard: "70",
              },
            },
          },
          70: {
            id: "70",
            npcName: "Лучница",
            npcLine: "Я тебе не нянька, хватит за мной идти.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
            left: {
              text: "Прожолжать преследование",
              success: {
                nextCard: "71",
                addItem: "coin",
              },
            },
          },
          71: {
            id: "71",
            npcName: "Лучница",
            npcLine: "Держи монетку и оставь меня в покое.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
            left: {
              text: "Прожолжать преследование",
              success: {
                nextCard: "72",
              },
            },
          },
          72: {
            id: "72",
            npcName: "Лучница",
            npcLine: "Что тебе от меня нужно? Иди домой!",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Войти в чужой дом",
              success: {
                nextCard: "73",
              },
            },
            left: {
              text: "У меня нет дома",
              success: {
                nextCard: "75",
              },
            },
          },
          73: {
            id: "73",
            npcName: "",
            npcLine:
              "Это оказался дом людей-ежей. Они кажутся доброжелательными и даже не против твоей компании.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Остаться",
              success: {
                nextCard: "33",
              },
            },
            left: {
              text: "Вернуться к лучнице",
              success: {
                nextCard: "74",
              },
            },
          },
          74: {
            id: "74",
            npcName: "Лучница",
            npcLine: "Ну что на это раз… Это был не твой дом? Ты заблудился?",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "У меня нет дома",
              success: {
                nextCard: "75",
              },
            },
          },
          75: {
            id: "75",
            npcName: "",
            npcLine:
              "Лучница тяжело вздыхает и спрашивает, есть ли у тебя деньги.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Нет",
              success: {
                nextCard: "77",
              },
            },
            left: {
              text: "Показать",
              success: {
                nextCard: "76",
              },
            },
          },
          76: {
            id: "76",
            npcName: "Лучница",
            npcLine:
              "Этого хватит на пару ночей в таверне. Либо… можешь жить у меня.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Лучница",
              success: {
                nextCard: "77",
              },
            },
            left: {
              text: "Таверна",
              success: {
                nextCard: "100",
              },
            },
          },
          77: {
            id: "77",
            npcName: "Лучница",
            npcLine:
              "Я пущу тебя к себе, но предупреждаю: работы будет много. Согласен?",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Да",
              success: {
                nextCard: "78",
              },
            },
            left: {
              text: "Лучше в таверну",
              success: {
                nextCard: "100",
              },
            },
          },
          78: {
            id: "78",
            npcName: "",
            npcLine:
              "Дом лучницы оказывается старой лачугой. Тут много охотничьих инструментов и шкур. С лучницей живёт её подруга швея.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          79: {
            id: "79",
            npcName: "",
            npcLine:
              "Ты врёшь про свои путешествия, получается так складно, что ты и сам себе почти поверил.",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Такие вот дела…",
              success: {
                nextCard: "80",
              },
            },
          },
          80: {
            id: "80",
            npcName: "Лучница",
            npcLine:
              "Ребёнок путешественник? Удивительно, что ты ещё жив. Тебе нужен кров?",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Да",
              success: {
                nextCard: "75",
              },
            },
            left: {
              text: "Нет",
              success: {
                nextCard: "81",
              },
            },
          },
          81: {
            id: "81",
            npcName: "Лучница",
            npcLine: "Тогда удачи в твоих странствиях!\n(Она уходит.)",
            background: "alley",
            npcs: [
              {
                imgSrc: "heron",
              },
            ],
            right: {
              text: "Уйти",
              success: {
                nextCard: "102",
              },
            },
            left: {
              text: "Пойти за ней",
              success: {
                nextCard: "69",
              },
            },
          },
          82: {
            id: "82",
            npcName: "Мужчина",
            npcLine:
              "Ну и денёк, да?\n(Ехидно квакает мужчина-лягушка, сидя среди напуганных людей-животных.)",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Ответить",
              requirements: {
                savvy: 12,
              },
              success: {
                nextCard: "104",
                stats: {
                  savvy: 2,
                },
              },
              failure: {
                nextCard: "103",
                stats: {
                  savvy: 1,
                },
              },
            },
            left: {
              text: "Оглядеться",
              success: {
                nextCard: "83",
              },
            },
          },
          83: {
            id: "83",
            npcName: "",
            npcLine:
              "Судя по книгам, доставшимся тебе в наследство от сестры, это таверна.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "84",
              },
            },
          },
          84: {
            id: "84",
            npcName: "",
            npcLine:
              "Мужчина-лягушка трогает струны своей лютни и начинает петь.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Слушать",
              success: {
                nextCard: "87",
              },
            },
            left: {
              text: "Остановить",
              success: {
                nextCard: "85",
                stats: {
                  karma: -1,
                },
              },
            },
          },
          85: {
            id: "85",
            npcName: "",
            npcLine:
              "Бард обиженно вздыхает и рассказывает словами. Стрекоза уже месяц нападает на город. Королева и её рыцари не могут её победить.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Смотреть в окно",
              success: {
                nextCard: "86",
              },
            },
          },
          86: {
            id: "86",
            npcName: "",
            npcLine:
              "Стрекоза хищно маневрирует над городом и, не найдя новую жертву, улетает. Большая часть людей покидает таверну, но бард остаётся.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Кто вы?",
              success: {
                nextCard: "90",
              },
            },
            left: {
              text: "Уйти из таверны",
              success: {
                nextCard: "121",
              },
            },
          },
          87: {
            id: "87",
            npcName: "",
            npcLine:
              "Он поёт об ужасном чудовище, что мучает город многие дни. О том, как отважно с ним сражаются рыцари.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Слушать",
              success: {
                nextCard: "88",
              },
            },
            left: {
              text: "Смотреть в окно",
              success: {
                nextCard: "86",
              },
            },
          },
          88: {
            id: "88",
            npcName: "",
            npcLine:
              "О герое, что спасёт эти земли и станет новым королём. О пирах в его честь. И как все мы будем на них веселиться.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Похлопать",
              success: {
                nextCard: "89",
              },
            },
            left: {
              text: "Смотреть в окно",
              success: {
                nextCard: "86",
              },
            },
          },
          89: {
            id: "89",
            npcName: "",
            npcLine:
              "Многие в таверне приободрились и хлопают, кто-то даже подпевал. Бард низко кланяется.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Смотреть в окно",
              success: {
                nextCard: "86",
              },
            },
          },
          90: {
            id: "90",
            npcName: "Квакельдо",
            npcLine:
              "Бард Квакельдо к твоим услугам! Не желаешь ли профинансировать бедного артиста?",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "У меня нет",
              success: {
                nextCard: "91",
              },
            },
            left: {
              text: "Дать монетку",
              requirementsItems: ["coin"],
              success: {
                nextCard: "92",
                removeItem: "coin",
                stats: {
                  karma: 1,
                },
              },
            },
          },
          91: {
            id: "91",
            npcName: "Квакельдо",
            npcLine:
              "Видимо, тебе приходится хуже моего. Давай я угощу тебя ужином?",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Поужинать",
              success: {
                nextCard: "93",
              },
            },
            left: {
              text: "Уйти из таверны",
              success: {
                nextCard: "121",
              },
            },
          },
          92: {
            id: "92",
            npcName: "Квакельдо",
            npcLine:
              "Спасибо, добрый друг! Давай разделим её, отужинав вместе?",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Поужинать",
              success: {
                nextCard: "93",
              },
            },
            left: {
              text: "Уйти из таверны",
              success: {
                nextCard: "121",
              },
            },
          },
          93: {
            id: "93",
            npcName: "",
            npcLine:
              "Вы ужинаете, делясь историями из своей жизни. Квакельдо оплачивает твой ночлег в таверне. Сквозь сон ты слышишь, как он поёт для гостей, его голос убаюкивает встревоженный город.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Проснуться",
              success: {
                nextCard: "94",
              },
            },
          },
          94: {
            id: "94",
            npcName: "",
            npcLine:
              "Ты просыпаешься всё в той же таверне. Что делать? Может, уговорить барда взять тебя в ученики? Или поискать другие возможности?",
            background: "tavern",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Бард",
              requirements: {
                savvy: 12,
              },
              success: {
                nextCard: "95",
                stats: {
                  savvy: 2,
                },
              },
              failure: {
                nextCard: "97",
                stats: {
                  savvy: 1,
                },
              },
            },
            left: {
              text: "Бродить",
              success: {
                nextCard: "98",
              },
            },
          },
          95: {
            id: "95",
            npcName: "Квакельдо",
            npcLine:
              "Хорошо, дорогой друг, я стану твоим учителем! Отныне эта таверна — твой новый дом и школа.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Ура",
              success: {
                nextCard: "96",
              },
            },
          },
          96: {
            id: "96",
            npcName: "",
            npcLine:
              "С утра до ночи Квакельдо учит тебя. Твоя речь становится красивее и даже начинает получаться играть на лютне.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          97: {
            id: "97",
            npcName: "",
            npcLine: "Квакельдо тебе отказал, хоть и очень вежливо.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Бродить",
              success: {
                nextCard: "98",
              },
            },
          },
          98: {
            id: "98",
            npcName: "",
            npcLine:
              "Ты натыкаешься на лавку кузнеца. Либо можно постучаться в случайный дом. Вдруг кто-то захочет тебя приютить?",
            background: "alley",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Дом",
              success: {
                nextCard: "99",
              },
            },
            left: {
              text: "Лавка",
              success: {
                nextCard: "152",
              },
            },
          },
          99: {
            id: "99",
            npcName: "",
            npcLine:
              "Это оказался дом людей-ежей. Они кажутся доброжелательными и даже не против твоей компании.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Остаться",
              success: {
                nextCard: "33",
              },
            },
            left: {
              text: "Лавка",
              success: {
                nextCard: "152",
              },
            },
          },
          100: {
            id: "100",
            npcName: "",
            npcLine:
              "Таверна полна горюющих людей, которые находят утешение в песнях мужчины-лягушки с лютней.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Кто вы?",
              success: {
                nextCard: "90",
              },
            },
            left: {
              text: "Ночлег",
              requirementsItems: ["coin"],
              success: {
                nextCard: "101",
                removeItem: "coin",
              },
            },
          },
          101: {
            id: "101",
            npcName: "",
            npcLine:
              "Утро вечера мудреннее. Вы отдаёте монетку владельцу таверны, ужинаете и засыпаете.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Проснуться",
              success: {
                nextCard: "94",
              },
            },
          },
          102: {
            id: "102",
            npcName: "",
            npcLine:
              "По дороге ты видишь таверну и лавку кузнеца. Что выберешь?",
            background: "alley",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Таверна",
              success: {
                nextCard: "100",
              },
            },
            left: {
              text: "Лавка",
              success: {
                nextCard: "152",
              },
            },
          },
          103: {
            id: "103",
            npcName: "",
            npcLine:
              "Ты что-то испуганно бормочешь. Мужчина-лягушка успокаивающе похлопывает тебя по голове.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Оглядеться",
              success: {
                nextCard: "83",
              },
            },
          },
          104: {
            id: "104",
            npcName: "",
            npcLine:
              "Ты не позволяешь страху взять верх: «Обычный вторник, за исключением говорящего печенья и огромной стрекозы». Мужчина и ещё несколько людей смеются.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Улыбнуться",
              success: {
                nextCard: "105",
              },
            },
          },
          105: {
            id: "105",
            npcName: "Мужчина",
            npcLine:
              "Стрекозу я вижу уже чаще, чем свою зарплату. А вот говорящее печенье — это что-то новенькое!",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Рассказать",
              requirements: {
                savvy: 12,
              },
              success: {
                nextCard: "108",
                stats: {
                  savvy: 2,
                },
              },
              failure: {
                nextCard: "106",
                stats: {
                  savvy: 1,
                },
              },
            },
            left: {
              text: "Оглядеться",
              success: {
                nextCard: "83",
              },
            },
          },
          106: {
            id: "106",
            npcName: "",
            npcLine:
              "Большая часть людей теряют интерес к истории и начинают обсуждать Стрекозу. Но лягушка внимательно слушает.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Такие дела…",
              success: {
                nextCard: "107",
              },
            },
          },
          107: {
            id: "107",
            npcName: "Мужчина",
            npcLine:
              "Незавидная судьба, мой юный друг. Желаю вам, чтобы у этого приключения был счастливый конец!",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Оглядеться",
              success: {
                nextCard: "83",
              },
            },
          },
          108: {
            id: "108",
            npcName: "",
            npcLine:
              "Твою историю с интересом слушают. Мужчина начинает ирать на лютне, аккомпанируя твоему рассказу.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Такие дела…",
              success: {
                nextCard: "109",
              },
            },
          },
          109: {
            id: "109",
            npcName: "Мужчина",
            npcLine:
              "Какая история! Какой талант рассказчика! Я могу сделать из тебя первоклассного барда!",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Хорошо",
              success: {
                nextCard: "111",
              },
            },
            left: {
              text: "Не надо",
              success: {
                nextCard: "110",
              },
            },
          },
          110: {
            id: "110",
            npcName: "Мужчина",
            npcLine: "Понимаю, жизнь артиста тяжела. Это под силу немногим.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Оглядеться",
              success: {
                nextCard: "83",
              },
            },
          },
          111: {
            id: "111",
            npcName: "Мужчина",
            npcLine:
              "Меня зовут Квакельдо! Мой первый урок: барды живут либо в дороге, либо среди людей. Отн��не эта таверна — твой новый дом и школа.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Здорово",
              success: {
                nextCard: "111",
              },
            },
            left: {
              text: "Передумать",
              success: {
                nextCard: "110",
              },
            },
          },
          112: {
            id: "112",
            npcName: "",
            npcLine:
              "Квакельдо решает продемонстрировать мастерство. Он трогает струны своей лютни и начинает песнь о Стрекозе.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Слушать",
              success: {
                nextCard: "113",
              },
            },
          },
          113: {
            id: "113",
            npcName: "",
            npcLine:
              "Он поёт об ужасном чудовище, что мучает город многие дни. О том, как отважно с ним сражаются рыцари.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Слушать",
              success: {
                nextCard: "114",
              },
            },
          },
          114: {
            id: "114",
            npcName: "",
            npcLine:
              "О герое, что спасёт эти земли и станет новым королём. О пирах в его честь. И как все мы будем на них веселиться.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Похлопать",
              success: {
                nextCard: "115",
              },
            },
            left: {
              text: "Смотреть в окно",
              success: {
                nextCard: "116",
              },
            },
          },
          115: {
            id: "115",
            npcName: "",
            npcLine:
              "Многие в таверне приободрились и хлопают, кто-то даже подпевал. Бард низко кланяется.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Смотреть в окно",
              success: {
                nextCard: "116",
              },
            },
          },
          116: {
            id: "116",
            npcName: "",
            npcLine:
              "Стрекоза хищно маневрирует над городом и, не найдя новую жертву, улетает. Большая часть людей покидает таверну, но Квакельдо остаётся.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Уйти из таверны",
              success: {
                nextCard: "117",
              },
            },
          },
          117: {
            id: "117",
            npcName: "",
            npcLine:
              "На площади собираются люди-животные, пытаясь оказать помощь раненым. Однако не всем можно помочь. Страх сменяется отчаянием и горем.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Вернуться в таверну",
              success: {
                nextCard: "118",
              },
            },
            left: {
              text: "Бродить",
              success: {
                nextCard: "119",
              },
            },
          },
          118: {
            id: "118",
            npcName: "",
            npcLine:
              "Вы ужинаете с Квакельдо, делясь историями из своей жизни. Он оплачивает твой простой в таверне. Сквозь сон ты слышишь, как он поёт для гостей, его голос убаюкивает встревоженный город.",
            background: "tavern",
            npcs: [
              {
                imgSrc: "froggy",
              },
            ],
            right: {
              text: "Проснуться",
              success: {
                nextCard: "96",
              },
            },
          },
          119: {
            id: "119",
            npcName: "",
            npcLine:
              "Вокруг дома и лавки. Пора возвращаться в таверну… Или бросить идею стать бардом?",
            background: "alley",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Вернуться в таверну",
              success: {
                nextCard: "118",
              },
            },
            left: {
              text: "Не возвращаться",
              success: {
                nextCard: "120",
              },
            },
          },
          120: {
            id: "120",
            npcName: "",
            npcLine:
              "В поисках ночлега ты натыкаешься на ещё открытую лавку кузнеца. Либо можно постучать в чей-нибудь дом.",
            background: "alley",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Дом",
              success: {
                nextCard: "33",
              },
            },
            left: {
              text: "Лавка",
              success: {
                nextCard: "152",
              },
            },
          },
          121: {
            id: "121",
            npcName: "",
            npcLine:
              "На площади собираются люди-животные, пытаясь оказать помощь раненым. Однако не всем можно помочь. Страх сменяется отчаянием и горем.",
            background: "townsquare",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Бродить",
              success: {
                nextCard: "120",
              },
            },
          },
          122: {
            id: "122",
            npcName: "Мужчина",
            npcLine:
              "Повезло тебе, пацан, что не заметила!\n(Мужчина-кабан широко улыбается, положив руку тебе на плечо.)",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "О монстре",
              success: {
                nextCard: "123",
              },
            },
          },
          123: {
            id: "123",
            npcName: "Мужчина",
            npcLine:
              "Её хитин прочнее стали. Челюсти острее самого искусного клинка. А летит она быстрее ветра.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Откуда она?",
              success: {
                nextCard: "124",
              },
            },
            left: {
              text: "Почему улетела?",
              success: {
                nextCard: "125",
              },
            },
          },
          124: {
            id: "124",
            npcName: "Мужчина",
            npcLine:
              "Появилась с месяц назад. Почти всех королевских рыцарей перебила. Да ну ничего, справимся как-нибудь!",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Как победить?",
              success: {
                nextCard: "126",
              },
            },
            left: {
              text: "Почему улетела?",
              success: {
                nextCard: "125",
              },
            },
          },
          125: {
            id: "125",
            npcName: "Мужчина",
            npcLine: "Наверное, наелась.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Как победить?",
              success: {
                nextCard: "126",
              },
            },
            left: {
              text: "Кто вы?",
              success: {
                nextCard: "127",
              },
            },
          },
          126: {
            id: "125",
            npcName: "Мужчина",
            npcLine:
              "Знал, уже бы с ней разобрался. Даже не думай об этом, малой: живее будешь. Не детское это дело.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Кто вы?",
              success: {
                nextCard: "127",
              },
            },
          },
          127: {
            id: "127",
            npcName: "Бан",
            npcLine: "Я — Бан, местный кузнец. А ты откуда, паренёк?",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Сказать правду",
              success: {
                nextCard: "128",
                stats: {
                  karma: 1,
                },
              },
            },
            left: {
              text: "Соврать",
              requirements: {
                savvy: 12,
              },
              success: {
                nextCard: "142",
                stats: {
                  savvy: 2,
                },
              },
              failure: {
                nextCard: "140",
                stats: {
                  savvy: 1,
                },
              },
            },
          },
          128: {
            id: "128",
            npcName: "",
            npcLine:
              "Ты рассказываешь свою историю. Бан слушает тебя с доброй улыбкой.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Такие вот дела…",
              success: {
                nextCard: "129",
              },
            },
          },
          129: {
            id: "129",
            npcName: "Бан",
            npcLine:
              "Сам не знаю почему, но я тебе верю. Так ты, получается, волшебник?",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Попробовать",
              success: {
                nextCard: "130",
                stats: {
                  magic: 1,
                },
              },
            },
            left: {
              text: "Нет",
              success: {
                nextCard: "132",
              },
            },
          },
          130: {
            id: "130",
            npcName: "",
            npcLine:
              "К своему удивлению, у тебя получается сотворить сияние в руке. Неужели это правда? Ты волшебник?",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Получилось!",
              success: {
                nextCard: "131",
              },
            },
          },
          131: {
            id: "131",
            npcName: "Бан",
            npcLine:
              "Сделаю вид, что не видел этого. И не советую тебе говорить кому-нибудь. У нас в городе волшебников не жалуют.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Почему?",
              success: {
                nextCard: "133",
              },
            },
          },
          132: {
            id: "132",
            npcName: "Бан",
            npcLine:
              "Ну и хорошо: у нас волшебники не водятся, их не особо жалуют.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Почему?",
              success: {
                nextCard: "133",
              },
            },
          },
          133: {
            id: "133",
            npcName: "Бан",
            npcLine:
              "Зависть, что же ещё. Магии не научишься… она либо есть, либо нет.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Понял",
              success: {
                nextCard: "134",
              },
            },
            left: {
              text: "Это неправильно",
              success: {
                nextCard: "135",
                stats: {
                  karma: 1,
                },
              },
            },
          },
          134: {
            id: "134",
            npcName: "Бан",
            npcLine: "Вот и отлично! Тебе есть, где переночевать, малой?",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "У меня нет дома",
              success: {
                nextCard: "136",
              },
            },
            left: {
              text: "Соврать",
              success: {
                nextCard: "148",
              },
            },
          },
          135: {
            id: "135",
            npcName: "Бан",
            npcLine:
              "Согласен, но таковы нынче люди. Тебе есть, где переночевать, малой?",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "У меня нет дома",
              success: {
                nextCard: "136",
              },
            },
            left: {
              text: "Соврать",
              success: {
                nextCard: "148",
              },
            },
          },
          136: {
            id: "136",
            npcName: "Бан",
            npcLine:
              "Тогда милости прошу ко мне в берлогу. Мягкие перина не обещаю, но готовлю я вкусно!",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Просто так?",
              success: {
                nextCard: "137",
              },
            },
            left: {
              text: "Отказаться",
              success: {
                nextCard: "148",
              },
            },
          },
          137: {
            id: "137",
            npcName: "Бан",
            npcLine: "Тебе пришлось нелегко, пацан. Я буду рад помочь.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Согласиться",
              success: {
                nextCard: "138",
              },
            },
            left: {
              text: "Отказаться",
              success: {
                nextCard: "148",
              },
            },
          },
          138: {
            id: "138",
            npcName: "",
            npcLine:
              "Ты обустраиваешься в большом каменном доме Бана. Огромная кухня полна разных котелков, сковородок и приправ. И он действительно отлично готовит.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Отдохнуть",
              success: {
                nextCard: "139",
              },
            },
          },
          139: {
            id: "139",
            npcName: "",
            npcLine:
              "Тебе хорошо живётся у Бана. Он не просит ничего взамен и только рад т��оей компании. Чем займешься в свободное время?",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          140: {
            id: "140",
            npcName: "",
            npcLine:
              "Ты притворяешься обычным путешественником. Выходит не очень складно. Бан, кажется, не заметил.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Такие вот дела…",
              success: {
                nextCard: "141",
              },
            },
          },
          141: {
            id: "141",
            npcName: "Бан",
            npcLine: "Тебе есть где ночевать, юный путешественник?",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "У меня нет дома",
              success: {
                nextCard: "136",
              },
            },
            left: {
              text: "Соврать",
              success: {
                nextCard: "148",
              },
            },
          },
          142: {
            id: "142",
            npcName: "",
            npcLine:
              "Ты врёшь про свои путешествия, получается так складно, что ты и сам себе почти поверил.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Такие вот дела…",
              success: {
                nextCard: "143",
              },
            },
          },
          143: {
            id: "143",
            npcName: "Бан",
            npcLine:
              "Не думал, что встречу такого юного путешественника. Заходи ко мне в лавку, если что-нибудь понадобится!\n(Он уходит)",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Погодите",
              success: {
                nextCard: "144",
              },
            },
            left: {
              text: "Бродить по улицам",
              success: {
                nextCard: "146",
              },
            },
          },
          144: {
            id: "144",
            npcName: "",
            npcLine: "Бан терпеливо улыбается и ждёт.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "У меня нет дома",
              success: {
                nextCard: "149",
              },
            },
            left: {
              text: "Совет",
              success: {
                nextCard: "145",
              },
            },
          },
          145: {
            id: "145",
            npcName: "Бан",
            npcLine:
              "Совет? Почувствуешь ветер, прячься. Лучше быть живым трусом, чем мёртвым храбрецом.\n(Улыбается)",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Бродить по улицам",
              success: {
                nextCard: "146",
              },
            },
          },
          146: {
            id: "146",
            npcName: "",
            npcLine: "Ты устал и в отчаянии стучишься кому-то в дом…",
            background: "alley",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Помогите",
              success: {
                nextCard: "147",
              },
            },
          },
          147: {
            id: "147",
            npcName: "",
            npcLine:
              "Это оказался дом людей-ежей. Они кажутся доброжелательными и даже не против твоей компании.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "",
              },
            ],
            right: {
              text: "Спать…",
              success: {
                nextCard: "33",
              },
            },
          },
          148: {
            id: "148",
            npcName: "Бан",
            npcLine:
              "Если что нужно будет, заходи вко мне в лавку. Был рад знакомству, парень!",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Бродить по улицам",
              success: {
                nextCard: "146",
              },
            },
          },
          149: {
            id: "149",
            npcName: "Бан",
            npcLine: "Можешь пожить у меня в лавке взамен на работу.",
            background: "townandriver",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Хорошо",
              success: {
                nextCard: "150",
              },
            },
            left: {
              text: "Бродить по улицам",
              success: {
                nextCard: "146",
              },
            },
          },
          150: {
            id: "150",
            npcName: "",
            npcLine:
              "В лавке Бана много товаров: вёдра и гвозди, мечи и щиты. Есть тут и вещи, незнакомые тебе. В подвале стоит кузня.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Работать",
              success: {
                nextCard: "151",
                stats: {
                  dexterity: 1,
                },
              },
            },
          },
          151: {
            id: "151",
            npcName: "",
            npcLine:
              "Ты убираешься и помогаешь продавать товары. Взамен получаешь еду и ночлег на сене в кузне. Тяжело, но ты справляешься.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Продолжение следует",
              success: {
                nextLevel: "level1",
              },
            },
          },
          152: {
            id: "152",
            npcName: "",
            npcLine:
              "Ты заходишь в лавку кузнеца. Здесь много товаров: вёдра и гвозди, мечи и щиты. Есть и вещи, незнакомые тебе. Мужчина-кабан за прилавком широко улыбается.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Слушать",
              success: {
                nextCard: "153",
              },
            },
          },
          153: {
            id: "153",
            npcName: "Бан",
            npcLine: "Добро пожаловать в лавку кузнеца Бана! Чем могу помочь?",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "Ночлег",
              success: {
                nextCard: "154",
              },
            },
          },
          154: {
            id: "154",
            npcName: "Бан",
            npcLine: "Можешь пожить у меня в лавке взамен на работу.",
            background: "insidehouse",
            npcs: [
              {
                imgSrc: "ban",
              },
            ],
            right: {
              text: "У меня нет выбора…",
              success: {
                nextCard: "150",
              },
            },
          },
        },
      },
    ],
  },
];
