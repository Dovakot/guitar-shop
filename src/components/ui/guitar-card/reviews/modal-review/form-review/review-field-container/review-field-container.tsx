import React from 'react';
import cn from 'classnames';

import ReviewInput from '../review-input/review-input';
import ReviewTextarea from '../review-textarea/review-textarea';
import WarningText from '../warning-text/warning-text';

type ReviewFieldContainerProps = {
  id: string,
  name: string,
  type?: string,
  label: string,
  modifier?: string,
  message?: string,
  isValid?: boolean,
};

function ReviewFieldContainer({
  id,
  name,
  type,
  label,
  modifier,
  message,
  isValid,
}: ReviewFieldContainerProps): JSX.Element {
  const labelClass = cn('form-review__label', {
    'form-review__label--required': isValid !== undefined,
  });

  const getFieldType = () => type === 'text'
    ? (
      <ReviewInput
        id={id}
        name={name}
        type={type}
        modifier={modifier}
      />
    ) : <ReviewTextarea id={id} name={name} />;

  return (
    <>
      <label
        className={labelClass}
        htmlFor={name}
      >
        {label}
      </label>

      {getFieldType()}

      <WarningText
        message={message}
        className="form-review__warning"
        isValid={isValid}
      />
    </>
  );
}


export default ReviewFieldContainer;
