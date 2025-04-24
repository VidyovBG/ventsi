// Данни за страните, разделени на групи
const countriesGroupA = [
    "Австрия; Австрия; Виена; Виена; Евро<br>(EUR); Немски; 9 027 999 души<br>(към 2022г.); 83 879 кв. км; https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg; https://bg.wikipedia.org/wiki/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B8%D1%8F",

    "Азербайджан; Азербайджан; Баку; Баку; Манат<br>(AZN); Азербайджански; 10 223 000 души; 86 600 кв. км; https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg; https://bg.wikipedia.org/wiki/%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD",

    "Албания; Албания; Тирана; Тирана; Лек<br>(ALL); албански; 2 793 592 души (към 2022г.); 28 748 кв. км; https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg; https://bg.wikipedia.org/wiki/%D0%90%D0%BB%D0%B1%D0%B0%D0%BD%D0%B8%D1%8F",

    "Андора; Андора; Андора ла Веля; Андора ла Веля; Евро<br>(EUR); каталонски; 79 535 души<br>(към 2021г.); 468 кв. км; https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg; https://bg.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D0%BE%D1%80%D0%B0",


];

const countriesGroupB = [
    "Беларус; Беларус; Минск; Минск; Беларуска рубла<br>(BYN); беларуски,<br>руски; 9 255 524 души<br>(към 2021г.); 207 595 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1920px-Flag_of_Belarus.svg.png; https://bg.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81",

    "Белгия; Белгия; Брюксел; Брюксел; Евро<br>(EUR); нидерландски,<br>френски,<br>немски; 11 584 008 души<br>(към 2022г.); 30 689 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1024px-Flag_of_Belgium.svg.png; https://bg.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B3%D0%B8%D1%8F",

    "Босна и Херцеговина; Босна и Херцеговина; Сараево; Сараево; Конвертируема марка<br>(BAM); бошняшки,<br>хърватски,<br>сръбски; 3 475 000 души<br>(към 2020г.); 51 129 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1920px-Flag_of_Bosnia_and_Herzegovina.svg.png; https://bg.wikipedia.org/wiki/%D0%91%D0%BE%D1%81%D0%BD%D0%B0_%D0%B8_%D0%A5%D0%B5%D1%80%D1%86%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BD%D0%B0",

    "България; България; София; София; Български лев (BGN); Български; 6 900 000 души<br>(към 2022г.); 110 994 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1920px-Flag_of_Bulgaria.svg.png; https://bg.wikipedia.org/wiki/%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D0%B8%D1%8F",


];



const countriesGroupV = [
    "Ватикан; Ватикан; Ватикан; Ватикан; Евро<br>(EUR); италиански; 825 души<br>(към 2019г.); 0,44 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/1024px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png; https://bg.wikipedia.org/wiki/%D0%92%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%D0%BD",

    "Великобритания; Великобритания; Лондон; Лондон; Британска лира<br>(GBP); английски; 9 027 999 души<br>(към 2024г.); 209 331 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1920px-Flag_of_the_United_Kingdom_%283-5%29.svg.png; https://bg.wikipedia.org/wiki/%D0%9E%D0%B1%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BE_%D0%BA%D1%80%D0%B0%D0%BB%D1%81%D1%82%D0%B2%D0%BE_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F_%D0%B8_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0_%D0%98%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F",

];


const countriesGroupG = [
    "Германия; Германия; Берлин; Берлин; Евро<br>(EUR); немски; 83 222 442 души<br>(към 2021г.); 357 386 кв. км; https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg; https://bg.wikipedia.org/wiki/%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F",

    "Грузия; Грузия; Тбилиси; Тбилиси; Грузинско лари<br>(GEL); грузински; 3 688 647 души<br>(към 2022г.); 69 700 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png; https://bg.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F",


    "Гърция; Гърция; Атина; Атина; Евро<br>(EUR); гръцки; 10 384 971 души<br>(към 2022г.); 131 957 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/800px-Flag_of_Greece.svg.png; https://bg.wikipedia.org/wiki/%D0%93%D1%8A%D1%80%D1%86%D0%B8%D1%8F",
];


const countriesGroupD = [
    "Дания; Дания; Копенхаген; Копенхагенм; Датска крона<br>(DKK); датски; 5 873 420 души<br>(към 2022г.); 42 925,46 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png; https://bg.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%B8%D1%8F",
];


const countriesGroupE = [
    "Естония; Естония; Талин; Талин; Датска крона<br>(DKK); естонски; 1 357 739 души<br>(към 2023г.); 45 339 кв. км;https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/1920px-Flag_of_Estonia.svg.png; https://bg.wikipedia.org/wiki/%D0%95%D1%81%D1%82%D0%BE%D0%BD%D0%B8%D1%8F",
];


const countriesGroupI = [
    "Ирландия; Ирландия; Дъблин; Дъблин; Евро<br>(EUR); ирландски,<br>английски; 5 123 536 души<br>(към 2022г.); 70 273 кв. км; https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg; https://bg.wikipedia.org/wiki/%D0%98%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F",

    "Исландия; Исландия; Рейкявик; Рейкявик; Исландска крона<br>(ISK); исландски; 347 186 души<br>(към 2021г.);103 004 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1200px-Flag_of_Iceland.svg.png; https://bg.wikipedia.org/wiki/%D0%98%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F",

    "Испания; Испания; Мадрид; Мадрид; Евро<br>(EUR); испански; 47 450 795 души<br>(към 2020г.); 505 990 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png; https://bg.wikipedia.org/wiki/%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F",

    "Италия; Италия; Рим; Рим; Евро<br>(EUR); италиански; 59 030 133 души<br>(към 2022г.); 301 230 кв. км; https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg; https://bg.wikipedia.org/wiki/%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F"
];

const countriesGroupK = [
    "Кипър; Кипър; Никозия; Никозия; Евро<br>(EUR); гръцки,<br>турски; 1 263 271 души<br>(към 2023г.); 9 251 кв. км; https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg; https://bg.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0_%D0%9A%D0%B8%D0%BF%D1%8A%D1%80",

    "Косово; Косово; Прищина; Прищина; Евро<br>(EUR); албански,<br>сръбски; 1 935 259 души<br>(към 2021г.); 10 909 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/1280px-Flag_of_Kosovo.svg.png; https://bg.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D0%BE%D0%B2%D0%BE"
];

const countriesGroupL = [
    "Латвия; Латвия; Рига; Рига; Евро<br>(EUR); латвийски; 1 907 675 души<br>(към 2020г.); 64 589 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/800px-Flag_of_Latvia.svg.png; https://bg.wikipedia.org/wiki/%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F",

    "Литва; Литва; Вилнюс; Вилнюс; Евро<br>(EUR); литовски; 2 795 680 души<br>(към 2021г.); 65 300 кв. км; https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg; https://bg.wikipedia.org/wiki/%D0%9B%D0%B8%D1%82%D0%B2%D0%B0",

    "Лихтенщайн; Лихтенщайн; Вадуц; Шаан; Швейцарски франк<br>(CHF); немски; 38 387 души<br>(към 2022г.); 160 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1920px-Flag_of_Liechtenstein.svg.png; https://bg.wikipedia.org/wiki/%D0%9B%D0%B8%D1%85%D1%82%D0%B5%D0%BD%D1%89%D0%B0%D0%B9%D0%BD",

    "Люксембург; Люксембург; Люксембург; Люксембург; Евро<br>(EUR); люксембургски,<br>френски,<br>немски; 645 397 души<br>(към 2021г.); 2 586,4 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1920px-Flag_of_Luxembourg.svg.png; https://bg.wikipedia.org/wiki/%D0%9B%D1%8E%D0%BA%D1%81%D0%B5%D0%BC%D0%B1%D1%83%D1%80%D0%B3"
];

const countriesGroupM = [
    "Малта; Малта; Валета; Биркиркара; Евро<br>(EUR); малтийски,<br>английски; 516 100 души<br>(към 2021г.); 316 кв. км; https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg; https://bg.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D1%82%D0%B0",

    "Молдова; Молдова; Кишинев; Кишинев; Молдовска лея<br>(MDL); румънски; 2 603 813 души<br>(към 2022г.); 33 851 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/1200px-Flag_of_Moldova.svg.png; https://bg.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BB%D0%B4%D0%BE%D0%B2%D0%B0",

    "Монако; Монако; Монако; Монте Карло; Евро<br>(EUR); френски; 38 300 души<br>(към 2019г.); 2,02 кв. км; https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg; https://bg.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D0%BA%D0%BE"
];

const countriesGroupN = [
    "Нидерландия; Нидерландия; Амстердам; Амстердам; Евро<br>(EUR); нидерландски; 17 731 700 души<br>(към 2022г.); 41 543 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/640px-Flag_of_the_Netherlands.svg.png; https://bg.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B4%D0%B5%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F",

    "Норвегия; Норвегия; Осло; Осло; Норвежка крона<br>(NOK); норвежки,<br>саамски; 5 488 984 души<br>(към 2023г.); 385 207 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/640px-Flag_of_Norway.svg.png; https://bg.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D1%8F"
];

const countriesGroupP = [
    "Полша; Полша; Варшава; Варшава; Полска злота<br>(PLN); полски; 38 179 800 души<br>(към 2021г.); 312 683 кв. км; https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg; https://bg.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%88%D0%B0",

    "Португалия; Португалия; Лисабон; Лисабон; Евро<br>(EUR); португалски; 10 352 042 души<br>(към 2021г.); 92 212 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png; https://bg.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D1%82%D1%83%D0%B3%D0%B0%D0%BB%D0%B8%D1%8F"
];

const countriesGroupR = [
    "Румъния; Румъния; Букурещ; Букурещ; Румънска лея<br>(RON); румънски; 19 186 201 души<br>(към 2021г.); 238 397 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1920px-Flag_of_Chad.svg.png; https://bg.wikipedia.org/wiki/%D0%A0%D1%83%D0%BC%D1%8A%D0%BD%D0%B8%D1%8F",

    "Русия; Русия; Москва; Москва; Руска рубла<br>(RUB); руски; 145 478 097 души<br>(към 2022г.); 17 125 191 кв. км; https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg; https://bg.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D0%B8%D1%8F"
];

const countriesGroupS = [
    "Сан Марино; Сан Марино; Сан Марино; Серавале; Евро<br>(EUR); италиански; 33 600 души<br>(към 2021г.); 61,2 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/1024px-Flag_of_San_Marino.svg.png; https://bg.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD_%D0%9C%D0%B0%D1%80%D0%B8%D0%BD%D0%BE",

    "Северна Македония; Северна Македония; Скопие; Скопие; Македонски денар<br>(MKD); македонски,<br>албански; 1 836 713 души<br>(към 2021г.); 25 713 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/1200px-Flag_of_North_Macedonia.svg.png; https://bg.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0_%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%8F",

    "Словакия; Словакия; Братислава; Братислава; Евро<br>(EUR); словашки; 5 460 185 души<br>(към 2022г.); 49 035 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1200px-Flag_of_Slovakia.svg.png; https://bg.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D0%BA%D0%B8%D1%8F",

    "Словения; Словения; Любляна; Любляна; Евро<br>(EUR); словенски; 2 108 708 души<br>(към 2021г.); 20 271 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png; https://bg.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D1%8F",

    "Сърбия; Сърбия; Белград; Белград; Сръбски динар<br>(RSD); сръбски; 6 690 887 души<br>(към 2022г.); 77 474 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1200px-Flag_of_Serbia.svg.png; https://bg.wikipedia.org/wiki/%D0%A1%D1%8A%D1%80%D0%B1%D0%B8%D1%8F"
];

const countriesGroupT = [
    "Турция; Турция; Атина; Истанбул; Турска лира<br>(TRY); турски; 84 680 273 души<br>(към 2021г.); 783 356 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png; https://bg.wikipedia.org/wiki/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F"
];

const countriesGroupU = [
    "Украйна; Украйна; Киев; Киев; Гривна<br>(UAH); украински; 41 167 336 души<br>(към 2022г.); 603 629 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1920px-Flag_of_Ukraine.svg.png; https://bg.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D0%B9%D0%BD%D0%B0",

    "Унгария; Унгария; Будапеща; Будапеща; Форинт<br>(HUF); унгарски; 9 730 000 души<br>(към 2021г.); 93 030 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1920px-Flag_of_Hungary.svg.png; https://bg.wikipedia.org/wiki/%D0%A3%D0%BD%D0%B3%D0%B0%D1%80%D0%B8%D1%8F"
];

const countriesGroupF = [
    "Фарьорски острови; Фарьорски острови; Торсхавн; Торсхавн; Фарьорска крона<br>(DKK); фарьорски,<br>датски; 52 110 души<br>(към 2020г.); 1 399 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/1200px-Flag_of_the_Faroe_Islands.svg.png; https://bg.wikipedia.org/wiki/%D0%A4%D0%B0%D1%80%D1%8C%D0%BE%D1%80%D1%81%D0%BA%D0%B8_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B8",

    "Финландия; Финландия; Хелзинки; Хелзинки; Евро<br>(EUR); фински,<br>шведски; 5 528 737 души<br>(към 2020г.); 338 424 кв. км; https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg; https://bg.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BD%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F",

    "Франция; Франция; Париж; Париж; Евро<br>(EUR); френски; 67 413 000 души<br>(към 2021г.); 643 801 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/105px-Flag_of_France.svg.png; https://bg.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F"
];

const countriesGroupH = [
    "Хърватия; Хърватия; Загреб; Загреб; Евро<br>(EUR); хърватски; 3 888 529 души<br>(към 2021г.); 56 594 кв. км; https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg; https://bg.wikipedia.org/wiki/%D0%A5%D1%8A%D1%80%D0%B2%D0%B0%D1%82%D0%B8%D1%8F"
];

const countriesGroupCH = [
    "Черна гора; Черна гора; Подгорица; Подгорица; Евро<br>(EUR); черногорски; 620 739 души<br>(към 2021г.); 13 812 кв. км; https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg; https://bg.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%B0_%D0%B3%D0%BE%D1%80%D0%B0"
];

const countriesGroupSH = [
    "Швейцария; Швейцария; Берн; Цюрих; Швейцарски франк<br>(CHF); немски,<br>италиански,<br>френски,<br>романш; 8 636 896 души<br>(към 2020г.); 41 285 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1024px-Flag_of_Switzerland.svg.png; https://bg.wikipedia.org/wiki/%D0%A8%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D0%B8%D1%8F",

    "Швеция; Швеция; Стокхолм; Стокхолм; Шведска крона<br>(SEK); шведски; 10 402 070 души<br>(към 2021г.); 450 295 кв. км; https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png; https://bg.wikipedia.org/wiki/%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F"
];





// Функция за генериране на HTML съдържание за всяка държава
function generateCountryInfo(countryData) {
    const parts = countryData.split(";");

    return `
     <div class="div">
         <h1><strong>${parts[0]}</strong></h1>
         <img src="${parts[8]}" width="250px" height="150px" title="Знаме">
         <a href="${parts[9]}" target="_blank">
             <img src="images/share-symbol.png" alt="Сподели" id="link-btn">
         </a>
         <br>
         <div class="table-container">
            <h2 class="table-heading"></h2>
             <table>
                 <thead>
                     <tr>
                         <th>държава</th>
                         <th>столица</th>
                         <th>най-голям град</th>
                         <th>валута</th>
                         <th>официален език</th>
                         <th>население</th>
                         <th>площ</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td data-heading="държава">${parts[1]}</td>
                         <td data-heading="столица">${parts[2]}</td>
                         <td data-heading="най-голям град">${parts[3]}</td>
                         <td data-heading="валута">${parts[4]}</td>
                         <td data-heading="официален език">${parts[5]}</td>
                         <td data-heading="население">${parts[6]}</td>
                         <td data-heading="площ">${parts[7]}</td>
                     </tr>
                 </tbody>
             </table>
         </div>
     </div>
 `;
}


// Функция за добавяне на информация за държавите в група A
function loadCountriesGroupA() {
    const container = document.getElementById('countries-container');
    countriesGroupA.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Б
function loadCountriesGroupB() {
    const container = document.getElementById('countries-container');
    countriesGroupB.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група В
function loadCountriesGroupV() {
    const container = document.getElementById('countries-container');
    countriesGroupV.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Г
function loadCountriesGroupG() {
    const container = document.getElementById('countries-container');
    countriesGroupG.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Д
function loadCountriesGroupD() {
    const container = document.getElementById('countries-container');
    countriesGroupD.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Е
function loadCountriesGroupE() {
    const container = document.getElementById('countries-container');
    countriesGroupE.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група И
function loadCountriesGroupI() {
    const container = document.getElementById('countries-container');
    countriesGroupI.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група К
function loadCountriesGroupK() {
    const container = document.getElementById('countries-container');
    countriesGroupK.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Л
function loadCountriesGroupL() {
    const container = document.getElementById('countries-container');
    countriesGroupL.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група М
function loadCountriesGroupM() {
    const container = document.getElementById('countries-container');
    countriesGroupM.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Н
function loadCountriesGroupN() {
    const container = document.getElementById('countries-container');
    countriesGroupN.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група П
function loadCountriesGroupP() {
    const container = document.getElementById('countries-container');
    countriesGroupP.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Р
function loadCountriesGroupR() {
    const container = document.getElementById('countries-container');
    countriesGroupR.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група С
function loadCountriesGroupS() {
    const container = document.getElementById('countries-container');
    countriesGroupS.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Т
function loadCountriesGroupT() {
    const container = document.getElementById('countries-container');
    countriesGroupT.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група У
function loadCountriesGroupU() {
    const container = document.getElementById('countries-container');
    countriesGroupU.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Ф
function loadCountriesGroupF() {
    const container = document.getElementById('countries-container');
    countriesGroupF.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Х
function loadCountriesGroupH() {
    const container = document.getElementById('countries-container');
    countriesGroupH.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Ч
function loadCountriesGroupCH() {
    const container = document.getElementById('countries-container');
    countriesGroupCH.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}

// Функция за добавяне на информация за държавите в група Ш
function loadCountriesGroupSH() {
    const container = document.getElementById('countries-container');
    countriesGroupSH.forEach(countryData => {
        container.innerHTML += generateCountryInfo(countryData);
    });
}






// В зависимост от текущия файл, зареждаме различни данни
const fileName = window.location.pathname.split("/").pop(); // Взима името на файла

switch (fileName) {
    case "a.html":
        window.onload = loadCountriesGroupA;
        break;
    case "b.html":
        window.onload = loadCountriesGroupB;
        break;
    case "v.html":
        window.onload = loadCountriesGroupV;
        break;
    case "g.html":
        window.onload = loadCountriesGroupG;
        break;
    case "d.html":
        window.onload = loadCountriesGroupD;
        break;
    case "e.html":
        window.onload = loadCountriesGroupE;
        break;
    case "i.html":
        window.onload = loadCountriesGroupI;
        break;
    case "k.html":
        window.onload = loadCountriesGroupK;
        break;
    case "l.html":
        window.onload = loadCountriesGroupL;
        break;
    case "m.html":
        window.onload = loadCountriesGroupM;
        break;
    case "n.html":
        window.onload = loadCountriesGroupN;
        break;
    case "p.html":
        window.onload = loadCountriesGroupP;
        break;
    case "r.html":
        window.onload = loadCountriesGroupR;
        break;
    case "s.html":
        window.onload = loadCountriesGroupS;
        break;
    case "t.html":
        window.onload = loadCountriesGroupT;
        break;
    case "u.html":
        window.onload = loadCountriesGroupU;
        break;
    case "f.html":
        window.onload = loadCountriesGroupF;
        break;
    case "h.html":
        window.onload = loadCountriesGroupH;
        break;
    case "ch.html":
        window.onload = loadCountriesGroupCH;
        break;
    case "sh.html":
        window.onload = loadCountriesGroupSH;
        break;
}






