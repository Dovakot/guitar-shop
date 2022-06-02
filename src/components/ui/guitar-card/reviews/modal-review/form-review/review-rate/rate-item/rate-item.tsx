import React from 'react';

import ReviewInput from '../../review-input/review-input';

type RateItemProps = {
  id: string,
  title: string,
  name: string,
  type: string,
  defaultValue: number,
};

function RateItem({id, title, name, type, defaultValue}: RateItemProps): JSX.Element {
  return (
    <>
      <ReviewInput
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue}
        isVisuallyHidden
      />
      <label
        className="rate__label"
        htmlFor={id}
        title={title}
        data-testid="rate-label"
      />
    </>
  );
}

export default RateItem;
