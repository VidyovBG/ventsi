// Функция за търсене на химичен елемент
function NameriHimElement() {
  // Вземете атомния номер (Z) от входното поле
  const z = parseInt(document.getElementById("nomer-him-element").value);

  // Таблица с информация за химичните елементи на български език
  const periodicTable = [
    { atomicNumber: 1, symbol: "H", name: "Водород" },
    { atomicNumber: 2, symbol: "He", name: "Хелий" },
    { atomicNumber: 3, symbol: "Li", name: "Литий" },
    { atomicNumber: 4, symbol: "Be", name: "Берилий" },
    { atomicNumber: 5, symbol: "B", name: "Бор" },
    { atomicNumber: 6, symbol: "C", name: "Въглерод" },
    { atomicNumber: 7, symbol: "N", name: "Азот" },
    { atomicNumber: 8, symbol: "O", name: "Кислород" },
    { atomicNumber: 9, symbol: "F", name: "Флуор" },
    { atomicNumber: 10, symbol: "Ne", name: "Неон" },
    { atomicNumber: 11, symbol: "Na", name: "Натрий" },
    { atomicNumber: 12, symbol: "Mg", name: "Магнезий" },
    { atomicNumber: 13, symbol: "Al", name: "Алуминий" },
    { atomicNumber: 14, symbol: "Si", name: "Силиций" },
    { atomicNumber: 15, symbol: "P", name: "Фосфор" },
    { atomicNumber: 16, symbol: "S", name: "Сяра" },
    { atomicNumber: 17, symbol: "Cl", name: "Хлор" },
    { atomicNumber: 18, symbol: "Ar", name: "Аргон" },
    { atomicNumber: 19, symbol: "K", name: "Калий" },
    { atomicNumber: 20, symbol: "Ca", name: "Калций" },
    { atomicNumber: 21, symbol: "Sc", name: "Скандий" },
    { atomicNumber: 22, symbol: "Ti", name: "Титан" },
    { atomicNumber: 23, symbol: "V", name: "Ванадий" },
    { atomicNumber: 24, symbol: "Cr", name: "Хром" },
    { atomicNumber: 25, symbol: "Mn", name: "Марганец" },
    { atomicNumber: 26, symbol: "Fe", name: "Желязо" },
    { atomicNumber: 27, symbol: "Co", name: "Кобалт" },
    { atomicNumber: 28, symbol: "Ni", name: "Никел" },
    { atomicNumber: 29, symbol: "Cu", name: "Мед" },
    { atomicNumber: 30, symbol: "Zn", name: "Цинк" },
    { atomicNumber: 31, symbol: "Ga", name: "Галий" },
    { atomicNumber: 32, symbol: "Ge", name: "Германий" },
    { atomicNumber: 33, symbol: "As", name: "Арсен" },
    { atomicNumber: 34, symbol: "Se", name: "Селен" },
    { atomicNumber: 35, symbol: "Br", name: "Бром" },
    { atomicNumber: 36, symbol: "Kr", name: "Криптон" },
    { atomicNumber: 37, symbol: "Rb", name: "Рубидий" },
    { atomicNumber: 38, symbol: "Sr", name: "Стронций" },
    { atomicNumber: 39, symbol: "Y", name: "Итрий" },
    { atomicNumber: 40, symbol: "Zr", name: "Цирконий" },
    { atomicNumber: 41, symbol: "Nb", name: "Ниобий" },
    { atomicNumber: 42, symbol: "Mo", name: "Молибден" },
    { atomicNumber: 43, symbol: "Tc", name: "Технеций" },
    { atomicNumber: 44, symbol: "Ru", name: "Рутений" },
    { atomicNumber: 45, symbol: "Rh", name: "Родий" },
    { atomicNumber: 46, symbol: "Pd", name: "Паладий" },
    { atomicNumber: 47, symbol: "Ag", name: "Сребро" },
    { atomicNumber: 48, symbol: "Cd", name: "Кадмий" },
    { atomicNumber: 49, symbol: "In", name: "Индий" },
    { atomicNumber: 50, symbol: "Sn", name: "Олово" },
    { atomicNumber: 51, symbol: "Sb", name: "Антимон" },
    { atomicNumber: 52, symbol: "Te", name: "Телур" },
    { atomicNumber: 53, symbol: "I", name: "Йод" },
    { atomicNumber: 54, symbol: "Xe", name: "Ксенон" },
    { atomicNumber: 55, symbol: "Cs", name: "Цезий" },
    { atomicNumber: 56, symbol: "Ba", name: "Барий" },
    { atomicNumber: 57, symbol: "La", name: "Лантаний" },
    { atomicNumber: 58, symbol: "Ce", name: "Церий" },
    { atomicNumber: 59, symbol: "Pr", name: "Празеодим" },
    { atomicNumber: 60, symbol: "Nd", name: "Неодим" },
    { atomicNumber: 61, symbol: "Pm", name: "Прометий" },
    { atomicNumber: 62, symbol: "Sm", name: "Самарий" },
    { atomicNumber: 63, symbol: "Eu", name: "Европий" },
    { atomicNumber: 64, symbol: "Gd", name: "Гадолиний" },
    { atomicNumber: 65, symbol: "Tb", name: "Тербий" },
    { atomicNumber: 66, symbol: "Dy", name: "Диспрозий" },
    { atomicNumber: 67, symbol: "Ho", name: "Холмий" },
    { atomicNumber: 68, symbol: "Er", name: "Ербий" },
    { atomicNumber: 69, symbol: "Tm", name: "Тулий" },
    { atomicNumber: 70, symbol: "Yb", name: "Иттербий" },
    { atomicNumber: 71, symbol: "Lu", name: "Лютетий" },
    { atomicNumber: 72, symbol: "Hf", name: "Хафний" },
    { atomicNumber: 73, symbol: "Ta", name: "Тантал" },
    { atomicNumber: 74, symbol: "W", name: "Волфрам" },
    { atomicNumber: 75, symbol: "Re", name: "Рений" },
    { atomicNumber: 76, symbol: "Os", name: "Осмий" },
    { atomicNumber: 77, symbol: "Ir", name: "Иридий" },
    { atomicNumber: 78, symbol: "Pt", name: "Платина" },
    { atomicNumber: 79, symbol: "Au", name: "Злато" },
    { atomicNumber: 80, symbol: "Hg", name: "Ртуть" },
    { atomicNumber: 81, symbol: "Tl", name: "Талий" },
    { atomicNumber: 82, symbol: "Pb", name: "Олово" },
    { atomicNumber: 83, symbol: "Bi", name: "Висмут" },
    { atomicNumber: 84, symbol: "Po", name: "Полоний" },
    { atomicNumber: 85, symbol: "At", name: "Астат" },
    { atomicNumber: 86, symbol: "Rn", name: "Радон" },
    { atomicNumber: 87, symbol: "Fr", name: "Франций" },
    { atomicNumber: 88, symbol: "Ra", name: "Радий" },
    { atomicNumber: 89, symbol: "Ac", name: "Актиний" },
    { atomicNumber: 90, symbol: "Th", name: "Торий" },
    { atomicNumber: 91, symbol: "Pa", name: "Протактиний" },
    { atomicNumber: 92, symbol: "U", name: "Ураний" },
    { atomicNumber: 93, symbol: "Np", name: "Нептуний" },
    { atomicNumber: 94, symbol: "Pu", name: "Плутоний" },
    { atomicNumber: 95, symbol: "Am", name: "Америций" },
    { atomicNumber: 96, symbol: "Cm", name: "Кюрий" },
    { atomicNumber: 97, symbol: "Bk", name: "Берклий" },
    { atomicNumber: 98, symbol: "Cf", name: "Калифорний" },
    { atomicNumber: 99, symbol: "Es", name: "Айнщайний" },
    { atomicNumber: 100, symbol: "Fm", name: "Фермий" },
    { atomicNumber: 101, symbol: "Md", name: "Менделевий" },
    { atomicNumber: 102, symbol: "No", name: "Нобелий" },
    { atomicNumber: 103, symbol: "Lr", name: "Лоуренсий" },
    { atomicNumber: 104, symbol: "Rf", name: "Рътерфордий" },
    { atomicNumber: 105, symbol: "Db", name: "Дубний" },
    { atomicNumber: 106, symbol: "Sg", name: "Сиборгий" },
    { atomicNumber: 107, symbol: "Bh", name: "Борий" },
    { atomicNumber: 108, symbol: "Hs", name: "Хасий" },
    { atomicNumber: 109, symbol: "Mt", name: "Майтнерий" },
    { atomicNumber: 110, symbol: "Ds", name: "Дармщатий" },
    { atomicNumber: 111, symbol: "Rg", name: "Рентгений" },
    { atomicNumber: 112, symbol: "Cn", name: "Коперниций" },
    { atomicNumber: 113, symbol: "Nh", name: "Нихоний" },
    { atomicNumber: 114, symbol: "Fl", name: "Флеровий" },
    { atomicNumber: 115, symbol: "Mc", name: "Московий" },
    { atomicNumber: 116, symbol: "Lv", name: "Ливерморий" },
    { atomicNumber: 117, symbol: "Ts", name: "Тенесин" },
    { atomicNumber: 118, symbol: "Og", name: "Оганесон" },
  ];

  // Търсене на химичния елемент по атомния номер
  for (let i = 0; i < periodicTable.length; i++) {
    if (periodicTable[i].atomicNumber === z) {
      // Намерен елемент
      document.getElementById("rezultat-him-element").value = periodicTable[i].name;
      return;
    }
  }

  // Ако атомният номер не е намерен, изведете съобщение за грешка
  document.getElementById("rezultat-him-element").value = "Няма такъв ХЕ";
}

// Функция за нулиране на резултата
function NameriHimElementNulirane() {
  document.getElementById("nomer-him-element").value = "";
  document.getElementById("rezultat-him-element").value = "";
}







const himichniElementi = {
  "водород": "1",
  "хелий": "2",
  "литий": "3",
  "берилий": "4",
  "бор": "5",
  "въглерод": "6",
  "азот": "7",
  "кислород": "8",
  "флуор": "9",
  "неон": "10",
  "натрий": "11",
  "магнезий": "12",
  "алуминий": "13",
  "силиций": "14",
  "фосфор": "15",
  "сяра": "16",
  "хлор": "17",
  "аргон": "18",
  "калий": "19",
  "калций": "20",
  "скандий": "21",
  "титан": "22",
  "ванадий": "23",
  "хром": "24",
  "манган": "25",
  "желязо": "26",
  "кобалт": "27",
  "никел": "28",
  "мед": "29",
  "цинк": "30",
  "галий": "31",
  "германий": "32",
  "арсен": "33",
  "селен": "34",
  "бром": "35",
  "криптон": "36",
  "рубидий": "37",
  "стронций": "38",
  "итрий": "39",
  "цирконий": "40",
  "ниобий": "41",
  "молибден": "42",
  "технеций": "43",
  "рутений": "44",
  "родий": "45",
  "паладий": "46",
  "сребро": "47",
  "кадмий": "48",
  "индий": "49",
  "кадмий": "50",
  "антимон": "51",
  "телур": "52",
  "йод": "53",
  "ксенона": "54",
  "цезий": "55",
  "барий": "56",
  "лантан": "57",
  "церий": "58",
  "празеодим": "59",
  "неодим": "60",
  "прометий": "61",
  "самарий": "62",
  "европий": "63",
  "гадолиний": "64",
  "тербий": "65",
  "диспрозий": "66",
  "холмий": "67",
  "ербий": "68",
  "тулий": "69",
  "иттербий": "70",
  "лютетий": "71",
  "хафний": "72",
  "тантал": "73",
  "волфрам": "74",
  "рений": "75",
  "осмий": "76",
  "иридий": "77",
  "платина": "78",
  "злато": "79",
  "ртуть": "80",
  "талий": "81",
  "олово": "82",
  "висмут": "83",
  "полоний": "84",
  "астат": "85",
  "радон": "86",
  "франций": "87",
  "радий": "88",
  "актиний": "89",
  "торий": "90",
  "протактиний": "91",
  "уран": "92",
  "нептуний": "93",
  "плутоний": "94",
  "америций": "95",
  "курий": "96",
  "бкерклий": "97",
  "калифорний": "98",
  "айнщайний": "99",
  "фермий": "100",
  "менделевий": "101",
  "нобелий": "102",
  "лоуренсий": "103",
  "рътерфордий": "104",
  "дубний": "105",
  "сиборгий": "106",
  "борий": "107",
  "хасий": "108",
  "майтнерий": "109",
  "дармщатий": "110",
  "рентгений": "111",
  "коперниций": "112",
  "нихоний": "113",
  "флеровий": "114",
  "московий": "115",
  "ливерморий": "116",
  "тенесин": "117",
  "оганесон": "118",

  "H": 1,
  "He": 2,
  "Li": 3,
  "Be": 4,
  "B": 5,
  "C": 6,
  "N": 7,
  "O": 8,
  "F": 9,
  "Ne": 10,
  "Na": 11,
  "Mg": 12,
  "Al": 13,
  "Si": 14,
  "P": 15,
  "S": 16,
  "Cl": 17,
  "Ar": 18,
  "K": 19,
  "Ca": 20,
  "Sc": 21,
  "Ti": 22,
  "V": 23,
  "Cr": 24,
  "Mn": 25,
  "Fe": 26,
  "Co": 27,
  "Ni": 28,
  "Cu": 29,
  "Zn": 30,
  "Ga": 31,
  "Ge": 32,
  "As": 33,
  "Se": 34,
  "Br": 35,
  "Kr": 36,
  "Rb": 37,
  "Sr": 38,
  "Y": 39,
  "Zr": 40,
  "Nb": 41,
  "Mo": 42,
  "Tc": 43,
  "Ru": 44,
  "Rh": 45,
  "Pd": 46,
  "Ag": 47,
  "Cd": 48,
  "In": 49,
  "Sn": 50,
  "Sb": 51,
  "Te": 52,
  "I": 53,
  "Xe": 54,
  "Cs": 55,
  "Ba": 56,
  "La": 57,
  "Ce": 58,
  "Pr": 59,
  "Nd": 60,
  "Pm": 61,
  "Sm": 62,
  "Eu": 63,
  "Gd": 64,
  "Tb": 65,
  "Dy": 66,
  "Ho": 67,
  "Er": 68,
  "Tm": 69,
  "Yb": 70,
  "Lu": 71,
  "Hf": 72,
  "Ta": 73,
  "W": 74,
  "Re": 75,
  "Os": 76,
  "Ir": 77,
  "Pt": 78,
  "Au": 79,
  "Hg": 80,
  "Tl": 81,
  "Pb": 82,
  "Bi": 83,
  "Po": 84,
  "At": 85,
  "Rn": 86,
  "Fr": 87,
  "Ra": 88,
  "Ac": 89,
  "Th": 90,
  "Pa": 91,
  "U": 92,
  "Np": 93,
  "Pu": 94,
  "Am": 95,
  "Cm": 96,
  "Bk": 97,
  "Cf": 98,
  "Es": 99,
  "Fm": 100,
  "Md": 101,
  "No": 102,
  "Lr": 103,
  "Rf": 104,
  "Db": 105,
  "Sg": 106,
  "Bh": 107,
  "Hs": 108,
  "Mt": 109,
  "Ds": 110,
  "Rg": 111,
  "Cn": 112,
  "Nh": 113,
  "Fl": 114,
  "Mc": 115,
  "Lv": 116,
  "Ts": 117,
  "Og": 118
};


function NameriNomerHimElement() {
  const ime = document.getElementById("ime-him-element1").value;
  let nomer;

  // Проверка за латински букви
  if (/^[a-zA-Z]+$/.test(ime)) {
    nomer = himichniElementi[ime.toUpperCase()];
  } else {
    nomer = himichniElementi[ime.toLowerCase()];
  }

  if (nomer) {
    document.getElementById("nomer-him-element1").value = nomer;
  } else {
    document.getElementById("nomer-him-element1").value = "Грешка";
  }
}



function NameriNomerHimElementNulirane() {
  document.getElementById("ime-him-element1").value = "";
  document.getElementById("nomer-him-element1").value = "";
}


// function NameriNomerHimElement() {
//   const ime = document.getElementById("ime-him-element1").value;
//   const nomer = himichniElementi[ime];

//   if (nomer) {
//       document.getElementById("nomer-him-element1").value = "Z = " + nomer;
//   } else {
//       document.getElementById("nomer-him-element1").value = "Химичен елемент не е намерен";
//   }
// }

const himHarakter = {
  "1": "Неметал",
  "2": "Газ",
  "3": "Метал",
  "4": "Метал",
  "5": "Неметал",
  "6": "Неметал",
  "7": "Неметал",
  "8": "Неметал",
  "9": "Неметал",
  "10": "Газ",
  "11": "Метал",
  "12": "Метал",
  "13": "Двойнствен",
  "14": "Двойнствен",
  "15": "Неметал",
  "16": "Неметал",
  "17": "Неметал",
  "18": "Газ",
  "19": "Метал",
  "20": "Метал",
  "21": "Метал",
  "22": "Метал",
  "23": "Метал",
  "24": "Метал",
  "25": "Метал",
  "26": "Метал",
  "27": "Метал",
  "28": "Метал",
  "29": "Метал",
  "30": "Метал",
  "31": "Метал",
  "32": "Двойнствен",
  "33": "Неметал",
  "34": "Неметал",
  "35": "Неметал",
  "36": "Газ",
  "37": "Метал",
  "38": "Метал",
  "39": "Метал",
  "40": "Метал",
  "41": "Метал",
  "42": "Метал",
  "43": "Метал",
  "44": "Метал",
  "45": "Метал",
  "46": "Метал",
  "47": "Метал",
  "48": "Метал",
  "49": "Метал",
  "50": "Двойнствен",
  "51": "Двойнствен",
  "52": "Неметал",
  "53": "Газ",
  "54": "Метал",
  "55": "Метал",
  "56": "Редкоземен",
  "57": "Редкоземен",
  "58": "Редкоземен",
  "59": "Редкоземен",
  "60": "Редкоземен",
  "61": "Редкоземен",
  "62": "Редкоземен",
  "63": "Редкоземен",
  "64": "Редкоземен",
  "65": "Редкоземен",
  "66": "Редкоземен",
  "67": "Редкоземен",
  "68": "Редкоземен",
  "69": "Редкоземен",
  "70": "Редкоземен",
  "71": "Редкоземен",
  "72": "Метал",
  "73": "Метал",
  "74": "Метал",
  "75": "Метал",
  "76": "Метал",
  "77": "Метал",
  "78": "Метал",
  "79": "Метал",
  "80": "Метал",
  "81": "Метал",
  "82": "Метал",
  "83": "Неметал",
  "84": "Неметал",
  "85": "Газ",
  "86": "Метал",
  "87": "Метал",
  "88": "Редкоземен",
  "89": "Редкоземен",
  "90": "Редкоземен",
  "91": "Редкоземен",
  "92": "Редкоземен",
  "93": "Редкоземен",
  "94": "Редкоземен",
  "95": "Редкоземен",
  "96": "Редкоземен",
  "97": "Редкоземен",
  "98": "Редкоземен",
  "99": "Редкоземен",
  "100": "Редкоземен",
  "101": "Редкоземен",
  "102": "Редкоземен",
  "103": "Редкоземен",
  "104": "Неизвестен ХХ",
  "105": "Неизвестен ХХ",
  "106": "Неизвестен ХХ",
  "107": "Неизвестен ХХ",
  "108": "Неизвестен ХХ",
  "109": "Неизвестен ХХ",
  "110": "Неизвестен ХХ",
  "111": "Неизвестен ХХ",
  "112": "Неизвестен ХХ",
  "113": "Неизвестен ХХ",
  "114": "Неизвестен ХХ",
  "115": "Неизвестен ХХ",
  "116": "Неизвестен ХХ",
  "117": "Неизвестен ХХ",
  "118": "Неизвестен ХХ"
};

function NameriHimHarakter() {
  const nomer = document.getElementById("nomer-him-element2").value;
  const him = himHarakter[nomer];

  if (him) {
    document.getElementById("rezultat-him-harakter").value = him;
  } else {
    document.getElementById("rezultat-him-harakter").value = "Няма такъв ХЕ";
  }
}

function NameriHimHarakterNulirane() {
  document.getElementById("nomer-him-element2").value = "";
  document.getElementById("rezultat-him-harakter").value = "";
}





function NameriHimPeriodGrupa() {
  const z = parseInt(document.getElementById("nomer-him-element3").value);

  let period = 1;
  let group = 1;
  let currentElectrons = 0;

  while (z > currentElectrons + 2 * (period * period)) {
    period++;
    currentElectrons += 2 * (period - 1) * (period - 1);
  }

  group = Math.ceil((z - currentElectrons) / 2);

  document.getElementById("rezultat-him-period").value = period;
  document.getElementById("rezultat-him-grupa").value = group;
}

function NameriHimHarakterPeriodGrupa() {
  document.getElementById("nomer-him-element3").value = "";
  document.getElementById("rezultat-him-period").value = "";
  document.getElementById("rezultat-him-grupa").value = "";
}









const ElKonfig = {
  // "1": "1,1A",
  // "2": "1,8A",
  // "3": "2,1A",
  // "4": "2,2A",
  // "5": "2,3A",
  // "6": "2,4A",
  // "7": "2,5A",
  // "8": "2,6A",
  // "9": "2,7A",
  // "10": "2,8A",
  // "11": "3,1A",
  // "12": "3,2A",
  // "13": "3,3A",
  // "14": "3,4A",
  // "15": "3,5A",
  // "16": "3,6A",
  // "17": "3,7A",
  // "18": "3,8A",
  // "19": "4,1A",
  // "20": "4,2A",
  // "21": "4,3Б",
  // "22": "4,4Б",
  // "23": "4,5Б",
  // "24": "4,6Б",
  // "25": "4,7Б",
  // "26": "4,8Б",
  // "27": "4,8Б",
  // "28": "4,8Б",
  // "29": "4,1Б",
  // "30": "4,2Б",
  // "31": "4,3А",
  // "32": "4,4А",
  // "33": "4,5А",
  // "34": "4,6А",
  // "35": "4,7А",
  // "36": "4,8А",
  // "37": "5,1А",
  // "38": "5,2А",
  // "39": "5,3Б",
  // "40": "5,4Б",
  // "41": "5,5Б",
  // "42": "5,6Б",
  // "43": "5,7Б",
  // "44": "5,8Б",
  // "45": "5,8Б",
  // "46": "5,8Б",
  // "47": "5,1Б",
  // "48": "5,2Б",
  // "49": "5,3Б",

  "1": "1,1",
  "2": "1,8",
  "3": "2,1",
  "4": "2,2",
  "5": "2,3",
  "6": "2,4",
  "7": "2,5",
  "8": "2,6",
  "9": "2,7",
  "10": "2,8",
  "11": "3,1",
  "12": "3,2",
  "13": "3,3",
  "14": "3,4",
  "15": "3,5",
  "16": "3,6",
  "17": "3,7",
  "18": "3,8",
  "19": "4,1",
  "20": "4,2",
  "21": "4,3",
  "22": "4,4",
  "23": "4,5",
  "24": "4,6",
  "25": "4,7",
  "26": "4,8",
  "27": "4,8",
  "28": "4,8",
  "29": "4,1",
  "30": "4,2",
  "31": "4,3",
  "32": "4,4",
  "33": "4,5",
  "34": "4,6",
  "35": "4,7",
  "36": "4,8",
  "37": "5,1",
  "38": "5,2",
  "39": "5,3",
  "40": "5,4",
  "41": "5,5",
  "42": "5,6",
  "43": "5,7",
  "44": "5,8",
  "45": "5,8",
  "46": "5,8",
  "47": "5,1",
  "48": "5,2",
  "49": "5,3",
  "50": "5,4",
  "51": "5,5",
  "52": "5,6",
  "53": "5,7",
  "54": "5,8",
  "55": "6,1",
  "56": "6,2",
  "57": "6,3",
  "58": "6,3",
  "59": "6,3",
  "60": "6,3",
  "61": "6,3",
  "62": "6,3",
  "63": "6,3",
  "64": "6,3",
  "65": "6,3",
  "66": "6,3",
  "67": "6,3",
  "68": "6,3",
  "69": "6,3",
  "70": "6,3",
  "71": "6,3",
  "72": "6,4",
  "73": "6,5",
  "74": "6,6",
  "75": "6,7",
  "76": "6,8",
  "77": "6,8",
  "78": "6,8",
  "79": "6,1",
  "80": "6,2",
  "81": "6,3",
  "82": "6,4",
  "83": "6,5",
  "84": "6,6",
  "85": "6,7",
  "86": "6,8",
  "87": "7,1",
  "88": "7,2",
  "89": "7,3",
  "90": "7,3",
  "91": "7,3",
  "92": "7,3",
  "93": "7,3",
  "94": "7,3",
  "95": "7,3",
  "96": "7,3",
  "97": "7,3",
  "98": "7,3",
  "99": "7,3",
  "100": "7,3",
  "101": "7,3",
  "102": "7,3",
  "103": "7,3",
  "104": "7,4",
  "105": "7,5",
  "106": "7,6",
  "107": "7,7",
  "108": "7,8",
  "109": "7,8",
  "110": "7,8",
  "111": "-,-",
  "112": "-,-",
  "113": "-,-",
  "114": "-,-",
  "115": "-,-",
  "116": "-,-",
  "117": "-,-",
  "118": "-,-",
};

function NameriHimPeriodGrupa() {
  const z = document.getElementById("nomer-him-element3").value.toUpperCase();
  const [period, grupa] = NameriPeriodGrupa(z);

  document.getElementById("rezultat-him-period").value = period;
  document.getElementById("rezultat-him-grupa").value = grupa;
}

function NameriHimHarakterPeriodGrupa() {
  document.getElementById("nomer-him-element3").value = "";
  document.getElementById("rezultat-him-period").value = "";
  document.getElementById("rezultat-him-grupa").value = "";
}

function NameriPeriodGrupa(z) {
  const values = ElKonfig[z];
  if (values) {
    const [period, grupa] = values.split(",");
    return [period, grupa];
  } else {
    return ["Невалиден атомен номер", ""];
  }
}








function balanceEquation() {
  const equationInput = document.getElementById("chemical-equation").value;
  const resultOutput = document.getElementById("result-output");

  if (equationInput.trim() === "") {
    alert("Моля, въведете химично уравнение!");
    return;
  }

  // Балансиране на химичното уравнение
  const balancedEquation = performBalancing(equationInput);

  if (balancedEquation) {
    resultOutput.innerHTML = `${balancedEquation}`;
    resultOutput.style.color = "lightgreen";  // Светло зелено за успешен резултат
  } else {
    resultOutput.textContent = "Не успяхме да изравним уравнението. Проверете въведеното!";
    resultOutput.style.color = "#FF5733";  // Червено за грешка
  }
}

function formatCompound(compound) {
  // Търси елементи и тяхното количество в химичното съединение
  return compound.replace(/([A-Z][a-z]*)(\d*)/g, (match, element, quantity) => {
    const subscript = quantity ? `<sub>${quantity}</sub>` : "";
    return `${element}${subscript}`;
  });
}

function formatEquation(leftCompounds, rightCompounds, coefficients) {
  const leftEquation = leftCompounds.map((compound, i) => {
    const coeff = coefficients[i];
    return `${coeff !== 1 ? `<span style='color:#00FFFF;'>${coeff}</span>` : ""}${formatCompound(compound)}`.trim();
  }).join(" + ");

  const rightEquation = rightCompounds.map((compound, i) => {
    const coeff = coefficients[leftCompounds.length + i];
    return `${coeff !== 1 ? `<span style='color:#00FFFF;'>${coeff}</span>` : ""}${formatCompound(compound)}`.trim();
  }).join(" + ");

  return `${leftEquation} -> ${rightEquation}`;
}

function performBalancing(equation) {
  const sides = equation.split("->");

  if (sides.length !== 2) {
    return null; // Невалидно уравнение
  }

  const leftSide = sides[0].trim();
  const rightSide = sides[1].trim();

  const leftCompounds = parseCompounds(leftSide);
  const rightCompounds = parseCompounds(rightSide);

  const elementCounts = countElements(leftCompounds, rightCompounds);

  const coefficients = calculateCoefficients(elementCounts, leftCompounds, rightCompounds);

  return formatEquation(leftCompounds, rightCompounds, coefficients);
}

function parseCompounds(side) {
  return side.split("+").map(compound => compound.trim());
}

function countElements(leftCompounds, rightCompounds) {
  const elementCounts = {};

  // Събиране на атомите от лявата страна
  leftCompounds.forEach(compound => {
    const atoms = parseAtoms(compound);
    for (const [element, count] of Object.entries(atoms)) {
      if (!elementCounts[element]) {
        elementCounts[element] = { left: 0, right: 0 };
      }
      elementCounts[element].left += count;
    }
  });

  // Събиране на атомите от дясната страна
  rightCompounds.forEach(compound => {
    const atoms = parseAtoms(compound);
    for (const [element, count] of Object.entries(atoms)) {
      if (!elementCounts[element]) {
        elementCounts[element] = { left: 0, right: 0 };
      }
      elementCounts[element].right += count;
    }
  });

  return elementCounts;
}

function parseAtoms(compound) {
  const atomCounts = {};
  const matches = compound.match(/([A-Z][a-z]*)(\d*)/g);

  matches.forEach(match => {
    const [_, element, quantity] = match.match(/([A-Z][a-z]*)(\d*)/);
    atomCounts[element] = (atomCounts[element] || 0) + (parseInt(quantity) || 1);
  });

  return atomCounts;
}

function calculateCoefficients(elementCounts, leftCompounds, rightCompounds) {
  const compoundCounts = [...leftCompounds, ...rightCompounds].map(() => 1);
  const elements = Object.keys(elementCounts);

  let hasUnbalanced = true;
  while (hasUnbalanced) {
    hasUnbalanced = false;

    for (const element of elements) {
      const { left, right } = elementCounts[element];
      const leftTotal = leftCompounds.reduce((sum, compound, i) => sum + compoundCounts[i] * (parseAtoms(compound)[element] || 0), 0);
      const rightTotal = rightCompounds.reduce((sum, compound, i) => sum + compoundCounts[leftCompounds.length + i] * (parseAtoms(compound)[element] || 0), 0);

      if (leftTotal !== rightTotal) {
        hasUnbalanced = true;
        const lcm = leastCommonMultiple(leftTotal, rightTotal);

        for (let i = 0; i < leftCompounds.length; i++) {
          if (parseAtoms(leftCompounds[i])[element]) {
            compoundCounts[i] *= lcm / leftTotal;
          }
        }

        for (let i = 0; i < rightCompounds.length; i++) {
          if (parseAtoms(rightCompounds[i])[element]) {
            compoundCounts[leftCompounds.length + i] *= lcm / rightTotal;
          }
        }

        break;
      }
    }
  }

  return compoundCounts;
}

function leastCommonMultiple(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return Math.abs(a * b) / gcd(a, b);
}

function clearEquation() {
  document.getElementById("chemical-equation").value = "";
  document.getElementById("result-output").textContent = "";
}
