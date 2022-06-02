import React from 'react';
import cn from 'classnames';

type ReviewInputProps = {
  id: string,
  name: string,
  type:  string,
  defaultValue?: string | number,
  modifier?: string,
  isVisuallyHidden?: boolean,
};

function ReviewInput({
  id,
  name,
  type,
  defaultValue,
  modifier,
  isVisuallyHidden,
}: ReviewInputProps): JSX.Element {
  const inputClass = cn({
    'form-review__input': !isVisuallyHidden,
    [`form-review__input--${modifier}`]: modifier,
    'visually-hidden': isVisuallyHidden,
  });

  return (
    <input
      className={inputClass}
      id={id}
      name={name}
      type={type}
      defaultValue={defaultValue}
      data-testid="review-input"
    />
  );
}

export default ReviewInput;
