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
  Comments = '/comments',
}

enum NavLinkTitle {
  Root = 'Главная',
  Catalog = 'Каталог',
  Guitar = 'Товар',
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
  Date = 'createAt',
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
  ErrorSend = 'При отправке данных произошла ошибка',
  PriceError = 'Произошла ошибка при загрузке минимальной и максимальной стоимости товаров',
  ReviewsError = 'Произошла ошибка при загрузке отзывов на товар',
}

enum PageInfo {
  DefaultPage = 1,
  MaxPage = 3,
}

enum PaginationInfo {
  Back = 'Назад',
  Next = 'Далее',
}

enum ModalType {
  Form = 'review',
  Success = 'success',
}

enum ReviewFieldName {
  Name = 'user-name',
  Rate = 'rate',
  Advantage = 'advantage',
  Disadvantage = 'disadvantage',
  Comment = 'comment',
}

const TOTAL_COUNT_HEADER = 'x-total-count';
const MAX_GUITAR_COUNT = 9;
const MAX_REVIEW_COUNT = 3;
const DEFAULT_PAGE_PATH = generatePath(AppRoute.Catalog, {page: PageInfo.DefaultPage});

const UNKNOWN_ACTION = {
  type: 'UNKNOWN_ACTION',
} as const;

const GUITAR_TYPE_RU:{[key: string]: string} = {
  [GuitarType.Acoustic]: 'Акустическая',
  [GuitarType.Electric]: 'Электрогитара',
  [GuitarType.Ukulele]: 'Укулеле',
};

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
  ModalType,
  ReviewFieldName,
  TOTAL_COUNT_HEADER,
  MAX_GUITAR_COUNT,
  MAX_REVIEW_COUNT,
  DEFAULT_PAGE_PATH,
  UNKNOWN_ACTION,
  GUITAR_TYPE_RU
};
