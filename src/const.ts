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

enum ApiRoute {
  Guitars = '/guitars',
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

enum GuitarType {
  Acoustic = 'acoustic',
  Electric = 'electric',
  Ukulele = 'ukulele',
}

enum GuitarString {
  Four = '4',
  Six = '6',
  Seven = '7',
  Twelve = '12',
}

enum MessageText {
  Loading = 'Загрузка...',
  NotFound = 'Ничего не найдено :(',
  Error = 'При загрузке данных произошла ошибка',
  PriceError = 'Произошла ошибка при загрузке минимальной и максимальной стоимости товаров',
}

enum PageInfo {
  DefaultPage = 1,
  MaxPage = 3,
}

enum PaginationInfo {
  Back = 'Назад',
  Next = 'Далее',
}

const TOTAL_COUNT_HEADER = 'x-total-count';
const MAX_GUITAR_COUNT = 9;
const DEFAULT_PAGE_PATH = generatePath(AppRoute.Catalog, {page: PageInfo.DefaultPage});

export {
  SearchParams,
  AppRoute,
  ApiRoute,
  NavLinkTitle,
  SortType,
  GuitarType,
  GuitarString,
  MessageText,
  PageInfo,
  PaginationInfo,
  TOTAL_COUNT_HEADER,
  MAX_GUITAR_COUNT,
  DEFAULT_PAGE_PATH
};
