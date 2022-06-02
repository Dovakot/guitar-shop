import React, {MouseEvent} from 'react';
import cn from 'classnames';

import {scrollToTop} from '../../../utils/utils';

type ButtonUpProps = {
  className: string,
};

function ButtonUp({className}: ButtonUpProps): JSX.Element {
  const buttonClass = cn('button button--up button--red-border button--big', {
    [className]: true,
  });

  const handleButtonClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    scrollToTop();
  };

  return (
    <a
      className={buttonClass}
      href="#top"
      onClick={handleButtonClick}
      data-testid="up-btn"
    >
      Наверх
    </a>
  );
}

export default ButtonUp;
