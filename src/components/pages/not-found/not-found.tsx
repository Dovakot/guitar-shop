import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';

function NotFound(): JSX.Element {
  return (
    <div className="container">
      <h2 className="title title--big">404</h2>
      Сожалеем, запрошенная страница не может быть найдена.
      URL-адрес может быть написан с ошибкой или страница, которую вы ищете,
      больше не доступна.<br /><br />
      <Link className="link" to={AppRoute.Root}>
        Вернуться на главную страницу <b>&#8594;</b>
      </Link>
    </div>
  );
}

export default NotFound;
