import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useParams} from 'react-router-dom';

import {scrollToTop} from '../../../../utils/utils';
import {getPaginationConfig} from '../../../../utils/pagination-utils';
import {setCatalogPage} from '../../../../store/actions/actions';
import {fetchGuitars} from '../../../../store/api-actions/api-actions';
import {getCatalogPage} from '../../../../store/reducers/guitar-data/selectors';

import PaginationItem from './pagination-item/pagination-item';

type PaginationChangedItem = {
  id: string,
  name: string,
  nextPage: number,
  pageTotal: number,
};

function Pagination(): JSX.Element {
  const dispatch = useDispatch();
  const currentPage = +useParams<{page: string}>().page;
  const pages = useSelector(getCatalogPage);
  const {pathname} = useLocation();

  const paginationConfig = getPaginationConfig(pages);

  const handlePaginationLinkClick = async (page: number, link: string) => {
    await dispatch(setCatalogPage(page));
    dispatch(fetchGuitars(undefined, link));

    scrollToTop();
  };

  const getPaginationChangedItem = ({id, name, nextPage, pageTotal}: PaginationChangedItem) => {
    const page = currentPage + nextPage;

    return currentPage !== pageTotal ? (
      <PaginationItem
        id={id}
        name={name}
        page={page}
        onLinkClick={handlePaginationLinkClick}
      />
    ) : '';
  };

  const getPaginationItem = (page: number) => {
    const key = `page_${page}`;

    return (
      <PaginationItem
        id={page}
        key={key}
        name={page}
        page={page}
        pathname={pathname}
        onLinkClick={handlePaginationLinkClick}
      />
    );
  };

  return (
    <div
      className="pagination page-content__pagination"
      data-testid="catalog-pagination"
    >
      <ul className="pagination__list">
        {getPaginationChangedItem(paginationConfig.back)}
        {pages.map(getPaginationItem)}
        {getPaginationChangedItem(paginationConfig.next)}
      </ul>
    </div>
  );
}

export default Pagination;
