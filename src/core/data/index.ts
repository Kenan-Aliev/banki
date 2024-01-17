import osago from '@/assets/icons/osago.svg';
import credit from '@/assets/icons/credit.svg';
import carta from '@/assets/icons/carta.svg';
import vklad from '@/assets/icons/vklad.svg';
import zaymi from '@/assets/icons/zaymi.svg';
import invest from '@/assets/icons/invest.svg';
import ipoteka from '@/assets/icons/ipoteka.svg';
// import sbi from '@/assets/icons/banki_icon/sbi.svg';
// import absolut from '@/assets/icons/banki_icon/absolut.svg';
// import agrogress from '@/assets/icons/banki_icon/agrogress.svg';
import card from '@/assets/icons/Card Send.svg';
import laptop from '@/assets/icons/Laptop.svg';
import bars from '@/assets/icons/banki_icon/bars.svg';
import wave from '@/assets/icons/wave.svg';
import calendar from '@/assets/icons/calendar.svg';
import building from '@/assets/icons/Buildings.svg';
import target from '@/assets/icons/Target.svg';
import loc_bank from '@/assets/icons/banki_icon/loco.svg';
import loco from '@/assets/icons/banki_icon/loco.svg';
import family from '@/assets/icons/Famyle.svg';
import ruble from '@/assets/icons/banki_icon/Ruble.svg';
import linesI from '@/assets/icons/banki_icon/3-line.svg';
import img_1 from '@/assets/icons/offer_img1.png';
import dom from '@/assets/icons/banki_icon/dom.svg';
import sale from '@/assets/icons/Sale.svg';
import saleSquare from '@/assets/icons/Sale Square.svg';
import img_2 from '@/assets/icons/offer_img2.png';
import img_3 from '@/assets/icons/offer_img3.png';
import europe from '@/assets/icons/banki_icon/europe.svg';
import img_4 from '@/assets/icons/offer_img4.png';
import norvik from '@/assets/icons/banki_icon/norvik.svg';
import sber from '@/assets/icons/banki_icon/sber.svg';
import check from '@/assets/icons/Verified Check.svg';
import raket from '@/assets/icons/Rocket.svg';
import ekspo from '@/assets/icons/banki_icon/ekspo.svg';
import spm from '@/assets/icons/banki_icon/spm.svg';
import psb from '@/assets/icons/banki_icon/psb.svg';
import tinkoff from '@/assets/icons/banki_icon/tinkoff_text.svg';
// import tinkoff_i from '@/assets/icons/banki_icon/tinkoff.svg';
// import alfa from '@/assets/icons/banki_icon/alfa.svg';
// import otkr from '@/assets/icons/banki_icon/otkritie.svg';
import globus from '@/assets/icons/Globus.svg';
// import vtb from '@/assets/icons/banki_icon/vtb.svg';
import money_i from '@/assets/icons/Banknote_icon.svg';
import sprav from '@/assets/icons/Clipboard_Check_icon.svg';
import home_i from '@/assets/icons/home_icon.svg';
import swit from '@/assets/icons/Restart_icon.svg';
import smar from '@/assets/icons/Smartphone_Rotate_Angle.svg';
import flame from '@/assets/icons/Flame_icon.svg';
import wheel from '@/assets/icons/Wheel_Angle_icon.svg';
import prot from '@/assets/icons/Shield_protect.svg';
import w_1 from '@/assets/icons/w_1.svg';
import w_2 from '@/assets/icons/w_2.svg';
import w_3 from '@/assets/icons/w_3.svg';
import w_4 from '@/assets/icons/w_4.svg';
import scooter from '@/assets/icons/Scooter.svg';
import template from '@/assets/icons/template.svg';
import heart from '@/assets/icons/Hearts.svg';
import sber_full from '@/assets/icons/banki_icon/sber_text.svg';
import ifk from '@/assets/icons/banki_icon/ifk_solid.svg';
import mic1 from '@/assets/icons/banki_icon/orgs_1.svg';
import mic2 from '@/assets/icons/banki_icon/orgs_2.svg';
import ic1 from '@/assets/icons/catalogIcons/Wallet Money.svg';
import ic2 from '@/assets/icons/catalogIcons/Clipboard Check.svg';
import ic3 from '@/assets/icons/catalogIcons/Banknote.svg';
import ic4 from '@/assets/icons/catalogIcons/Star.svg';
import ic5 from '@/assets/icons/catalogIcons/Card Send.svg';
import ic6 from '@/assets/icons/catalogIcons/procent.svg';
import ic7 from '@/assets/icons/catalogIcons/Smartphone.svg';
import ic8 from '@/assets/icons/catalogIcons/Flame.svg';
import ic9 from '@/assets/icons/catalogIcons/Wheel.svg';
import ic10 from '@/assets/icons/catalogIcons/WadOfMoney.svg';
import ic11 from '@/assets/icons/catalogIcons/protect.svg';
import lines from '@/assets/icons/banki_icon/orange_bank.svg';
import sfk from '@/assets/icons/sfk_icon_stock.svg';
import c from '@/assets/icons/banki_icon/c.svg';
import sbi_big from '@/assets/icons/bank_icons/sbi_big.png';
// import alfa_i from '@/assets/icons/banki_icon/alfa.svg';
import gazprom from '@/assets/icons/gasprom.svg';

const data = {
  HomePage: {
    iconsSlide: [
      { name: 'Вклады', img: vklad, w: 0, link: '/deposits' },
      { name: 'Кредиты', img: credit, w: 68, link: '/credits' },
      { name: 'Ипотека', img: ipoteka, w: 0, link: '/ipoteka' },
      { name: 'Кредитные карты', img: card, w: 0, link: '/cards/credit-cards' },
      { name: 'Дебетовые карты', img: card, w: 0, link: '/cards/debit-cards' },
      { name: 'Рефинансирование', img: swit, w: 0, link: '/credits/refinancing-credits' },
      { name: 'Автокредиты', img: wheel, w: 0, link: '/credits/autocredit' },
      { name: 'Микрозаймы ', img: zaymi, w: 0, link: '/credits/microloans' },
    ],
    stock: [
      {
        title: 'Заголовок 1 для акции для клиентов',
        sup: 'Подзаголовок для будущей акции',
      },
      {
        title: 'Заголовок 2 для акции для клиентов',
        sup: 'Подзаголовок для будущей акции',
      },
      {
        title: 'Заголовок 3 для акции для клиентов',
        sup: 'Подзаголовок для будущей акции',
      },
      {
        title: 'Заголовок 4 для акции  для клиентов',
        sup: 'Подзаголовок для будущей акции',
      },
    ],
    banki: [
      // {img: sbi, name: "SBI Банк", rating: 4.2},
      // {img: sbi, name: "SBI Банк", rating: 4.2},
      // {img: sbi, name: "SBI Банк", rating: 4.2},
      // {img: absolut, name: "Абсолют Банк", rating: 4.2},
      // {img: absolut, name: "Абсолют Банк", rating: 4.2},
      // {img: absolut, name: "Абсолют Банк", rating: 4.2},
      // {img: agrogress, name: "Агророс Банк", rating: 4.2},
      // {img: agrogress, name: "Агророс Банк", rating: 4.2},
      // {img: agrogress, name: "Агророс Банк", rating: 4.2},
      // {img: bars, name: "Ак Барс Банк", rating: 4.2},
      // {img: bars, name: "Ак Барс Банк", rating: 4.2},
      // {img: bars, name: "Ак Барс Банк", rating: 4.2},
      // {img: bars, name: "Ак Барс Банк", rating: 4.2},
      // {img: bars, name: "Ак Барс Банк", rating: 4.2},
      // {img: bars, name: "Ак Барс Банк", rating: 4.2},
      { img: bars, name: 'ОАО «Коммерческий банк КЫРГЫЗСТАН»', rating: 4.2 },
      { img: bars, name: 'ОАО «Оптима Банк»', rating: 4.2 },
      { img: bars, name: 'ЗАО «Кыргызско-Швейцарский Банк»', rating: 4.2 },
      { img: bars, name: 'ЗАО АКБ «Толубай»', rating: 4.2 },
      { img: bars, name: 'ОАО «РСК Банк»', rating: 4.2 },
      { img: bars, name: 'ЗАО «Демир Кыргыз Интернэшнл Банк»', rating: 4.2 },
      { img: bars, name: 'ОАО «Дос-Кредобанк»', rating: 4.2 },
      { img: bars, name: 'ЗАО «ЭкоИсламикБанк»', rating: 4.2 },
      { img: bars, name: 'ОАО «Евразийский Сберегательный Банк»', rating: 4.2 },
      { img: bars, name: 'ЗАО «Банк Азии» ', rating: 4.2 },
      { img: bars, name: 'ОАО «БАКАЙ БАНК»', rating: 4.2 },
      { img: bars, name: 'ОАО «Халык Банк Кыргызстан»', rating: 4.2 },
      { img: bars, name: 'ОАО «ФинансКредитБанк» ', rating: 4.2 },
      { img: bars, name: 'ОАО «Айыл Банк»', rating: 4.2 },
      { img: bars, name: 'ОАО «Керемет Банк»', rating: 4.2 },
    ],
    choiseOffer: [
      { name: 'Вклады', active: true },
      { name: 'Кредиты', active: false },
      { name: 'Микрозаймы', active: false },
      { name: 'Автокредиты', active: false },
      { name: 'Дебетовые карты', active: false },
      { name: 'Кредитные карты', active: false },
      { name: 'Ипотека', active: false },
    ],
    offersMoth: [
      {
        min_amount: 1000,
        rate: 2,
        bank_id: 1,
        timeframe_max: 1456,
        description: 'Вклад на котором зарабатываете вы, а не мы',
        id: 1,
        max_amount: 1000000,
        timeframe_min: 10,
        name: 'Жадный',
        rating: 0,
      },
    ],
    choiseFeedback: [
      { name: 'Банки', active: true },
      { name: 'МФО', active: false },
      { name: 'Страховые компании', active: false },
      { name: 'Вклады', active: false },
      { name: 'Кредиты', active: false },
      { name: 'Займы', active: false },
    ],
  },
  SpecialOffer: {
    questions: {
      title: 'Частые вопросы',
      items: [
        {
          title: 'Что такое специальные предложения?',
          text: `Мы активно сотрудничаем с ведущими банками и финансовыми организациями в Кыргызстане,
           предлагая нашим пользователям эксклюзивные условия по вкладам,
            кредитам и другим финансовым продуктам. На нашем сайте доступны специальные предложения,
             которые тщательно анализируются нашей командой профессиональных экспертов. 
             Чтобы воспользоваться этими предложениями, следуйте указанным на странице требованиям для каждого продукта.
             <br/>
             <br/>
             Например:
             <br />
            1. Оформите заявку через наш сайт и получите уникальный промокод. 
             При оформлении продукта в банке или офисе компании, просто предъявите этот код. 
             <br />
            2. Заполните заявку на сайте и ожидайте обратной связи от представителя банка, 
             инвестиционной или страховой компании, чтобы обсудить детали и преимущества предложения.
             `
        },
        {
          title: 'Какие уникальные условия могут быть доступны по специальным предложениям?',
          text: `На нашем сайте вы найдете широкий спектр уникальных условий по различным специальным предложениям в Кыргызстане,
           которые помогут вам сэкономить и получить максимальную выгоду от финансовых продуктов.
           <br />
           Для вкладов мы предлагаем улучшенные процентные ставки,
            а также эксклюзивные вклады с уникальными условиями, которых нет в других банках страны.
           <br />
           При выборе дебетовых карт вы можете воспользоваться увеличенным процентом на остаток по счету,
            бесплатным обслуживанием, а также повышенным кэшбэком.
           <br />
           Для кредитных карт доступны предложения с пониженными процентными ставками,
            возможностью бесплатного обслуживания и увеличенным кэшбэком.
           <br />
           А если вы заинтересованы в потребительских кредитах,
            у нас есть предложения с пониженными ставками и уникальными условиями,
             недоступными в других банках.
           <br />
           Подробности о каждом уникальном предложении вы найдете в описании продукта под пунктом «Особые условия»,
            а также на странице специального предложения."
           `,
        },
        {
          title: 'Как уточнить условия по специальным предложениям и акциям банков?',
          text: `Если у вас возникли вопросы,
           на которые вы не нашли ответов на странице специального предложения или в описании продукта на нашем сайте,
            мы всегда готовы помочь. Просто свяжитесь напрямую с соответствующим банком, 
            инвестиционной или страховой компанией. 
            Используйте указанный номер горячей линии для бесплатного звонка по Кыргызстану.
           <br />
           Контактный телефон горячей линии вы всегда найдете на странице выбранного банка или в карточке конкретного продукта на нашем сайте.
          `,
        },
      ],
    },
    choices: [
      // {name: 'Все', active: true, link: ''},
      { name: 'Вклады', active: true, link: '/deposits/special-offers' },
      { name: 'Ипотека', active: false, link: '/ipoteka/special-offers' },
      { name: 'Карты', active: false, link: '/cards/special-offers' },
      // { name: 'Инвестиции', active: false, link: '/investment/special-offers' },
      // { name: 'Страхование', active: false, link: '/insurance/special-offers' },
    ],
    selectData: [
      { img: ruble, options: ['Любая валюта'] },
      { img: linesI, options: ['По популярности'] },
    ],
    offerData: [
      {
        name: 'Вклад Мой Дом',
        img: img_1,
        bankImg: dom,
        bonus: 'Бонус 500 ₽ за вклад',
        bet: 8.6,
        days: '550 дней',
      },
      {
        name: 'Вклад «Оптимальный»',
        img: img_2,
        bankImg: dom,
        bonus: 'Бонус 500 ₽ за вклад',
        bet: 8,
        days: '181 день',
      },
      {
        name: 'Срочный в дирхамах ОАЭ',
        img: img_3,
        bankImg: europe,
        bonus: '',
        bet: 3,
        days: '91 - 368 дней',
      },
      {
        name: 'Вклад «Оптимальный»',
        img: img_4,
        bankImg: norvik,
        bonus: '',
        bet: 9.6,
        days: 'до 18 месяцев',
      },
      {
        name: 'Вклад Мой Дом',
        img: img_1,
        bankImg: dom,
        bonus: 'Бонус 500 ₽ за вклад',
        bet: 8.6,
        days: '550 дней',
      },
      {
        name: 'Вклад «Оптимальный»',
        img: img_2,
        bankImg: dom,
        bonus: 'Бонус 500 ₽ за вклад',
        bet: 8,
        days: '181 день',
      },
      {
        name: 'Срочный в дирхамах ОАЭ',
        img: img_3,
        bankImg: europe,
        bonus: '',
        bet: 3,
        days: '91 - 368 дней',
      },
      {
        name: 'Вклад «Оптимальный»',
        img: img_4,
        bankImg: norvik,
        bonus: '',
        bet: 9.6,
        days: 'до 18 месяцев',
      },
      {
        name: 'Вклад Мой Дом',
        img: img_1,
        bankImg: dom,
        bonus: 'Бонус 500 ₽ за вклад',
        bet: 8.6,
        days: '550 дней',
      },
      {
        name: 'Вклад «Оптимальный»',
        img: img_2,
        bankImg: dom,
        bonus: 'Бонус 500 ₽ за вклад',
        bet: 8,
        days: '181 день',
      },
      {
        name: 'Срочный в дирхамах ОАЭ',
        img: img_3,
        bankImg: europe,
        bonus: '',
        bet: 3,
        days: '91 - 368 дней',
      },
      {
        name: 'Вклад «Оптимальный»',
        img: img_4,
        bankImg: norvik,
        bonus: '',
        bet: 9.6,
        days: 'до 18 месяцев',
      },
    ],
  },
  SavingAccounts: {
    questions: {
      title: 'Частые вопросы',
      items: [
        { title: 'Каталоги', text: '' },
        { title: 'Подробнее', text: '' },
        { title: 'Эксперты направления вклады и депозиты', text: '' },
        { title: 'Накопительные счета в городах', text: '' },
        { title: 'Предложения в банках', text: '' },
        { title: 'Задать вопрос о вкладах', text: '' },
      ],
    },
  },
  ConsumerCredits: {
    catalogData: [
      { img: money_i, name: 'Потребительский' },
      { img: sprav, name: 'Без справок' },
      { img: wheel, name: 'Кредит на автомобиль', link: '/credits/autocredit' },
      { img: swit, name: 'Рефинансирование', link: '/credits/refinancing-credits' },
      { img: home_i, name: 'Ипотека', link: '/ipoteka/credits' },
      { img: flame, name: 'Зеленый кредит' },
    ],
    creditsAll: [
      {
        bank_name: 'ОАО «Кыргызкоммерцbank_name»',
        name: 'Кредит « На неотложные нужды»',
        type: 'Потребительский',
        min_procent: 21,
        max_procent: 24,
        min_amount: 250000,
        max_amount: 250000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Оптима bank_name»',
        name: 'ТЕЗ кредит',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 29.02,
        min_amount: 3000,
        max_amount: 250000,
        timeframe_min: 2,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «ЭкоИсламикbank_name»',
        name: 'Потребительское финансирование до 24 месяцев',
        type: 'потребительский',
        min_procent: 8.3,
        max_procent: 17.6,
        min_amount: 3000,
        max_amount: 250000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Азии»',
        name: '"Кредит ""ЭКСПРЕСС-250"""',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 29.81,
        min_amount: 7000,
        max_amount: 300000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ЗАО «bank_name Азии»',
        name: '"Кредит ""Легко"""',
        type: 'потребительский',
        min_procent: 28,
        max_procent: 32.58,
        min_amount: 10000,
        max_amount: 100000,
        timeframe_min: 3,
        timeframe_max: 18,
      },
      {
        bank_name: 'ЗАО «bank_name Азии»',
        name: 'Автокредит',
        type: 'Автокредит',
        min_procent: 23,
        max_procent: 25.5,
        min_amount: 100000,
        max_amount: 700000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ОАО «БАКАЙ bank_name»',
        name: 'Супер-экспресс',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 30,
        min_amount: 10000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ОАО «БАКАЙ bank_name»',
        name: 'Тунук',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 30,
        min_amount: 5000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Халык bank_name Кыргызстан»',
        name: 'Потребительский кредит «На неотложные нужды Экспресс»',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 27.64,
        min_amount: 1000,
        max_amount: 250000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Халык bank_name Кыргызстан»',
        name: 'Потребительский кредит «На неотложные нужды Экспресс»',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 27.64,
        min_amount: 300,
        max_amount: 3000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Халык bank_name Кыргызстан»',
        name: 'Кредит «Народный-онлайн» для участников зарплатного проекта',
        type: 'потребительский',
        min_procent: 24,
        max_procent: 26.42,
        min_amount: 1000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «ФинансКредитbank_name»',
        name: 'Вторая зарплата - на карту',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 28,
        min_amount: 1,
        max_amount: 250000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Айыл bank_name»',
        name: '"""Ыңгайлуу"""',
        type: 'потребительский',
        min_procent: 24,
        max_procent: 28,
        min_amount: 5000,
        max_amount: 300000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'ЛЬГОТНЫЕ ПОТРЕБИТЕЛЬСКИЕ КРЕДИТЫ (ДЛЯ БАТКЕНСКОЙ ОБЛАСТИ)',
        type: 'потребительский',
        min_procent: 18,
        max_procent: 19.7,
        min_amount: 5000,
        max_amount: 2000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'Агрокредит',
        type: 'агрокредит',
        min_procent: 27.5,
        max_procent: 31.1,
        min_amount: 5000,
        max_amount: 150000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'Потребительский кредит',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 28.3,
        min_amount: 5000,
        max_amount: 2000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: '"КРЕДИТ ""ТОВАРЫ В РАССРОЧКУ"""',
        type: 'потребительский',
        min_procent: 29.9,
        max_procent: 34.93,
        min_amount: 2000,
        max_amount: 200000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: '"КРЕДИТ ""ЗА 30 МИНУТ"""',
        type: 'потребительский',
        min_procent: 29.9,
        max_procent: 34.93,
        min_amount: 2000,
        max_amount: 100000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'КРЕДИТ ОНЛАЙН',
        type: 'потребительский',
        min_procent: 29.9,
        max_procent: 35.05,
        min_amount: 2000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 12,
      },
      {
        bank_name: 'ЗАО «ФИНКА bank_name»',
        name: 'КРЕДИТ ОНЛАЙН',
        type: 'потребительский',
        min_procent: 31,
        max_procent: 35.8,
        min_amount: 5000,
        max_amount: 15000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «ФИНКА bank_name»',
        name: 'Потребительский кредит',
        type: 'потребительский',
        min_procent: 27,
        max_procent: 30.6,
        min_amount: 5000,
        max_amount: 1000000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит за час',
        type: 'Потребительский',
        min_procent: 28.5,
        max_procent: 33.91,
        min_amount: 5000,
        max_amount: 300000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на образование',
        type: 'Потребительский',
        min_procent: 25.9,
        max_procent: 30.47,
        min_amount: 5000,
        max_amount: 1500000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на образование',
        type: 'Потребительский',
        min_procent: 13.9,
        max_procent: 15.9,
        min_amount: 50,
        max_amount: 17000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Тепло и Комфорт',
        type: 'Зеленый',
        min_procent: 26.9,
        max_procent: 33.79,
        min_amount: 50000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Тепло и Комфорт',
        type: 'Зеленый',
        min_procent: 15.9,
        max_procent: 18.72,
        min_amount: 500,
        max_amount: 5700,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 24.9,
        max_procent: 29.01,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Агрокредит',
        type: 'агрокредит',
        min_procent: 24.9,
        max_procent: 29.03,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Агрокредит',
        type: 'агрокредит',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Строительство и ремонт',
        type: 'Потребительский',
        min_procent: 24.9,
        max_procent: 29.03,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Строительство и ремонт',
        type: 'Потребительский',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'На развитие бизнеса',
        type: 'Бизнес',
        min_procent: 24.9,
        max_procent: 29.03,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'На развитие бизнеса',
        type: 'Бизнес',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на рефинансирование',
        type: 'Потребительский',
        min_procent: 27.5,
        max_procent: 32.65,
        min_amount: 10000,
        max_amount: 5000000,
        timeframe_min: 3,
        timeframe_max: 84,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на рефинансирование',
        type: 'Потребительский',
        min_procent: 16.5,
        max_procent: 19.68,
        min_amount: 100,
        max_amount: 57000,
        timeframe_min: 3,
        timeframe_max: 84,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 32,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 3000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Бизнес кредит',
        type: 'Бизнес',
        min_procent: 32,
        max_procent: 35,
        min_amount: 50000,
        max_amount: 3000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Агрокредит',
        type: 'Агрокредит',
        min_procent: 32,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 3000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Экспресс',
        type: 'Потребительский',
        min_procent: 35,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 18,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Ылдам',
        type: 'Потребительский',
        min_procent: 35,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 30000,
        timeframe_min: 1,
        timeframe_max: 12,
      },
      {
        bank_name: 'UCH credit',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 31,
        max_procent: 32,
        min_amount: 100000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'UCH credit',
        name: 'Особый',
        type: 'Потребительский',
        min_procent: 24,
        max_procent: 28,
        min_amount: 700000,
        max_amount: 1000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'UCH credit',
        name: 'Бизнес кредит',
        type: 'Бизнес',
        min_procent: 28,
        max_procent: 31,
        min_amount: 100000,
        max_amount: 1000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'НурКенненКредит',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 28,
        max_procent: 36,
        min_amount: 50000,
        max_amount: 500000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'НурКенненКредит',
        name: 'Коммерческий кредит',
        type: 'Бизнес',
        min_procent: 26,
        max_procent: 30,
        min_amount: 200000,
        max_amount: 1000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АБН',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 29,
        max_procent: 38,
        min_amount: 30000,
        max_amount: 2500000,
        timeframe_min: 1,
        timeframe_max: 84,
      },
      {
        bank_name: 'АБН',
        name: 'Бизнес Кредит',
        type: 'Бизнес',
        min_procent: 30,
        max_procent: 38,
        min_amount: 30000,
        max_amount: 5000000,
        timeframe_min: 1,
        timeframe_max: 84,
      },
      {
        bank_name: 'АБН',
        name: 'Сельскохозяйственный кредит',
        type: 'агрокредит',
        min_procent: 29,
        max_procent: 38,
        min_amount: 30000,
        max_amount: 5000000,
        timeframe_min: 1,
        timeframe_max: 84,
      },
      {
        bank_name: 'АБН',
        name: 'TEZ-буюм',
        type: 'Потребительский',
        min_procent: 38,
        max_procent: 48,
        min_amount: 10000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
    ],
    questData: [
      {
        title: 'Что нужно знать перед тем, как взять потребительский кредит?',
        text: '',
      },
      { title: 'Эксперты направления Кредиты', text: '' },
      { title: 'Задать вопрос о кредитах', text: '' },
    ],
  },
  RefinancingCredits: {
    sliderItems: [
      ekspo,
      spm,
      psb,
      sber,
      tinkoff,
      norvik,
      norvik,
      ekspo,
      spm,
      psb,
      sber,
      tinkoff,
      norvik,
      norvik,
    ],
    ourData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Вы заполняете единую анкету – нужно всего 3 минуты.',
      },
      {
        img: w_2,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Вы заполняете единую анкету – нужно всего 3 минуты.',
      },
      {
        img: w_3,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Вы заполняете единую анкету – нужно всего 3 минуты.',
      },
      {
        img: w_4,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Вы заполняете единую анкету – нужно всего 3 минуты.',
      },
    ],
    questData: [
      {
        title: 'Как я могу снизить плетеж с помощью рефинансирования?',
        text: '',
      },
      { title: 'Какие кредиты я могу рефинансировать?', text: '' },
      { title: 'Какие документы мне понадобятся?', text: '' },
    ],
  },
  CreditRating: {
    worksData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Оставьте Заявку',
        text: 'Заполните онлайн-форму на VseBanki.kg. Вам потребуется указать свои основные контактные данные. Этот шаг займет всего несколько минут',
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Подтверждение вашей заявки',
        text: 'После отправки заявки наша команда свяжется с вами для подтверждения получения заявки и уточнения необходимых деталей.',
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Индивидуальная консультация и рекомендации',
        text: 'В завершение процесса мы проведем индивидуальную консультацию, в ходе которой обсудим общие принципы кредитного рейтинга и возможные стратегии для его улучшения. Вы получите полезные советы, основанные на общих практиках и стандартах в области кредитования.',
      },
    ],
    questData: [
      {
        title: 'Что такое кредитный рейтинг и почему он важен?',
        text: 'Кредитный рейтинг — это оценка вашей кредитоспособности, основанная на вашей финансовой истории. Он важен, так как влияет на вашу способность получать кредиты и на условия кредитования. Чем выше ваш рейтинг, тем лучшие условия кредита вы можете получить.',
      },
      {
        title: 'Как я могу улучшить свой кредитный рейтинг?',
        text: 'Улучшение кредитного рейтинга возможно путем своевременной оплаты кредитов, снижения общего уровня долгов и избегания частых запросов на кредит. На VseBanki.kg мы предоставляем индивидуальные советы для улучшения вашего рейтинга.',
      },
      {
        title: 'Нужно ли мне предоставлять личные финансовые данные для расчета рейтинга?',
        text: 'Нет, для начальной оценки вашего кредитного рейтинга на VseBanki.kg личные финансовые данные не требуются. Мы проводим общий анализ и предоставляем рекомендации на основе общедоступной информации.'
      },
      {
        title: 'Сколько стоит воспользоваться вашим сервисом по расчету кредитного рейтинга?',
        text: 'Наш сервис по расчету кредитного рейтинга на VseBanki.kg предоставляется бесплатно. Мы стремимся помочь вам улучшить ваше финансовое положение, предоставляя качественные консультации без скрытых платежей.'
      },
    ],
  },
  CreditCardsPage: {
    info: [{ title: 'Оформление кредитной карты онлайн', text: '' }],
    compilationData: [
      { img: smar, name: 'Онлайн заявка на карту' },
      { img: sprav, name: 'Без справок' },
      { img: calendar, name: 'Льготный период до 1100 дней' },
      { img: scooter, name: 'Карты с доставкой' },
      { img: card, name: 'Union Pay' },
      { img: sale, name: 'Ставка от 0%' },
      { img: flame, name: 'Сash Back до 10%' },
      { img: money_i, name: 'Большой лимит' },
      { img: globus, name: 'Для путешествий' },
      { img: w_4, name: 'Бонусные карты' },
      { img: credit, name: 'Бесплатные карты' },
      { img: card, name: 'Visa' },
      { img: card, name: 'MasterCard' },
      { img: credit, name: 'Бесплатное снятие' },
      { img: credit, name: 'Бесплатное обслуживание' },
    ],
  },
  Autocredits: {
    worksData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Определитесь с суммой кредита на авто и заполните единую анкету – нужно всего 3 минуты.',
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Анализ банков',
        text: 'Мы бесплатно подберем банки, которые с наибольшей вероятностью одобрят вам кредит.',
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Выбор предложения',
        text: 'Вы выбираете удобный вариант: с КАСКО или без, кредит наличными или автокредит.',
      },
      {
        img: w_4,
        title: 'Этап 4',
        sub: 'Кредит на авто',
        text: 'Получаете кредит на автомобиль на выгодных условиях.',
      },
    ],
    questData: [
      { title: 'Автомобиль в кредит без ограничений', text: '' },
      { title: 'Страхование при покупке автомобиля в кредит', text: '' },
      { title: 'Проверьте автомобиль перед покупкой', text: '' },
    ],
  },
  InstallmentPage: {
    questData: [
      { title: 'Какие карты самые выгодные?', text: '' },
      { title: 'Сколько банков предоставляют карты рассрочки?', text: '' },
      { title: 'Сколько предложений актуально на ХХ.ХХ.2023?', text: '' },
    ],
    advantages: [
      { title: 'Онлайн-заявка на карту', text: '185 предложений от 75 банков' },
      { title: 'Без справок', text: '185 предложений от 75 банков' },
      { title: 'Льготный период ', text: '185 предложений от 75 банков' },
      { title: 'Карты с доставкой', text: '14 предложений от 11 банков' },
    ],
  },
  DebitCardsPage: {
    questData: [
      {
        title: 'Подробнее о дебетовых картах',
        text: `Vsebanki.kg представляет собой удобный финансовый маркетплейс Кыргызстана,
         где каждый может выбрать дебетовую карту, соответствующую потребностям.
          Эти карты подходят для оплаты покупок и услуг, снятия наличных в банкоматах и кассах,
           а также для других финансовых операций после активации карты.
            В ассортименте есть как анонимные, так и персонализированные карты.
             Персонализированные карты могут быть оформлены в индивидуальном дизайне.
              Анонимные карты не содержат имени владельца и выдаются сразу при обращении.
              <br /> 
              </br>
              Выбор подходящего продукта зависит от целей использования, 
              тарифа и других параметров, важных для клиента. 
              Сервис Vsebanki.kg предлагает сравнить более 200 предложений от различных банков,
               учитывая стоимость выпуска карты, ее функционал и технологические особенности. 
               Сравнение дебетовых карт поможет выбрать оптимальный вариант.   
               </br>
               </br>
               Карту можно получить в офисе банка или заказать онлайн, 
               что позволяет сэкономить время. Многие банки предлагают оформление онлайн-заявок 
               сразу в несколько кредитно-финансовых учреждений.
                Готовую карту нужно забрать в выбранном отделении.
                <br/>
               </br>
                При выборе карты важно учитывать стоимость обслуживания. 
                В Vsebanki.kg можно найти информацию о расходах на выпуск, годовом или ежемесячном обслуживании, 
                размере страхового депозита и первоначальном взносе. 
                На сайте также доступен раздел с бесплатными вариантами карт.
              `
      }
    ],

    compilationData: [
      { img: smar, name: 'С онлайн-заявкой' },
      { img: scooter, name: 'Карты с доставкой' },
      { img: sale, name: 'До 12% на остаток' },
      { img: sprav, name: 'Специальные предложения' },
      { img: card, name: 'Union Pay' },
      { img: card, name: 'МИР' },
      { img: card, name: 'VISA' },
      { img: card, name: 'MasterCard' },
      { img: card, name: 'Кобрендовые карты' },
      { img: card, name: 'Зарплатные карты' },
      { img: flame, name: 'Сash Back до 15%' },
      { img: money_i, name: 'Большой лимит' },
      { img: globus, name: 'Для путешествий' },
      { img: globus, name: 'Для покупок' },
      { img: globus, name: 'Для самозанятых' },
      { img: globus, name: 'Для детей' },
      { img: w_4, name: 'Бонусные карты' },
      { img: credit, name: 'Бесплатные карты' },
      { img: credit, name: 'Бесплатное снятие' },
      { img: credit, name: 'Бесплатное обслуживание' },
    ],
  },
  SelectCardsPage: {
    questData: [
      {
        title: 'Какие виды карт можно оформить через сервис?',
        text: 'Через Мастер подбора карт можно оформить как кредитную, так и дебетовую карту. '
      },
      {
        title: 'Безопасно ли оставлять данные на vsebanki.kg ?',
        text: `Да. Мы напрямую сотрудничаем с банками и больше никуда не передаем ваши данные.
         Мы заботимся о своих клиентах и дорожим их персональной информацией.`,
      },
      {
        title: 'Сколько времени займет заполнение заявки?',
        text: 'Процесс достаточно быстрый, он займет у вас 1-3 минуты'
      },
      {
        title: 'Какие данные понадобятся для подачи заявки на карту?',
        text: `В начале мы определим, какая карта вам нужна — кредитная или дебетовая.
         Для дебетовой карты нам понадобятся лишь ваши контактные данные.
         Для кредитной карты попросим указать желаемый размер лимита и предоставить паспортные данные`,
      },
    ],
    ourData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Определение Ваших Финансовых Потребностей',
        text: 'Начните с заполнения простой формы, где вы укажете свои основные финансовые требования и предпочтения. ',
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Анализ и Подбор Подходящих Предложений',
        text: 'На основе ваших данных наш алгоритм анализирует доступные на рынке карты и выбирает те, которые наилучшим образом соответствуют вашим критериям',
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Представление Персонализированных Предложений',
        text: 'Мы предоставим вам список карт, отобранных специально для вас.',
      },
      {
        img: w_4,
        title: 'Этап 4',
        sub: 'Удобное Оформление Заявки',
        text: `После выбора подходящей карты вы можете непосредственно через наш сервис подать заявку в банк.
         Мы упрощаем процесс оформления, делая его быстрым и понятным, чтобы вы могли без проблем получить желаемую карту.`,
      },
    ],

    ourStrongs: [
      {
        num: '01',
        title: "Персонализированный Подход к Каждому Клиенту",
        sub: ` Наш сервис выделяется индивидуальным подходом к каждому клиенту.
         Мы тщательно анализируем ваши финансовые потребности и предпочтения,
         чтобы предложить наиболее подходящие и выгодные финансовые решения`
      },
      {
        num: '02',
        title: "Использование Передовых Технологий",
        sub: `Мы применяем последние достижения в области искусственного интеллекта и анализа больших данных,
         чтобы обеспечить точный и эффективный подбор финансовых продуктов.
          Эти технологии позволяют нам быстро обрабатывать большой объем информации и предоставлять актуальные и выгодные предложения,
          что значительно экономит время и ресурсы наших клиентов.
        `
      }
    ]
  },
  SpecialOffersCards: {
    choises: [
      { name: 'Все', active: true, link: '' },
      { name: 'Вклады', active: false, link: '/deposits/special-offers' },
      { name: 'Ипотека', active: false, link: '/ipoteka/special-offers' },
      { name: 'Кредитные карты', active: false, link: '/cards/special-offers' },
      { name: 'Дебетовые карты', active: false, link: '/cards/special-offers' },
      { name: 'Инвестиции', active: false, link: '/investment/special-offers' },
      { name: 'Страхование', active: false, link: '/investment/special-offers' },
    ],
    questData: [
      { title: 'Что такое специальные предложения?', text: '' },
      {
        title: 'Какие уникальные условия могут быть доступны по специальным предложениям?',
        text: '',
      },
      { title: 'Как получить промокод?', text: '' },
      { title: 'Как воспользоваться промокодом?', text: '' },
      { title: 'Какой срок действия промокода?', text: '' },
      { title: 'Как рассчитать доход по специальным  по вкладу?', text: '' },
      { title: 'Что такое «Акции банков»?', text: '' },
      {
        title: 'Как уточнить условия по специальным предложениям и акциям банков?',
        text: '',
      },
      { title: 'Вклады по специальным предложениям застрахованы?', text: '' },
    ],
  },
  CreditsIpotekaPage: {
    compilationData: [
      { img: saleSquare, name: 'Льготная ипотека' },
      { img: ipoteka, name: 'Коммерческая недвижимость' },
      { img: building, name: 'Квартира на вторичном пынке' },
      { img: family, name: 'Семейная ипотека' },
      { img: laptop, name: 'Онлайн-заявка на ипотеку' },
      { img: wave, name: 'Рефинансирование ипотеки' },
      { img: credit, name: 'Без подтверждения дохода' },
      { img: template, name: 'На долю в квартире' },
      { img: raket, name: 'Ипотека для IT' },
      { img: check, name: 'Ипотека со скидкой от застройщиков' },
      { img: target, name: 'Военная политика' },
      { img: heart, name: 'Многодетным семьям' },
    ],
    questData: [
      { title: 'Эксперты об ипотеке', text: '' },
      { title: 'Ипотека', text: '' },
      { title: 'Ипотечные кредиты в городах', text: '' },
      { title: 'Предложения в банках', text: '' },
      { title: 'Эксперты направления ипотечных кредитов', text: '' },
      { title: 'Задать вопрос об ипотеке', text: '' },
    ],
  },
  InsuranceIpoteka: {
    ourData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Для рассчета цен наших партнеров, укажите необходимые данные в анкете.',
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Сделайте свой выбор',
        text: 'Мы покажем вам все доступные варианты. Вам останется только выбрать лучший, заполнить анкету и оплатить полис онлайн.',
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Получите полис на e-mail',
        text: 'Электронный полис придет на почту через несколько минут после оплаты – его можно сразу отправить в банк.',
      },
    ],
    questData: [
      { title: 'Туристическая страховка по виду', text: '' },
      { title: 'Виды ипотечного страхования', text: '' },
      { title: 'Каско по виду', text: '' },
      { title: 'Виды ОСАГО:', text: '' },
    ],
  },
  SpecialOffersIpotekaPage: {
    questData: [
      { title: 'Что такое специальные предложения?', text: '' },
      {
        title: 'Какие уникальные условия могут быть доступны по специальным предложениям?',
        text: '',
      },
      { title: 'Как получить промокод?', text: '' },
      { title: 'Как воспользоваться промокодом?', text: '' },
      { title: 'Какой срок действия промокода?', text: '' },
      { title: 'Как рассчитать доход по специальным  по вкладу?', text: '' },
      { title: 'Что такое «Акции банков»?', text: '' },
      {
        title: 'Как уточнить условия по специальным предложениям и акциям банков?',
        text: '',
      },
      { title: 'Вклады по специальным предложениям застрахованы?', text: '' },
    ],
  },
  RefinanceIpotekaPage: {
    questData: [
      { title: 'Эксперты по ипотеке', text: '' },
      { title: 'Предложения в банках', text: '' },
      { title: 'Каталоги', text: '' },
      { title: 'Вопрос об ипотеке эксперту ', text: '' },
    ],
  },
  CalculateCredit: {
    questData: [
      {
        title: 'Что нужно знать о кредитном калькуляторе, чтобы рассчитать кредит?',
        text: '',
      },
    ],
  },
  MicroLoans: {
    microLoansBanks: [
      {
        bank_name: 'ОАО «Кыргызкоммерцbank_name»',
        name: 'Кредит « На неотложные нужды»',
        type: 'Потребительский',
        min_procent: 21,
        max_procent: 24,
        min_amount: 250000,
        max_amount: 250000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Оптима bank_name»',
        name: 'ТЕЗ кредит',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 29.02,
        min_amount: 3000,
        max_amount: 250000,
        timeframe_min: 2,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «ЭкоИсламикbank_name»',
        name: 'Потребительское финансирование до 24 месяцев',
        type: 'потребительский',
        min_procent: 8.3,
        max_procent: 17.6,
        min_amount: 3000,
        max_amount: 250000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Азии»',
        name: '"Кредит ""ЭКСПРЕСС-250"""',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 29.81,
        min_amount: 7000,
        max_amount: 300000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ЗАО «bank_name Азии»',
        name: '"Кредит ""Легко"""',
        type: 'потребительский',
        min_procent: 28,
        max_procent: 32.58,
        min_amount: 10000,
        max_amount: 100000,
        timeframe_min: 3,
        timeframe_max: 18,
      },
      {
        bank_name: 'ЗАО «bank_name Азии»',
        name: 'Автокредит',
        type: 'Автокредит',
        min_procent: 23,
        max_procent: 25.5,
        min_amount: 100000,
        max_amount: 700000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ОАО «БАКАЙ bank_name»',
        name: 'Супер-экспресс',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 30,
        min_amount: 10000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ОАО «БАКАЙ bank_name»',
        name: 'Тунук',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 30,
        min_amount: 5000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Халык bank_name Кыргызстан»',
        name: 'Потребительский кредит «На неотложные нужды Экспресс»',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 27.64,
        min_amount: 1000,
        max_amount: 250000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Халык bank_name Кыргызстан»',
        name: 'Потребительский кредит «На неотложные нужды Экспресс»',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 27.64,
        min_amount: 300,
        max_amount: 3000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Халык bank_name Кыргызстан»',
        name: 'Кредит «Народный-онлайн» для участников зарплатного проекта',
        type: 'потребительский',
        min_procent: 24,
        max_procent: 26.42,
        min_amount: 1000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «ФинансКредитbank_name»',
        name: 'Вторая зарплата - на карту',
        type: 'потребительский',
        min_procent: 26,
        max_procent: 28,
        min_amount: 1,
        max_amount: 250000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
      {
        bank_name: 'ОАО «Айыл bank_name»',
        name: '"""Ыңгайлуу"""',
        type: 'потребительский',
        min_procent: 24,
        max_procent: 28,
        min_amount: 5000,
        max_amount: 300000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'ЛЬГОТНЫЕ ПОТРЕБИТЕЛЬСКИЕ КРЕДИТЫ (ДЛЯ БАТКЕНСКОЙ ОБЛАСТИ)',
        type: 'потребительский',
        min_procent: 18,
        max_procent: 19.7,
        min_amount: 5000,
        max_amount: 2000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'Агрокредит',
        type: 'агрокредит',
        min_procent: 27.5,
        max_procent: 31.1,
        min_amount: 5000,
        max_amount: 150000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'Потребительский кредит',
        type: 'потребительский',
        min_procent: 25,
        max_procent: 28.3,
        min_amount: 5000,
        max_amount: 2000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: '"КРЕДИТ ""ТОВАРЫ В РАССРОЧКУ"""',
        type: 'потребительский',
        min_procent: 29.9,
        max_procent: 34.93,
        min_amount: 2000,
        max_amount: 200000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: '"КРЕДИТ ""ЗА 30 МИНУТ"""',
        type: 'потребительский',
        min_procent: 29.9,
        max_procent: 34.93,
        min_amount: 2000,
        max_amount: 100000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'ЗАО «bank_name Компаньон»',
        name: 'КРЕДИТ ОНЛАЙН',
        type: 'потребительский',
        min_procent: 29.9,
        max_procent: 35.05,
        min_amount: 2000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 12,
      },
      {
        bank_name: 'ЗАО «ФИНКА bank_name»',
        name: 'КРЕДИТ ОНЛАЙН',
        type: 'потребительский',
        min_procent: 31,
        max_procent: 35.8,
        min_amount: 5000,
        max_amount: 15000,
        timeframe_min: 3,
        timeframe_max: 24,
      },
      {
        bank_name: 'ЗАО «ФИНКА bank_name»',
        name: 'Потребительский кредит',
        type: 'потребительский',
        min_procent: 27,
        max_procent: 30.6,
        min_amount: 5000,
        max_amount: 1000000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит за час',
        type: 'Потребительский',
        min_procent: 28.5,
        max_procent: 33.91,
        min_amount: 5000,
        max_amount: 300000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на образование',
        type: 'Потребительский',
        min_procent: 25.9,
        max_procent: 30.47,
        min_amount: 5000,
        max_amount: 1500000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на образование',
        type: 'Потребительский',
        min_procent: 13.9,
        max_procent: 15.9,
        min_amount: 50,
        max_amount: 17000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Тепло и Комфорт',
        type: 'Зеленый',
        min_procent: 26.9,
        max_procent: 33.79,
        min_amount: 50000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Тепло и Комфорт',
        type: 'Зеленый',
        min_procent: 15.9,
        max_procent: 18.72,
        min_amount: 500,
        max_amount: 5700,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 24.9,
        max_procent: 29.01,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Агрокредит',
        type: 'агрокредит',
        min_procent: 24.9,
        max_procent: 29.03,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Агрокредит',
        type: 'агрокредит',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Строительство и ремонт',
        type: 'Потребительский',
        min_procent: 24.9,
        max_procent: 29.03,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Строительство и ремонт',
        type: 'Потребительский',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'На развитие бизнеса',
        type: 'Бизнес',
        min_procent: 24.9,
        max_procent: 29.03,
        min_amount: 10000,
        max_amount: 25000000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'На развитие бизнеса',
        type: 'Бизнес',
        min_procent: 13.9,
        max_procent: 15.57,
        min_amount: 100,
        max_amount: 280000,
        timeframe_min: 3,
        timeframe_max: 120,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на рефинансирование',
        type: 'Потребительский',
        min_procent: 27.5,
        max_procent: 32.65,
        min_amount: 10000,
        max_amount: 5000000,
        timeframe_min: 3,
        timeframe_max: 84,
      },
      {
        bank_name: 'Салым Финанс',
        name: 'Кредит на рефинансирование',
        type: 'Потребительский',
        min_procent: 16.5,
        max_procent: 19.68,
        min_amount: 100,
        max_amount: 57000,
        timeframe_min: 3,
        timeframe_max: 84,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 32,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 3000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Бизнес кредит',
        type: 'Бизнес',
        min_procent: 32,
        max_procent: 35,
        min_amount: 50000,
        max_amount: 3000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Агрокредит',
        type: 'Агрокредит',
        min_procent: 32,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 3000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Экспресс',
        type: 'Потребительский',
        min_procent: 35,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 18,
      },
      {
        bank_name: 'АЮ Финанс',
        name: 'Ылдам',
        type: 'Потребительский',
        min_procent: 35,
        max_procent: 35,
        min_amount: 10000,
        max_amount: 30000,
        timeframe_min: 1,
        timeframe_max: 12,
      },
      {
        bank_name: 'UCH credit',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 31,
        max_procent: 32,
        min_amount: 100000,
        max_amount: 500000,
        timeframe_min: 3,
        timeframe_max: 36,
      },
      {
        bank_name: 'UCH credit',
        name: 'Особый',
        type: 'Потребительский',
        min_procent: 24,
        max_procent: 28,
        min_amount: 700000,
        max_amount: 1000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'UCH credit',
        name: 'Бизнес кредит',
        type: 'Бизнес',
        min_procent: 28,
        max_procent: 31,
        min_amount: 100000,
        max_amount: 1000000,
        timeframe_min: 3,
        timeframe_max: 60,
      },
      {
        bank_name: 'НурКенненКредит',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 28,
        max_procent: 36,
        min_amount: 50000,
        max_amount: 500000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'НурКенненКредит',
        name: 'Коммерческий кредит',
        type: 'Бизнес',
        min_procent: 26,
        max_procent: 30,
        min_amount: 200000,
        max_amount: 1000000,
        timeframe_min: 1,
        timeframe_max: 60,
      },
      {
        bank_name: 'АБН',
        name: 'Потребительский кредит',
        type: 'Потребительский',
        min_procent: 29,
        max_procent: 38,
        min_amount: 30000,
        max_amount: 2500000,
        timeframe_min: 1,
        timeframe_max: 84,
      },
      {
        bank_name: 'АБН',
        name: 'Бизнес Кредит',
        type: 'Бизнес',
        min_procent: 30,
        max_procent: 38,
        min_amount: 30000,
        max_amount: 5000000,
        timeframe_min: 1,
        timeframe_max: 84,
      },
      {
        bank_name: 'АБН',
        name: 'Сельскохозяйственный кредит',
        type: 'агрокредит',
        min_procent: 29,
        max_procent: 38,
        min_amount: 30000,
        max_amount: 5000000,
        timeframe_min: 1,
        timeframe_max: 84,
      },
      {
        bank_name: 'АБН',
        name: 'TEZ-буюм',
        type: 'Потребительский',
        min_procent: 38,
        max_procent: 48,
        min_amount: 10000,
        max_amount: 100000,
        timeframe_min: 1,
        timeframe_max: 24,
      },
    ],
    chooseIntro: [
      { name: 'Не важна сумма', active: true },
      { name: '5 000 — 15 000 ₽', active: false },
      { name: '15 000 — 30 000 ₽', active: false },
      { name: '30 000 — 100 000 ₽', active: false },
    ],
    slideItems: [
      ekspo,
      spm,
      psb,
      sber_full,
      tinkoff,
      norvik,
      norvik,
      ekspo,
      spm,
      psb,
      sber_full,
      tinkoff,
      norvik,
      norvik,
    ],
    loans: [
      { img: ifk, title: 'ИФК Солид', sub: 'Лицензия №488-39208-08' },
      { img: mic1, title: 'Локо-Банк', sub: 'Лицензия №488-39208-08' },
      { img: mic2, title: 'Локо-Банк', sub: 'Лицензия №488-39208-08' },
    ],
    catalogData: [
      { name: 'До зарплаты', img: ic1 },
      { name: 'Деньги по паспорту', img: ic2 },
      { name: 'Наличными', img: ic3 },
      { name: 'С промокодами', img: ic4 },
      { name: 'На карту', img: ic5 },
      { name: 'Без процентов', img: ic6 },
      { name: 'Займ онлайн', img: ic7 },
      { name: 'Экспресс-займ', img: ic8 },
      { name: 'Под залог авто', img: ic9 },
      { name: 'На большую сумму', img: ic10 },
      { name: 'На карту онлайн', img: ic11 },
    ],
    questData: [
      { title: 'Где взять микрозайм на карту онлайн', text: '' },
      { title: 'Эксперты направления микрозаймов', text: '' },
      { title: 'Задать вопрос о микрозаймах', text: '' },
    ],
  },
  GetLoan: {
    worksData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Заполнить анкету',
        text: 'Определитесь с суммой кредита на авто и заполните единую анкету – нужно всего 3 минуты.',
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Выберите лучшее',
        text: 'Мы бесплатно подберем банки, на основе вашего кредитного рейтинга.',
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Заявка в один клик',
        text: 'Вы выбираете предложения, отправляете заявки и получаете решение онлайн.',
      },
      {
        img: w_4,
        title: 'Этап 4',
        sub: 'Деньги у вас на карте',
        text: 'МФО перечислит деньги на вашу карту через 5 минут.',
      },
    ],
  },
  DepositsPage: {
    communicate: [
      {
        numb: '01',
        sub: 'Выберите интересующее предложение',
        text: `На нашем сайте вы найдете множество эксклюзивных предложений от ведущих банков и финансовых учреждений Кыргызстана.
         Просто просмотрите наш обширный каталог, чтобы найти то, 
         что наилучшим образом соответствует вашим финансовым потребностям и целям.
          Будь то выгодные вклады, высокий кэшбэк на кредитные карты или специальные условия по страхованию,
           у нас есть всё для удовлетворения ваших потребностей`
      },
      {
        numb: '02',
        sub: 'Оставьте заявку',
        text: `Заполнение заявки на нашем сайте — это простой и быстрый способ начать путь к получению выгодных финансовых услуг.
         Укажите свои личные данные и выберите интересующее вас предложение,
          и наша команда обработает ваш запрос в кратчайшие сроки.
           Мы гарантируем конфиденциальность и безопасность предоставленной вами информации.
            Оставьте заявку сейчас, чтобы воспользоваться эксклюзивными условиями,
             доступными только через наш сайт
        `
      },
      {
        numb: '03',
        sub: 'Мы с вами свяжемся',
        text: `После того как вы оставите заявку, 
        наша команда профессионалов оперативно обработает ее и свяжется с вами.
         Мы уделим внимание вашим индивидуальным потребностям и ответим на все ваши вопросы,
          помогая вам сделать информированный выбор.
           Наша цель — обеспечить вам комфортное и эффективное обслуживание,
            чтобы вы могли максимально выгодно воспользоваться нашими специальными предложениями
        `
      }
    ]

  },
  MortgagePage: {
    choices: [
      { name: 'Ипотека', active: true, href: '' },
      { name: 'Рефинансирование', active: false, href: '/ipoteka/refinance' },
      { name: 'Страхование', active: false, href: '/insurance/ipot-ins' },
    ],
    offersBanks: [
      {
        name: 'Локо-Банк',
        sub: 'Добро Пожаловать. Локо',
        stavka: '10,10',
        time: '',
        money: '14 875',
        img: loco,
        charcs: ['Ставка указана со скидкой'],
        btn: 'Отправить заявку',
        count: 'Ещё 12',
      },
      {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: '6,80',
        time: '',
        money: '16 401',
        img: sber,
        charcs: [''],
        btn: 'Отправить заявку',
        count: 'Ещё 12',
      },
      {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: '6,80',
        time: '',
        money: '16 401',
        img: sber,
        charcs: [''],
        btn: 'Отправить заявку',
        count: 'Ещё 12',
      },
      {
        name: 'Сбербанк',
        sub: 'Накопительный счет',
        stavka: '6,80',
        time: '',
        money: '16 401',
        img: sber,
        charcs: [''],
        btn: 'Отправить заявку',
        count: 'Ещё 12',
      },
    ],
    questData: [
      { title: 'Эксперты об ипотеке', text: '' },
      { title: 'Ипотека', text: '' },
      { title: 'Ипотечные кредиты в городах', text: '' },
      { title: 'Предложения в банках', text: '' },
      { title: 'Каталоги', text: '' },
      { title: 'Эксперты направления ипотечных кредитов', text: '' },
      { title: 'Задать вопрос об ипотеке', text: '' },
    ],
  },
  InsurancePage: {
    introChoose: [
      { name: 'ОСАГО', active: true },
      { name: 'Каско', active: false },
      { name: 'Страхование ипотеки', active: false },
      { name: 'Путешествие', active: false },
      { name: 'Жизнь', active: false },
    ],
    banksSlideItems: [
      ekspo,
      spm,
      psb,
      sber_full,
      tinkoff,
      norvik,
      ekspo,
      spm,
      psb,
      sber_full,
      tinkoff,
      norvik,
    ],
    specialOffers: [
      {
        id: 1,
        name: 'Кэшбэк 20% за страхование ипотеки',
        img: img_2,
        bankImg: lines,
        bonus: 'Оформите страхование ипотеки и получите кэшбэк 20%',
        title_1: 'Кэшбек от',
        count1: '20%',
        title_2: 'Кэшбек до',
        count2: '4000 руб.',
      },
      {
        id: 2,
        name: 'Получите 1000 рублей на топливо',
        img: img_2,
        bankImg: lines,
        bonus: 'Купите ОСАГО с выгодой до 74%',
        title_1: 'На топливо',
        count1: '1000 руб.',
        title_2: 'Срок акции',
        count2: 'до 31.07.2023',
      },
      {
        id: 3,
        name: '4 000 ₽ для вашего авто',
        img: img_2,
        bankImg: lines,
        bonus: 'Оформите каско с выгодой до 90%',
        title_1: 'Срок действия акции',
        count1: 'до 31.09.2023',
        title_2: '',
        count2: '',
      },
    ],
    questData: [
      { title: 'Туристическая страховка по виду', text: '' },
      { title: 'Виды ипотечного страхования', text: '' },
      { title: 'Каско по виду', text: '' },
      { title: 'Виды ОСАГО:', text: '' },
    ],
  },
  InvestPage: {
    introChoose: [
      { name: 'С чего начать', active: true, href: '/investment' },
      { name: 'Подобрать брокера', active: false, href: '/investment/select-broker' },
      { name: 'Что купить', active: false, href: '/investment' },
      { name: 'Аналитика', active: false, href: '/investment' },
      { name: 'Специальные предложения', active: false, href: '/investment/special-offers' },
      { name: 'Обучение', active: false, href: '/investment' },
      { name: 'Избранное', active: false, href: '/investment' },
    ],
    bankItems: [ekspo, spm, psb, sber_full, tinkoff, norvik],
    stocks: [
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
    ],
    bonds: [
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
    ],
    offersMoth: [
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
    ],
    questData: [
      { title: 'Подробнее', text: '' },
      { title: 'Инвестиции для физических лиц', text: '' },
    ],
  },
  DiscountIpotekaPage: {
    questData: [
      {
        title: 'Ипотека со скидкой от застройщиков, получить онлайн ипотеку со скидкой в 2023 году',
        text: '',
      },
      { title: 'Ипотечные кредиты в городах', text: '' },
      { title: 'Предложения в банках', text: '' },
      { title: 'Каталоги', text: '' },
      { title: 'Дополнительно', text: '' },
      { title: 'Эксперты направления ипотечных кредитов', text: '' },
    ],
  },
  OSAGO: {
    worksData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Сравните предложения',
        text: 'Выберите ОСАГО с выгодой до 74%',
        w_text: 333,
        height: 160,
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Оплатите полис ОСАГО картой',
        text: 'ВЫ платите напрямую страховой.',
        w_text: 333,
        height: 160,
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Получите полис на e-mail',
        text: 'Электронный полис придет на почту через несколько минут после оплаты – его можно сразу отправить в банк.',
        w_text: 333,
        height: 160,
      },
    ],
    favouritesQuestion: [
      { title: 'Что такое ОСАГО?', text: '' },
      { title: 'Какие документы нужны для оформления полиса ОСАГО?', text: '' },
      {
        title: 'Чем отличается электронный полис е-ОСАГО от обычного бумажного полиса ОСАГО?',
        text: '',
      },
      { title: 'Что будет, если ездить без полиса ОСАГО?', text: '' },
      { title: 'Что влияет на стоимость ОСАГО?', text: '' },
      { title: 'От чего НЕ страхует ОСАГО?', text: '' },
      { title: 'Обязательно ли оформлять ОСАГО?', text: '' },
      { title: 'Что такое неограниченное и ограниченное ОСАГО?', text: '' },
      { title: 'В каких регионах действителен страхования ОСАГО?', text: '' },
      {
        title: 'В каких регионах действителен полис страхования ОСАГО?',
        text: '',
      },
      {
        title: 'По какой причине удерживается РВД 23% при расторжении договора ОСАГО?',
        text: '',
      },
      {
        title: 'В какой срок необходимо застраховать купленный автомобиль?',
        text: '',
      },
      {
        title: 'Где посмотреть период использования полиса и срок страхования?',
        text: '',
      },
      { title: 'Что делать с ОСАГО после покупки?', text: '' },
      { title: 'Что делать если случилось ДТП?', text: '' },
      {
        title: 'Что такое европротокол? Получу ли я выплату по ОСАГО, если оформлю ДЛП по европротоколу?',
        text: '',
      },
      {
        title: 'Порядок возмещения ОСАГО: куда обращаться за возмещением по ОСАГО?',
        text: '',
      },
      { title: 'Что относится к страховому случаю?', text: '' },
      { title: 'Сколько ущерба покрывает ОСАГО?', text: '' },
      {
        title: 'Как получить деньги по ОСАГО? В каких случаях выплачивают деньги?',
        text: '',
      },
      {
        title: 'Можно ли выбрать автосервис для ремонта машины самостоятельно?',
        text: '',
      },
      { title: 'Сгорает ли КБМ при перерыве в страховании?', text: '' },
      { title: 'Как застраховать автомобиль дешево?', text: '' },
      {
        title: 'Что делать, если нет положенной скидки за безопасное вождение? ',
        text: '',
      },
      { title: 'Как самому восстановить КБМ по ОСАГО?', text: '' },
      { title: 'Как получить купленный полис ОСАГО?', text: '' },
      { title: 'Как внести изменения в полис ОСАГО?', text: '' },
      { title: 'Как проверить подлинность ОСАГО?', text: '' },
      {
        title: 'Можно ли вернуть стоимость полиса при продаже автомобиля?',
        text: '',
      },
    ],
    info: [
      { title: 'Виды ОСАГО', text: '' },
      { title: 'ОСАГО в городах', text: '' },
      { title: 'ОСАГО от страховых компаний', text: '' },
      { title: 'ОСАГО от страховых компаний в городах', text: '' },
      { title: 'Калькулятор стоимости ОСАГО на 2023', text: '' },
      { title: 'Что нужно чтобы рассчитать стоимость страхования', text: '' },
      { title: 'Какие документы нужны для оформления', text: '' },
      { title: 'Как оформить полис на нашем сайте', text: '' },
    ],
  },
  BanksPage: {
    banksItems: [
      {
        title: 'Айыл Банк',
        sub: '8 800 700-65-12 / Кыргызстан / Лицензия №3185',
        img: sbi_big,
        m1: 35,
        m2: 288,
        chars: [
          { name: 'Вклады', count: 2 },
          { name: 'Вклады', count: 2 },
        ],
      },
      {
        title: 'Кыргызкоммерцбанк',
        sub: '8 800 700-65-12 / Кыргызстан / Лицензия №3185',
        img: sbi_big,
        m1: 35,
        m2: 288,
        chars: [
          { name: 'Вклады', count: 2 },
          { name: 'Вклады', count: 2 },
        ],
      },
      {
        title: 'MBank',
        sub: '8 800 700-65-12 / Кыргызстан / Лицензия №3185',
        img: sbi_big,
        m1: 35,
        m2: 288,
        chars: [
          { name: 'Вклады', count: 2 },
          { name: 'Вклады', count: 2 },
        ],
      },
      {
        title: 'KSB',
        sub: '8 800 700-65-12 / Кыргызстан / Лицензия №3185',
        img: sbi_big,
        m1: 35,
        m2: 288,
        chars: [
          { name: 'Вклады', count: 2 },
          { name: 'Вклады', count: 2 },
        ],
      },
    ],
  },
  CreditsPage: {
    sliderItems: [ekspo, spm, psb, sber_full, tinkoff, norvik, ekspo, spm, psb, sber_full, tinkoff, norvik],
  },
  TravelInsurance: {
    worksData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Заполните анкету',
        text: 'Для расчета стоимости медстраховки у наших партнеров укажите страну, период пребывания и возраст туристов.',
        w_text: 333,
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Сделайте свой выбор',
        text: 'Мы покажем все доступные варианты. Вам останется выбрать лучший, заполнить анкету и оплатить полис онлайн.',
        w_text: 333,
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Получите полис на e-mail',
        text: 'Электронный полис придет на почту через несколько минут после оплаты – его можно сразу отправить в банк.',
        w_text: 333,
      },
    ],
    questData: [
      { title: 'Зачем нужна страховка при выезде за границу?', text: '' },
      { title: 'Как оформить турестическую страховку?', text: '' },
      {
        title: 'Как рассчитывается или от чего зависит цена на страховку?',
        text: '',
      },
      { title: 'Можно ли поехать за границу без страховки?', text: '' },
      { title: 'Как воспользоваться страховкой?', text: '' },
    ],
  },
  HealthInsurance: {
    chooseIntro: [
      { name: 'Все', active: false },
      { name: 'Страховые ипотеки', active: false },
      { name: 'Медицинское', active: false },
      { name: 'Для путешествия', active: false },
      { name: 'Для спортсменов', active: true },
    ],
    sliderItems: [ekspo, spm, psb, sber_full, tinkoff, norvik, ekspo, spm, psb, sber_full, tinkoff, norvik],
    offersItems: [
      {
        license: 1,
        id: 1,
        form: 'ПАО',
        address: 'Москва, ул. 3 Строителей, 4',
        region: 77,
        since: 2002,
        image: null,
        name: 'СперБанк',
        rating: 0,
      },
    ],
    questData: [
      { title: 'Зачем нужна страховка страховка жизни и здоровья?', text: '' },
      {
        title: 'В чем может быть польза страхования жизни и здоровья?',
        text: '',
      },
      { title: 'Как оформить полис?', text: '' },
      { title: 'Когда начинает действовать?', text: '' },
      { title: 'Как воспользоваться страховкой жизни и здоровья?', text: '' },
    ],
    questions: [
      { title: 'Категории страхования', text: '' },
      { title: 'Страхование здоровья', text: '' },
    ],
  },
  MortgageInsurancePage: {
    sliderItems: [ekspo, spm, psb, sber_full, tinkoff, norvik, ekspo, spm, psb, sber_full, tinkoff, norvik],
    worksData: [
      {
        img: w_1,
        title: 'Этап 1',
        sub: 'Заполните анкету',
        text: 'Для рассчета цен наших партнеров, укажите необходимые данные в анкете.',
        w_text: 333,
        height: 160,
      },
      {
        img: w_2,
        title: 'Этап 2',
        sub: 'Сделайте свой выбор',
        text: 'Мы покажем все доступные варианты. Вам останется выбрать лучший, заполнить анкету и оплатить полис онлайн.',
        w_text: 333,
      },
      {
        img: w_3,
        title: 'Этап 3',
        sub: 'Получите полис на e-mail',
        text: 'Электронный полис придет на почту через несколько минут после оплаты – его можно сразу отправить в банк.',
        w_text: 333,
      },
    ],
  },
  DmsPage: {
    questData: [
      { title: 'Как получить медицинскую помощь по ДМС?', text: '' },
      { title: 'От чего зависит цена продукта?', text: '' },
      { title: 'Что не является страхованием?', text: '' },
      { title: 'Можно ли обслуживаться в нескольких поликлиниках?', text: '' },
      { title: 'Можно ли получить налоговый вычет по полису ДМС?', text: '' },
    ],
    questions: [
      { title: 'Виды страхования', text: '' },
      { title: 'Страхование жизни и здоровья', text: '' },
    ],
  },
  MortgageDiscount: {
    deposits: [
      {
        max_amount: 0,
        id: 0,
        timeframe_min: 0,
        name: 'string',
        min_amount: 0,
        rate: 0,
        bank_id: 0,
        timeframe_max: 0,
        description: 'string',
        rating: 0,
      },
    ],
  },
  BusinessServicePage: {
    introChoose: [
      { name: 'Все продукты', active: true },
      { name: 'Расчетный счет (РКО)', active: false },
      { name: 'Кредиты', active: false },
      { name: 'Бизнес карты', active: false },
    ],
    offers: [
      {
        min_amount: 1000,
        rate: 2,
        bank_id: 1,
        timeframe_max: 1456,
        description: 'Вклад на котором зарабатываете вы, а не мы',
        id: 1,
        max_amount: 1000000,
        timeframe_min: 10,
        name: 'Жадный',
        rating: 0,
      },
    ],
    offersMoth: [
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
    ],
    questData: [
      { title: 'Что такое фонды?', text: '' },
      { title: 'Как можно заработать на фонде?', text: '' },
      { title: 'Как купить фонды?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Какие есть риски?', text: '' },
    ],
  },
  SlipsBanksPage: {
    sliderItems: [
      { title: 'Для детей', sub: '38 предложений' },
      { title: 'До 13% на остаток', sub: '863 предложения' },
      { title: 'МИР', sub: '585 предложений' },
      { title: 'С онлайн-заявкой', sub: '17 предложений ' },
      { title: 'Бесплатные', sub: '863 предложений' },
      { title: 'Для детей', sub: '38 предложений' },
      { title: 'До 13% на остаток', sub: '863 предложения' },
      { title: 'МИР', sub: '585 предложений' },
      { title: 'С онлайн-заявкой', sub: '17 предложений ' },
      { title: 'Бесплатные', sub: '863 предложений' },
    ],
    questData: [
      { title: 'Что такое фонды?', text: '' },
      { title: 'Как можно заработать на фонде?', text: '' },
      { title: 'Как купить фонды?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Какие есть риски?', text: '' },
    ],
  },
  PaymentBusinessPage: {
    offersDeposits: [
      {
        min_amount: 1000,
        rate: 2,
        bank_id: 1,
        timeframe_max: 1456,
        description: 'Вклад на котором зарабатываете вы, а не мы',
        id: 1,
        max_amount: 1000000,
        timeframe_min: 10,
        name: 'Жадный',
        rating: 0,
      },
    ],
    offersMoth: [
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
    ],
    banks: [
      {
        min_amount: 1000,
        rate: 2,
        bank_id: 1,
        timeframe_max: 1456,
        description: 'Вклад на котором зарабатываете вы, а не мы',
        id: 1,
        max_amount: 1000000,
        timeframe_min: 10,
        name: 'Жадный',
        rating: 0,
        special_condition: 'ekmwgoj',
        promotion_of_month: false
      },
    ],
    questData: [
      { title: 'Что такое фонды?', text: '' },
      { title: 'Как можно заработать на фонде?', text: '' },
      { title: 'Как купить фонды?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Какие есть риски?', text: '' },
    ],
  },
  AssuranceBusiness: {
    offers: [
      {
        region: 1,
        since: 1,
        image: '',
        name: 'Альфа-Банк ',
        license: 1,
        id: 1,
        form: 'Скидка на ипотеку «Хочу ниже!»',
        address: 'Адрес',
        rating: 1,
      },
    ],
  },
  BrokerInvPage: {
    introChoose: [
      { name: 'С чего начать', active: false },
      { name: 'Подобрать брокера', active: true },
      { name: 'Что купить', active: false },
      { name: 'Аналитика', active: false },
      { name: 'Специальные предложения', active: false },
      { name: 'Обучение', active: false },
    ],
    chooseCalc: [
      { name: 'Премиальный тариф', active: false },
      { name: 'Демо-счет', active: false },
      { name: 'Без комиссий', active: false },
    ],
    brokerOffers: [
      {
        name: 'ВТБ Мои Инвестиции',
        sub: 'Мой онлайн',
        comm: '10,10',
        serv: 'от 0',
        img: loc_bank,
        charcs: ['Партнер раздела'],
        btn: 'Открыть счет',
        count: 'Ещё 12 тарифов',
      },
      {
        name: 'ВТБ Мои Инвестиции',
        sub: 'Мой онлайн',
        comm: '10,10',
        serv: 'от 0',
        img: loc_bank,
        charcs: ['Партнер раздела'],
        btn: 'Открыть счет',
        count: 'Ещё 12 тарифов',
      },
      {
        name: 'ВТБ Мои Инвестиции',
        sub: 'Мой онлайн',
        comm: '10,10',
        serv: 'от 0',
        img: loc_bank,
        charcs: ['Партнер раздела'],
        btn: 'Открыть счет',
        count: 'Ещё 12 тарифов',
      },
      {
        name: 'ВТБ Мои Инвестиции',
        sub: 'Мой онлайн',
        comm: '10,10',
        serv: 'от 0',
        img: loc_bank,
        charcs: ['Партнер раздела'],
        btn: 'Открыть счет',
        count: 'Ещё 12 тарифов',
      },
      {
        name: 'ВТБ Мои Инвестиции',
        sub: 'Мой онлайн',
        comm: '10,10',
        serv: 'от 0',
        img: loc_bank,
        charcs: ['Партнер раздела'],
        btn: 'Открыть счет',
        count: 'Ещё 12 тарифов',
      },
    ],
    questions: [
      { title: 'Зачем нужен брокер?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Как выбрать брокера?', text: '' },
    ],
    questionsD: [
      { title: 'Подробнее', text: '' },
      { title: 'Инвестиции для физических лиц', text: '' },
    ],
  },
  StockInvest: {
    chooseIntro: [
      { name: 'С чего начать', active: false },
      { name: 'Подобрать брокера', active: false },
      { name: 'Что купить', active: true },
      { name: 'Аналитика', active: false },
      { name: 'Специальные предложения', active: false },
      { name: 'Обучение', active: false },
    ],
    calc_choose_up: [
      { name: 'Акции', active: true },
      { name: 'Облигации', active: false },
      { name: 'Фонды', active: false },
      { name: 'Криптовалюта', active: false },
    ],
    calc_choose_d: [
      { name: 'Все рынки', active: false },
      { name: 'Любой отрасли', active: false },
      { name: 'Все', active: true },
      { name: 'Популярные', active: false },
      { name: 'Лидеры роста', active: false },
      { name: 'Лидеры падения', active: false },
      { name: 'Дивидендные', active: false },
    ],
    stockOffersItem: [
      {
        name: 'Contextlogic',
        sub: 'WISH-RM',
        img: loc_bank,
        price: '40,02 $',
        change: '37,81 $ (1 710,86%)',
        subPrice: '3 855,57 ₽',
      },
      {
        name: 'Липецкая энергосбытовая компания',
        sub: 'LPSB',
        img: loc_bank,
        price: '58,35 ₽',
        change: '30 ₽ (105,82%)',
      },
    ],
    offersMoth: [
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
    ],
    frequentQuests: [
      { title: 'Что такое акции?', text: '' },
      { title: 'Зачем нужен брокер?', text: '' },
      { title: 'Как купить акцию?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Как научиться торговать акциями?', text: '' },
    ],
    questions: [
      { title: 'Как приобрести бумаги на нашем сайте', text: '' },
      { title: 'Предложения', text: '' },
      { title: 'Каталог акций', text: '' },
      { title: 'Акции по сферам', text: '' },
    ],
  },
  ObligationsPage: {
    chooseIntro: [
      { name: 'С чего начать', active: false },
      { name: 'Подобрать брокера', active: false },
      { name: 'Что купить', active: true },
      { name: 'Аналитика', active: false },
      { name: 'Специальные предложения', active: false },
      { name: 'Обучение', active: false },
    ],
    obligationOffers: [
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        price: '865 ₽',
        change: '294,89%',
        subPrice: 'Номинал 1000 ₽',
        subChange: 'Погашение 26.03.2028',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        price: '865 ₽',
        change: '294,89%',
        subPrice: 'Номинал 1000 ₽',
        subChange: 'Погашение 26.03.2028',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        price: '865 ₽',
        change: '294,89%',
        subPrice: 'Номинал 1000 ₽',
        subChange: 'Погашение 26.03.2028',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        price: '865 ₽',
        change: '294,89%',
        subPrice: 'Номинал 1000 ₽',
        subChange: 'Погашение 26.03.2028',
      },
    ],
    offersMoth: [
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
      {
        img: c,
        title: 'Управление инвестициями',
        sub: 'Conomy Terminal',
        name: 'Доходность до 49,7%',
        info: '120 дней бесплатного обслуживания',
      },
    ],
    frequentQuests: [
      { title: 'Что такое облигации?', text: '' },
      { title: 'Как можно заработать на облигациях?', text: '' },
      { title: 'Как купить облигации?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Как научиться торговать облигациями?', text: '' },
    ],
    TopObligationItems: [
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        price: '864,20 ₽',
        profit: '818,38%',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        price: '864,20 ₽',
        profit: '818,38%',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        price: '864,20 ₽',
        profit: '818,38%',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        price: '864,20 ₽',
        profit: '818,38%',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        price: '864,20 ₽',
        profit: '818,38%',
      },
    ],
    questions: [
      { title: 'Купить облигации онлайн', text: '' },
      { title: 'Предложения облигаций', text: '' },
      { title: 'Каталог акций', text: '' },
      { title: 'Облигации по отраслям', text: '' },
      { title: 'Компании', text: '' },
    ],
    calc_choose_d: [
      { name: 'В рублях', active: false },
      { name: 'Любой отрасли', active: false },
      { name: 'Все', active: true },
      { name: 'Муниципальные', active: false },
      { name: 'Городские', active: false },
    ],
  },
  FondsPage: {
    chooseIntro: [
      { name: 'С чего начать', active: false },
      { name: 'Подобрать брокера', active: false },
      { name: 'Что купить', active: true },
      { name: 'Аналитика', active: false },
      { name: 'Специальные предложения', active: false },
      { name: 'Обучение', active: false },
    ],
    calc_choose_d: [
      { name: 'Любой', active: false },
      { name: 'Не важно', active: false },
      { name: 'Все', active: true },
      { name: 'ПИФ', active: false },
      { name: 'ETF/БПИФ', active: false },
    ],
    FondsOfferItems: [
      {
        name: 'БПИФ «Альфа-Капитал Управляемые Российские Акции»',
        sub: 'Альфа-капитал',
        img: loc_bank,
        comm: '1,50%',
        profit: '79,93%',
      },
      {
        name: 'БПИФ «Альфа-Капитал Управляемые Российские Акции»',
        sub: 'Альфа-капитал',
        img: loc_bank,
        comm: '1,50%',
        profit: '79,93%',
      },
      {
        name: 'БПИФ «Альфа-Капитал Управляемые Российские Акции»',
        sub: 'Альфа-капитал',
        img: loc_bank,
        comm: '1,50%',
        profit: '79,93%',
      },
      {
        name: 'БПИФ «Альфа-Капитал Управляемые Российские Акции»',
        sub: 'Альфа-капитал',
        img: loc_bank,
        comm: '1,50%',
        profit: '79,93%',
      },
      {
        name: 'БПИФ «Альфа-Капитал Управляемые Российские Акции»',
        sub: 'Альфа-капитал',
        img: loc_bank,
        comm: '1,50%',
        profit: '79,93%',
      },
    ],
    frequentQuests: [
      { title: 'Что такое фонды?', text: '' },
      { title: 'Как можно заработать на фонде?', text: '' },
      { title: 'Как купить фонды?', text: '' },
      { title: 'За что нужно платить комиссию?', text: '' },
      { title: 'Какие есть риски?', text: '' },
    ],
    TopFondsItems: [
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
      {
        title: 'Совкомбанк — Халва',
        sub: 'Облигация',
        comm: '818,38%',
        profit: '864,20 ₽',
      },
    ],
    questions: [
      { title: 'Паевые инвестиционные фонды (ПИФы)', text: '' },
      { title: 'Предложения', text: '' },
      { title: 'ПИФы компаний', text: '' },
      { title: 'Популярные брокерские компании', text: '' },
    ],
  },
  CryptoPage: {
    introChoose: [
      { name: 'С чего начать', active: false },
      { name: 'Подобрать брокера', active: false },
      { name: 'Что купить', active: true },
      { name: 'Аналитика', active: false },
      { name: 'Специальные предложения', active: false },
      { name: 'Обучение', active: false },
    ],
    calc_choose_d: [
      { name: 'Все', active: false },
      { name: 'в BNB', active: false },
      { name: 'в BTC', active: false },
      { name: 'в USDT', active: true },
      { name: 'Лидеры роста', active: false },
      { name: 'Лидеры падений', active: false },
    ],
    CryptoOffers: [
      {
        name: 'Og Fan Token',
        sub: 'OG\\USDT',
        img: loc_bank,
        price: '4,99 ₮',
        profit: '+0,97 ₮ (+24,09%)',
      },
      {
        name: 'Og Fan Token',
        sub: 'OG\\USDT',
        img: loc_bank,
        price: '4,99 ₮',
        profit: '+0,97 ₮ (+24,09%)',
      },
      {
        name: 'Og Fan Token',
        sub: 'OG\\USDT',
        img: loc_bank,
        price: '4,99 ₮',
        profit: '+0,97 ₮ (+24,09%)',
      },
      {
        name: 'Og Fan Token',
        sub: 'OG\\USDT',
        img: loc_bank,
        price: '4,99 ₮',
        profit: '+0,97 ₮ (+24,09%)',
      },
      {
        name: 'Og Fan Token',
        sub: 'OG\\USDT',
        img: loc_bank,
        price: '4,99 ₮',
        profit: '+0,97 ₮ (+24,09%)',
      },
      {
        name: 'Og Fan Token',
        sub: 'OG\\USDT',
        img: loc_bank,
        price: '4,99 ₮',
        profit: '+0,97 ₮ (+24,09%)',
      },
    ],
    Bonds: [
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
      { img: sfk, title: 'ИФК Солид', sub: 'KROT', rate: 629.6, money: 2083 },
    ],
  },
  Analytics: {
    quoteItems: [
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Металлы и добыча',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
      {
        name: 'Нефть и газ',
        quotes: [
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
          {
            title: 'Сургутнефтьгаз',
            count: '30,58 ₽',
            changes: '5,85 ₽ (+1,02%)',
          },
        ],
      },
    ],
    lastRecommends: [
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        recommendation: true,
        stockName: 'Детский мир',
        subName: 'DSKY',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        recommendation: true,
        stockName: 'Детский мир',
        subName: 'DSKY',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        recommendation: true,
        stockName: 'Детский мир',
        subName: 'DSKY',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        recommendation: true,
        stockName: 'Детский мир',
        subName: 'DSKY',
      },
      {
        name: 'РОСНАНО-8-об',
        sub: 'РОСНАНО',
        img: loc_bank,
        recommendation: true,
        stockName: 'Детский мир',
        subName: 'DSKY',
      },
    ],
  },
  InvestSpecialOffersPage: {
    choises: [
      // {name: 'Все', active: false, link: ''},
      { name: 'Вклады', active: false, link: '/deposits/special-offers' },
      { name: 'Ипотека', active: false, link: '/ipoteka/special-offers' },
      { name: 'Карты', active: false, link: '/cards/special-offers' },
      { name: 'Инвестиции', active: true, link: '/investment/special-offers' },
    ],
    specialOffers: [
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Бонус',
        c1: '2 500 ₽',
      },
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Доходность, годовых',
        c1: '15%',
        t2: 'Сумма вложения',
        c2: 'от 100 000 ₽',
      },
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Доход',
        c1: '25%',
        t2: 'Срок',
        c2: '2 года',
      },
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Доход',
        c1: '25%',
        t2: 'Срок',
        c2: '2 года',
      },
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Доход',
        c1: '25%',
        t2: 'Срок',
        c2: '2 года',
      },
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Доход',
        c1: '25%',
        t2: 'Срок',
        c2: '2 года',
      },
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Станьте первым участником бонусной программы',
        t1: 'Доход',
        c1: '25%',
        t2: 'Срок',
        c2: '2 года',
      },
    ],
    stockOffers: [
      {
        img: img_1,
        imgBank: gazprom,
        name: 'Финам',
        sub: 'Акция «Финам бонус»',
        info: 'Акция «Бонус за инвестиции»',
        t1: 'Бонус',
        c1: '500 ₽',
      },
    ],
  },
  ApplicationsProfile: {
    applicationItems: [
      {
        name: 'Полис ОСАГО',
        date: '21/07/2023',
        status: 1,
        contact: 'Маргарита Иванова',
      },
      {
        name: 'Полис ОСАГО',
        date: '21/07/2023',
        status: 2,
        contact: 'Маргарита Иванова',
      },
      {
        name: 'Полис ОСАГО',
        date: '21/07/2023',
        status: 0,
        contact: 'Маргарита Иванова',
      },
      {
        name: 'Полис ОСАГО',
        date: '21/07/2023',
        status: 0,
        contact: 'Маргарита Иванова',
      },
      {
        name: 'Полис ОСАГО',
        date: '21/07/2023',
        status: 0,
        contact: 'Маргарита Иванова',
      },
      {
        name: 'Полис ОСАГО',
        date: '21/07/2023',
        status: 0,
        contact: 'Маргарита Иванова',
      },
    ],
  },
  FeedBackProfile: {
    chooseFeedback: [
      { name: 'Все', active: true },
      { name: 'На модерации', active: false },
      { name: 'Опубликовано', active: false },
      { name: 'Отклонено', active: false },
    ],
    feedbackItems: [
      {
        title: 'Отличное обслуживание',
        date: '29.07.2023',
        rating: 4,
        text:
          'Прежде всего, современная' +
          ' методология разработки однозначно определяет каждого участника как способного.  ',
      },
      {
        title: 'Отличное обслуживание',
        date: '29.07.2023',
        rating: 4,
        text:
          'Прежде всего, современная' +
          ' методология разработки однозначно определяет каждого участника как способного.  ',
      },
      {
        title: 'Отличное обслуживание',
        date: '29.07.2023',
        rating: 4,
        text:
          'Прежде всего, современная' +
          ' методология разработки однозначно определяет каждого участника как способного.  ',
      },
    ],
  },
  NewsPage: {
    chooseIntro: [
      { name: 'Сегодня', active: true },
      { name: 'Накопить', active: true },
      { name: 'Занять', active: true },
      { name: 'Застраховать', active: true },
      { name: 'Обезопасить', active: true },
    ],
  },
  MortgageSpecialIntro: [
    // {name: 'Все', active: false, link: ''},
    { name: 'Вклады', active: false, link: '/deposits/special-offers' },
    { name: 'Ипотека', active: true, link: '/ipoteka/special-offers' },
    { name: 'Карты', active: false, link: '/cards/special-offers' },
    { name: 'Инвестиции', active: false, link: '/investment/special-offers' },
  ],
  CardsSpecialIntro: [
    // {name: 'Все', active: false, link: ''},
    { name: 'Вклады', active: false, link: '/deposits/special-offers' },
    { name: 'Ипотека', active: false, link: '/ipoteka/special-offers' },
    { name: 'Карты', active: true, link: '/cards/special-offers' },
    { name: 'Инвестиции', active: false, link: '/investment/special-offers' },
  ],
  InsuranceCompanysMass: [
    { name: 'НСК', a: 'http://nsk.kg/' },
    { name: 'Кыргызстан', a: 'http://www.insurance.kg/' },
    { name: 'АТН полис', a: 'http://atnpolis.kg/' },
    { name: 'Jubilee', a: 'https://jubileeinsurance.kg/' },
    { name: 'Государственная страховая Организация', a: 'http://gso.kg/' },
    { name: 'Здоровье', a: 'https://zdorovie.kg/' },
    { name: 'А плюс', a: 'http://www.aplus.kg/' },
    { name: 'Аю гарант', a: 'http://agi.kg/' },
    { name: 'Арсеналъ Кыргызстан', a: 'http://www.arsins.kg/' },
    { name: 'Ингосстрах', a: 'https://www.ingo.kg/' },
  ],

  Footer: {
    "Product-1": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ],

    "Product-2": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ],

    "Product-3": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ],

    "Product-4": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ],


    "Product-5": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ],


    "Product-6": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ],


    "Product-7": [
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      },
      {
        name: 'Product Name',
        link: ''
      }
    ]
  }
};

export default data;
