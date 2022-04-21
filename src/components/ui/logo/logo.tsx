import React from 'react';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import './logo.css';

import {AppRoute} from '../../../const';

type LogoProps = {
  className?: string,
};

function Logo({className}: LogoProps) {
  const logoClass = cn('logo', {
    [`${className}__logo`]: true,
  });

  return (
    <NavLink
      className={logoClass}
      activeClassName="logo--active"
      to={AppRoute.Root}
      exact
    >
      <img
        className="logo__img"
        src="./img/svg/logo.svg"
        alt="Логотип Guitar Shop"
        width={70}
        height={70}
      />
    </NavLink>
  );
}

export default Logo;
