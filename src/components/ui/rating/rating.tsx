import React from 'react';
import cn from 'classnames';

import {IconSize} from '../../../types/types';

import SvgIcon from '../svg-icon/svg-icon';

type RatingProps = {
  rating: number,
  comments?: number,
  className: string,
  iconSize: IconSize,
};

const MAX_STAR_COUNT = 5;
const allStars = [...Array(MAX_STAR_COUNT)];

const getIconConfig = (index: number, rating: number, icon: IconSize) => {
  const starCount = Math.trunc(rating);
  const type = index < starCount ? '-full-' : '-';

  return {
    id: `icon${type}star`,
    width: icon.width,
    height: icon.height,
  };
};

function Rating({rating, comments, className, iconSize}: RatingProps): JSX.Element {
  const rateClass = cn('rate', {
    [className]: true,
  });

  const getStar = (star: undefined, index: number) => {
    const key = `star-${index}`;
    const iconConfig = getIconConfig(index, rating, iconSize);
    const {id} = iconConfig;

    return (
      <SvgIcon
        key={key}
        icon={iconConfig}
        testId={id}
      />
    );
  };

  return (
    <div className={rateClass} aria-hidden="true">
      <span className="visually-hidden">Рейтинг:</span>

      {allStars.map(getStar)}

      <span className="rate__count">{comments}</span>
    </div>
  );
}

export default Rating;
