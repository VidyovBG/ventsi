const works11 = [
    "Железният светилник; Димитър Талев; zhelezniat_svetilnik",
    "Бай Ганьо журналист; Алеко Константинов; bai_ganio_zhurnalist",
    "Балкански синдром; Станислав Стратиев; balkanski_sindrom",
    "Паисий; Иван Вазов; paisii",
    "Ноев ковчег; Йордан Радичков; noev_kovcheg",
    "Борба; Христо Ботев; greek_myths",
    "Андрешко; Елин Пелин; andreshko",
    "Приказка за стълбата; Христо Смирненски; prikazka_za_stulbata",
    "До моето първо либе; Христо Ботев; do_moeto_purvo_libe",
    "Новото гробище над Сливница; Иван Вазов; novoto_grobishte_nad_slivnica",
    "Крадецът на праскови; Емилиян Станев; kradecut_na_praskovi",
    "При Рилския манастир; Иван Вазов; pri_rilskia_manastir",
    "Градушка; Пейо Яворов; gradushka",
    "Спи езерото; Пенчо Славейков; spi_ezeroto"
];

const worksData = {
    zhelezniat_svetilnik: {
        author: "Димитър Талев",
        title: "Железният светилник",
        year: "1930",
        genre: "Роман",
        summary: "Сюжетът проследява живота на обикновен човек в социални промени.",
        characters: "Главни герои: Иван, Петър, Мария",
        composition: "Увод, развитие, кулминация и заключение"
    },
    bai_ganio_zhurnalist: {
        author: "Алеко Константинов",
        title: "Бай Ганьо журналист",
        year: "1895",
        genre: "Сатира",
        summary: "Приключенията на Бай Ганьо, представени с доза ирония.",
        characters: "Бай Ганьо и различни срещани личности",
        composition: "Кратки епизоди с хумористични нотки"
    },
    balkanski_sindrom: {
        author: "Станислав Стратиев",
        title: "Балкански синдром",
        year: "2005",
        genre: "Психологически роман",
        summary: "Изследване на съвременните социални и културни проблеми.",
        characters: "Няколко главни героя с различни гледни точки",
        composition: "Модерен разказ със сложна структура"
    },
    paisii: {
        author: "Иван Вазов",
        title: "Паисий",
        year: "1900",
        genre: "Исторически роман",
        summary: "История за Паисий Хилендарски и неговата роля в българското възраждане.",
        characters: "Паисий и спътници от епохата",
        composition: "Класическа композиция с увод, изложение и заключение"
    },
    noev_kovcheg: {
        author: "Йордан Радичков",
        title: "Ноев ковчег",
        year: "1970",
        genre: "Съвременен роман",
        summary: "Фантастична история със символика и дълбоки емоции.",
        characters: "Главни и второстепенни персонажи",
        composition: "Силна композиция с модерни елементи"
    },
    greek_myths: {
        author: "Старогръцка митология",
        title: "Митове и легенди",
        year: "8-1 век пр.н.е.",
        genre: "Митология",
        summary: "Сбирка от древногръцки митове и легенди.",
        characters: "Зевс, Хера, Посейдон и други",
        composition: "Устно предавани истории"
    },
    andreshko: {
        author: "Елин Пелин",
        title: "Андрешко",
        year: "1900",
        genre: "Кратка история",
        summary: "История за един малък герой и неговите приключения.",
        characters: "Андрешко и родителите му",
        composition: "Прост и емоционален разказ"
    },
    prikazka_za_stulbata: {
        author: "Христо Смирненски",
        title: "Приказка за стълбата",
        year: "1925",
        genre: "Приказка",
        summary: "Фантастична история с морална поука.",
        characters: "Герои от приказката",
        composition: "Кратка приказна структура"
    },
    do_moeto_purvo_libe: {
        author: "Христо Ботев",
        title: "До моето първо либе",
        year: "1870",
        genre: "Лирическо произведение",
        summary: "Любовна поезия, изпълнена с дълбоки чувства.",
        characters: "Емоционални образи",
        composition: "Свободна поетична форма"
    },
    novoto_grobishte_nad_slivnica: {
        author: "Иван Вазов",
        title: "Новото гробище над Сливница",
        year: "1899",
        genre: "Поезия",
        summary: "Стихотворение, описващо природата и живота.",
        characters: "Образи от природата и човешката съдба",
        composition: "Поетична композиция"
    },
    kradecut_na_praskovi: {
        author: "Емилиян Станев",
        title: "Крадецът на праскови",
        year: "1960",
        genre: "Социална драма",
        summary: "История за социални конфликти и морални дилеми.",
        characters: "Главни социални фигури",
        composition: "Кратък разказ с наситена емоция"
    },
    pri_rilskia_manastir: {
        author: "Иван Вазов",
        title: "При Рилския манастир",
        year: "1905",
        genre: "Пътуване и приключение",
        summary: "Приключения и размисли около Рилския манастир.",
        characters: "Пътешественици и местни жители",
        composition: "Структурирано като пътепис"
    },
    gradushka: {
        author: "Пейо Яворов",
        title: "Градушка",
        year: "1910",
        genre: "Поезия",
        summary: "Стихотворение, описващо природната стихия.",
        characters: "Натурални образи",
        composition: "Ритмичен и емоционален текст"
    },
    spi_ezeroto: {
        author: "Пенчо Славейков",
        title: "Спи езерото",
        year: "1920",
        genre: "Лирическа поезия",
        summary: "Медитативно стихотворение за красотата на природата.",
        characters: "Образи от природата",
        composition: "Свободна стихотворна структура"
    },
    // Данни за произведения от клас XII:
    az_iskam_da_te_pomnia_vse_taka: {
        author: "Димчо Дебелянов",
        title: "Аз искам да те помня все така",
        year: "1912",
        genre: "Лирика",
        summary: "Израз на дълбоки чувства и спомени.",
        characters: "Емоционални образи",
        composition: "Свободна поетична композиция"
    },
    kolko_si_hubava: {
        author: "Христо Фотев",
        title: "Колко си хубава",
        year: "1915",
        genre: "Любовна лирика",
        summary: "Хвалебствен текст за красотата.",
        characters: "Образи на нежност и елегантност",
        composition: "Класическа лирика"
    },
    posveshtenie: {
        author: "Петя Дубарова",
        title: "Посвещение",
        year: "2000",
        genre: "Поезия",
        summary: "Посвещение към близък човек.",
        characters: "Лични образи и спомени",
        composition: "Интимна поетична структура"
    },
    spasova_mogila: {
        author: "Елин Пелин",
        title: "Спасова могила",
        year: "1908",
        genre: "Разказ",
        summary: "История, вдъхновена от реални събития.",
        characters: "Портрети на герои от селския живот",
        composition: "Наративна структура с класически елементи"
    },
    molitva: {
        author: "Атанас Далчев",
        title: "Молитва",
        year: "1922",
        genre: "Лирика",
        summary: "Духовно търсене, изразено в стихове.",
        characters: "Образи на вяра и надежда",
        composition: "Кратка лирична структура"
    },
    viara: {
        author: "Никола Вапцаров",
        title: "Вяра",
        year: "1930",
        genre: "Лирика",
        summary: "Силно и емоционално стихотворение за вярата.",
        characters: "Вдъхновяващи образи",
        composition: "Ритмична поезия"
    },
    vetrenata_melnica: {
        author: "Елин Пелин",
        title: "Ветрената мелница",
        year: "1910",
        genre: "Разказ",
        summary: "Разказ за живота и съдбата на селяни.",
        characters: "Множество живи характери",
        composition: "Наративна композиция"
    },
    pesenta_na_koleletata: {
        author: "Йордан Йовков",
        title: "Песента на колелетата",
        year: "1925",
        genre: "Поезия",
        summary: "Стихотворение, вдъхновено от звука на колелетата.",
        characters: "Образи на движение и ритъм",
        composition: "Свободна поетична структура"
    },
    balada_za_georg_henih: {
        author: "Виктор Пасков",
        title: "Балада за Георг Хених",
        year: "1975",
        genre: "Баладна поезия",
        summary: "Епична балада с исторически контекст.",
        characters: "Героични образи",
        composition: "Епична структура"
    },
    dve_dushi: {
        author: "Пейо Яворов",
        title: "Две души",
        year: "1918",
        genre: "Лирика",
        summary: "Стихотворение, разглеждащо вътрешния конфликт.",
        characters: "Контрастни образи",
        composition: "Класическа стихотворна форма"
    },
    potomka: {
        author: "Елисавета Багряна",
        title: "Потомка",
        year: "1940",
        genre: "Поезия",
        summary: "Поетично произведение, посветено на традициите.",
        characters: "Образи от миналото",
        composition: "Лирична композиция"
    },
    chesten_krust: {
        author: "Борис Христов",
        title: "Честен кръст",
        year: "1935",
        genre: "Драма",
        summary: "Драматично произведение за морални ценности.",
        characters: "Силни характери и конфликтни ситуации",
        composition: "Структурирана драматургия"
    }

};

function generateWorks11() {
    const container = document.querySelector('.author-list-11');
    container.innerHTML = '';

    works11.forEach(work => {
        const parts = work.split(';').map(item => item.trim());
        const [title, author, dataKey] = parts;

        const li = document.createElement('li');
        li.className = 'author-item';
        li.innerHTML = `
         <button class="work-btn" data-work="${dataKey}">
             <div class="text-wrapper">
                 <strong class="work-title">"${title}"</strong>
                 <span class="work-author">${author}</span>
             </div>
         </button>
     `;

        // Добавяне на event listener директно към новосъздадения бутон
        const button = li.querySelector('.work-btn');
        button.addEventListener('click', () => showModal(dataKey));

        container.appendChild(li);
    });
}





const works12 = [
    "Аз искам да те помня все така; Димчо Дебелянов; az_iskam_da_te_pomnia_vse_taka",
    "Колко си хубава; Христо Фотев; kolko_si_hubava",
    "Посвещение; Петя Дубарова; posveshtenie",
    "Спасова могила; Елин Пелин; spasova_mogila",
    "Молитва; Атанас Далчев; molitva",
    "Вяра; Никола Вапцаров; viara",
    "Ветрената мелница; Елин Пелин; vetrenata_melnica",
    "Песента на колелетата; Йордан Йовков; pesenta_na_koleletata",
    "Балада за Георг Хених; Виктор Пасков; balada_za_georg_henih",
    "Две души; Пейо Яворов; dve_dushi",
    "Потомка; Елисавета Багряна; potomka",
    "Честен кръст; Борис Христов; chesten_krust"
];


function generateWorks12() {
    const container = document.querySelector('.author-list-12');
    container.innerHTML = '';

    works12.forEach(work => {
        const parts = work.split(';').map(item => item.trim());
        const [title, author, dataKey] = parts;

        const li = document.createElement('li');
        li.className = 'author-item';
        li.innerHTML = `
         <button class="work-btn" data-work="${dataKey}">
             <div class="text-wrapper">
                 <strong class="work-title">"${title}"</strong>
                 <span class="work-author">${author}</span>
             </div>
         </button>
     `;

        // Добавяне на event listener директно към новосъздадения бутон
        const button = li.querySelector('.work-btn');
        button.addEventListener('click', () => showModal(dataKey));

        container.appendChild(li);
    });
}





function showModal(workKey) {
    const work = worksData[workKey];
    if (!work) return;

    document.getElementById('modalTitle').textContent = `${work.author}: ${work.title}`;
    document.getElementById('modalContent').innerHTML = `
     <p><strong>Година:</strong> ${work.year}</p>
     <p><strong>Жанр:</strong> ${work.genre}</p>
     <p><strong>Резюме:</strong> ${work.summary}</p>
     <p><strong>Герои:</strong> ${work.characters}</p>
     <p><strong>Композиция:</strong> ${work.composition}</p>
 `;
    document.getElementById('workModal').style.display = 'block';
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    generateWorks11();

    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('workModal').style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            document.getElementById('workModal').style.display = 'none';
        }
    }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    generateWorks12();

    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('workModal').style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            document.getElementById('workModal').style.display = 'none';
        }
    }
});