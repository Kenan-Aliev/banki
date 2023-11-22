import navigate from '@/core/data/navigate';

const MobileNav = [
  { name: 'Вклады', navs: navigate.deposits },
  { name: 'Кредиты', navs: navigate.credits },
  { name: 'Ипотека', navs: navigate.ipoteka },
  { name: 'Страхование', navs: navigate.insurance },
  { name: 'Инвестиции', navs: navigate.investment },
  { name: 'Карты', navs: navigate.cards },
  { name: 'Бизнес', navs: navigate.business },
  { name: 'Новости', navs: navigate.news },
  { name: 'Ещё', navs: navigate.news },
];

export default MobileNav;
