import React from 'react';
import cn from 'classnames';

import {getTabIndexValue, isActive} from '../../../../../utils/utils';

type SortTypeButtonProps = {
  currentType: string,
  activeType: string,
  title: string,
  onSortTypeButtonClick: (value: string) => void,
};

function SortTypeButton({
  currentType,
  activeType,
  title,
  onSortTypeButtonClick,
}: SortTypeButtonProps): JSX.Element {
  const isActiveType = isActive(currentType, activeType);
  const tabIndex = getTabIndexValue(isActiveType);

  const buttonClass = cn('catalog-sort__type-button', {
    'catalog-sort__type-button--active': isActiveType,
  });

  const handleButtonClick = () => onSortTypeButtonClick(currentType);

  return (
    <button
      className={buttonClass}
      aria-label={title}
      tabIndex={tabIndex}
      onClick={handleButtonClick}
      data-testid="sort-type-button"
    >
      {title}
    </button>
  );
}

export default SortTypeButton;
