import {MAX_GUITAR_COUNT, PageInfo, PaginationInfo} from '../const';

const getPaginationConfig = (pages: number[]) => ({
  back: {
    id: 'back',
    name: PaginationInfo.Back,
    nextPage: -1,
    pageTotal: Math.min(...pages),
  },
  next: {
    id: 'next',
    name: PaginationInfo.Next,
    nextPage: 1,
    pageTotal: Math.max(...pages),
  },
});

const getCatalogTotalPages = (count: number) => {
  const totalCount = count > MAX_GUITAR_COUNT
    ? Math.ceil(count / MAX_GUITAR_COUNT)
    : PageInfo.DefaultPage;

  const pages = Array(totalCount).fill(0).reduce((list, value, index) => {
    list.push(++index);

    return list;
  }, []);

  return pages as never[];
};

const changeCatalogPage = (page: number) => {
  const newPage = (page - PageInfo.DefaultPage) * MAX_GUITAR_COUNT;

  return newPage ? newPage.toString() : '';
};

export {
  getPaginationConfig,
  getCatalogTotalPages,
  changeCatalogPage
};
