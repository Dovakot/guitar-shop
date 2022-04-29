import {generatePath} from 'react-router-dom';

enum AppRoute {
  Root = '/',
  Catalog = '/catalog/page_:page',
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

enum SearchParams {
  SortType = '_sort',
  SortOrder = '_order',
  GuitarsFrom = '_start',
  GuitarsTo = '_limit',
  GuitarTypes = 'type',
  StringCount = 'stringCount',
  PriceGte = 'price_gte',
  PriceLte = 'price_lte',
}

enum SortType {
  Up = 'asc',
  Down = 'desc',
  Price = 'price',
  Rating = 'rating',
}

enum MessageText {
  Loading = 'Загрузка...',
  NotFound = 'Ничего не найдено :(',
  Error = 'При загрузке данных произошла ошибка',
}

const MAX_GUITAR_COUNT = 9;
const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_PATH = generatePath(AppRoute.Catalog, {page: DEFAULT_PAGE});

export {
  SearchParams,
  AppRoute,
  NavLinkTitle,
  SortType,
  MessageText,
  MAX_GUITAR_COUNT,
  DEFAULT_PAGE,
  DEFAULT_PAGE_PATH
};
