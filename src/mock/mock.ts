import {datatype, lorem, name, image} from 'faker';

import {
  MAX_GUITAR_COUNT,
  MAX_REVIEW_COUNT,
  SortType,
  GuitarType,
  GuitarString,
  PageInfo
} from '../const';

import {createArrayOfObjects} from '../utils/utils';
import {GuitarComment, Guitar} from '../types/guitar-types';
import {IconSize} from '../types/types';

const mockIconSize:IconSize = {
  width: 10,
  height: 10,
};

const createMockComment = (): GuitarComment => ({
  id: datatype.uuid(),
  userName: name.firstName(),
  advantage: lorem.words(),
  disadvantage: lorem.words(),
  comment: lorem.words(),
  rating: datatype.number(),
  createAt: datatype.datetime().toDateString(),
  guitarId: datatype.number(),
});

const createMockGuitar = (): Guitar => ({
  id: datatype.number(),
  name: name.title(),
  vendorCode: lorem.word(),
  type: datatype.string(),
  description: lorem.paragraph(),
  previewImg: image.imageUrl(),
  stringCount: datatype.number(),
  rating: datatype.number(),
  price: datatype.number(),
  comments: createArrayOfObjects(createMockComment, datatype.number(1)),
});

const mockGuitar = createMockGuitar();
const mockCatalogGuitars = createArrayOfObjects(createMockGuitar, MAX_GUITAR_COUNT);
const mockTotalCount = datatype.number();
const mockLoadingStatus = datatype.boolean();

const mockSortType = {sortType: SortType.Price, sortOrder: SortType.Up};

const mockGuitarTypes = [GuitarType.Acoustic];
const mockGuitarStrings = [GuitarString.Six];

const mockPriceMin = datatype.number();
const mockPriceMax = datatype.number();
const mockDefaultPrices = {minPrice: mockPriceMin, maxPrice: mockPriceMax};

const mockCatalogPage = PageInfo.MaxPage;

const mockComments = mockGuitar.comments;
const mockMaxComments = createArrayOfObjects(createMockComment, MAX_REVIEW_COUNT);
const mockCommentCount = mockComments.length;

export {
  mockIconSize,
  mockGuitar,
  mockCatalogGuitars,
  mockTotalCount,
  mockLoadingStatus,
  mockSortType,
  mockGuitarTypes,
  mockGuitarStrings,
  mockPriceMin,
  mockPriceMax,
  mockDefaultPrices,
  mockCatalogPage,
  createMockComment,
  mockComments,
  mockMaxComments,
  mockCommentCount
};
