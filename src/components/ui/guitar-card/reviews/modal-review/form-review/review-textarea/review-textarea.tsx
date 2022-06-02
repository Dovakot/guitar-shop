import React from 'react';

type ReviewTextareaProps = {
  id: string,
  name: string,
};

function ReviewTextarea({id, name}: ReviewTextareaProps): JSX.Element {
  return (
    <textarea
      className="form-review__input form-review__input--textarea"
      id={id}
      name={name}
      rows={10}
      data-testid="review-textarea"
    />
  );
}

export default ReviewTextarea;
