// Функция за превключване на темата
function invertColors() {
    document.querySelector('footer').classList.toggle('invert-footer');
    document.querySelector('body').classList.toggle('invert-body');

    // Променяне на цвета на текста и фона на навигационните елементи
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('invert-navbar');

    const smallnavbar = document.querySelector('.dropdown_menu');
    smallnavbar.classList.toggle('invert-dropdown_menu');

    // Променяне на цвета на текста на връзките в навигацията
    const links = document.querySelectorAll('.navbar .links li a');
    links.forEach(link => {
        link.classList.toggle('invert-link');
    });

    // Променяне на цвета на текста на бутона за смяна на темата
    const actionBtn = document.querySelector('.action_btn');
    actionBtn.classList.toggle('invert-action-btn');

    const shareIcons = document.querySelectorAll('.link-btn');
    const isDarkMode = document.body.classList.contains('invert-body');

    shareIcons.forEach(icon => {
        icon.src = isDarkMode ? '/eurocountries/images/INVERT-share-symbol.png' : '/eurocountries/images/share-symbol.png';
    });


    // Записване на предпочитаната тема в локалното съхранение
    localStorage.setItem('darkMode', isDarkMode);
}

// Проверка при зареждане на страницата
document.addEventListener('DOMContentLoaded', function () {
    // Зареждане на предпочитаната тема от локалното съхранение
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        // Ако предпочитаната тема е тъмна, превключете към нея
        invertColors();
    }
});

// Показване на съобщение при клик на "version-link"
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('version-link').addEventListener('click', function () {
        document.getElementById('welcome-message').style.display = 'block';
    });

    // Скриване на съобщението при натискане на бутона за потвърждение
    document.getElementById('acknowledge-button').addEventListener('click', function () {
        document.getElementById('welcome-message').style.display = 'none';
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const footerContent = `
        <div class="footer-left">
            <h3 style="line-height: 0.95;">Ученически <span>помощник</span> <sup style="font-size: 10px;">TM</sup></h3>
            <p class="footer-links">
                <a href="/index.html" class="link-1">Начало</a>
                <a href="/apps.html">Мобилно приложение</a>
                <br>
                <a href="/privacy-policy.html">Политика на поверителност</a>
            </p>
            <p class="footer-company-name">Ученически помощник © 2023-2025 <br>Основано от Венци Видьов</p>
            <br>
            <a href="https://www.dmca.com/compliance/zauchenikabg.eu" title="DMCA Compliance information for zauchenikabg.eu">
                <img src="https://www.dmca.com/img/dmca-compliant-grayscale.png" alt="DMCA compliant image" width="125px"/>
            </a>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                <p><a href="https://www.facebook.com/zauchenikabg">facebook.com/zauchenikabg</a></p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@zauchenikabg.eu">support@zauchenikabg.eu</a></p>
            </div>
            <div>
                <i class="fa-brands fa-paypal" style="color: #ffffff;"></i>
                <p><a href="https://www.paypal.com/paypalme/vidyovbg">Подкрепи платформата</a></p>
            </div>
        </div>

        <div class="footer-right">
            <p class="footer-company-about">
                <span>За платформата</span>
                "Ученически помощник" е създаден на 12 април 2023 г. от Венци Видьов, ученик от град Ямбол. Въпреки
                скромното си начало, сайтът привлича над 6 700 посещения през учебната 2023/24 година и на 22 май 2024 г. е
                отличен от "Господари на Уеба" за своя принос в образованието. 
                <a style="color: #9a9ea3;" href="https://gospodari.com/devetoklasnik-razraboti-sayt-koyto-bezplatno-pomaga-na-uchenitsite-video/?fbclid=IwY2xjawEjHshleHRuA2FlbQIxMQABHahExxqZEqyoaX0j1u_Eaq1FyICuRkrlaXwrvuQQXqedaotmspUwzd1yzQ_aem_TyaoES3RdwkaG3VBacrEBA">
                    (Виж публикацията)
                </a>
            </p>
        </div>


`;

    document.querySelector("footer").innerHTML = footerContent;
});









//!             CHATBOT
//!             CHATBOT
//!             CHATBOT

