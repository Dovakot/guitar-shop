import React from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {AppRoute} from '../../../const';

type LogoProps = {
  className?: string,
};

function Logo({className}: LogoProps) {
  const logoClass = cn('logo', {
    [`${className}__logo`]: true,
  });

  return (
    <Link
      className={logoClass}
      to={AppRoute.Root}
      data-testid="logo"
    >
      <img
        className="logo__img"
        src="./img/svg/logo.svg"
        alt="Логотип Guitar Shop"
        width={70}
        height={70}
      />
    </Link>
  );
}

export default Logo;
