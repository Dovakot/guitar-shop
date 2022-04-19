import React from 'react';
import cn from 'classnames';

import SvgIcon from '../svg-icon/svg-icon';

type RatingProps = {
  rating: number;
  comments: number;
  className: string;
};

const MAX_STAR_COUNT = 5;
const allStars = [...Array(MAX_STAR_COUNT)];

const getIconOption = (type: string) => ({
  id: `icon${type}star`,
  width: 12,
  height: 11,
});

function Rating({rating, comments, className}: RatingProps): JSX.Element {
  const rateClass = cn('rate', {
    [className]: true,
  });
  const starCount = Math.trunc(rating);

  const getStar = (star: undefined, index: number) => {
    const key = `star-${index}`;
    const iconOption = getIconOption(index < starCount ? '-full-' : '-');

    return <SvgIcon key={key} icon={iconOption} />;
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
