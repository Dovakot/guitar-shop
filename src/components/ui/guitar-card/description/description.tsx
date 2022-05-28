import React from 'react';

type DescriptionProps = {
  text: string,
};

function Description({text}: DescriptionProps): JSX.Element {
  return (
    <p className="tabs__product-description">
      {text}
    </p>
  );
}

export default Description;
