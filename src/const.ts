const WAIT_1000_MILLISECONDS = 1000;

enum AppRoute {
  Root = '/',
  Catalog = '/catalog/:page',
  Guitar = '/guitar/:id',
  NotFound = '/404',
  Stores = '/stores',
  Blog = '/blog',
  Faq = '/faq',
  Return = '/return',
  Rehab = '/rehab',
  About = '/about',
  Cart = '/cart',
}

enum NavLinkTitle {
  Root = 'Главная',
  Catalog = 'Каталог',
  Stores = 'Где купить?',
  About = 'О компании',
  Blog = 'Блог',
  Faq = 'Вопрос - ответ',
  Return = 'Возврат',
  Rehab = 'Сервис-центры',
  Cart = 'Корзина',
}

export {
  WAIT_1000_MILLISECONDS,
  AppRoute,
  NavLinkTitle
};
