import React from 'react';
import cn from 'classnames';

import {SortType} from '../../../../../const';
import {getTabIndexValue, isActive} from '../../../../../utils/utils';

type SortOrderButtonProps = {
  currentOrder: string,
  activeOrder: string,
  title: string,
  handleSortOrderButtonClick: (value: string) => void,
};

function SortOrderButton(
  {currentOrder, activeOrder, title, handleSortOrderButtonClick}: SortOrderButtonProps,
): JSX.Element {
  const isActiveOrder = isActive(currentOrder, activeOrder);
  const tabIndex = getTabIndexValue(isActiveOrder);

  const buttonClass = cn('catalog-sort__order-button', {
    'catalog-sort__order-button--active': isActiveOrder,
    'catalog-sort__order-button--up': isActive(currentOrder, SortType.Up),
    'catalog-sort__order-button--down': isActive(currentOrder, SortType.Down),
  });

  const handleButtonClick = () => handleSortOrderButtonClick(currentOrder);

  return (
    <button
      className={buttonClass}
      aria-label={title}
      tabIndex={tabIndex}
      onClick={handleButtonClick}
    />
  );
}

export default SortOrderButton;
