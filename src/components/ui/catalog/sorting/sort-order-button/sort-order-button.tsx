import React from 'react';
import cn from 'classnames';

import {SortType} from '../../../../../const';
import {getTabIndexValue, isActive} from '../../../../../utils/utils';

type SortOrderButtonProps = {
  currentOrder: string,
  activeOrder: string,
  title: string,
  onSortOrderButtonClick: (value: string) => void,
};

function SortOrderButton({
  currentOrder,
  activeOrder,
  title,
  onSortOrderButtonClick,
}: SortOrderButtonProps): JSX.Element {
  const isActiveOrder = isActive(currentOrder, activeOrder);
  const tabIndex = getTabIndexValue(isActiveOrder);

  const buttonClass = cn('catalog-sort__order-button', {
    'catalog-sort__order-button--active': isActiveOrder,
    'catalog-sort__order-button--up': isActive(currentOrder, SortType.Up),
    'catalog-sort__order-button--down': isActive(currentOrder, SortType.Down),
  });

  const handleButtonClick = () => onSortOrderButtonClick(currentOrder);

  return (
    <button
      className={buttonClass}
      aria-label={title}
      tabIndex={tabIndex}
      onClick={handleButtonClick}
      data-testid="sort-order-button"
    />
  );
}

export default SortOrderButton;
