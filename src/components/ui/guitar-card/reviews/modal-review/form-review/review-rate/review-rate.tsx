import React from 'react';

import RateItem from './rate-item/rate-item';
import WarningText from '../warning-text/warning-text';

type ReviewRateProps = {
  name: string,
  message: string,
  isValid: boolean,
};

const allStars = ['Отлично', 'Хорошо', 'Нормально', 'Плохо', 'Ужасно'];
const starCount = allStars.length;

function ReviewRate({name, message, isValid}: ReviewRateProps): JSX.Element {
  const getRateItem = (title: string, index: number) => {
    const value = starCount - index;
    const key = `star-${value}`;

    return (
      <RateItem
        key={key}
        id={key}
        name={name}
        type="radio"
        title={title}
        defaultValue={value}
      />
    );
  };

  return (
    <div>
      <span className="form-review__label form-review__label--required">
        Ваша Оценка
      </span>
      <div className="rate rate--reverse">
        {allStars.map(getRateItem)}

        <WarningText
          message={message}
          className="rate__message"
          isValid={isValid}
        />
      </div>
    </div>
  );
}

export default ReviewRate;
