import React from 'react';

type ReviewTextProps = {
  title: string,
  text: string,
};

function ReviewText({title, text}: ReviewTextProps): JSX.Element {
  return (
    <>
      <h4 className="review__title title title--lesser">
        {title}:
      </h4>
      <p className="review__value">
        {text}
      </p>
    </>
  );
}

export default ReviewText;
