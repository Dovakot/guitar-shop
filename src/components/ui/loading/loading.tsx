import React from 'react';

import './loading.css';

import Spinner from './spinner/spinner';

type LoadingProps = {
  isError?: boolean,
};

function Loading({isError}: LoadingProps): JSX.Element {
  return (
    <>
      {!isError && <Spinner />}

      <p className="text-loading">
        {isError
          ? <span className="text-loading__error">Ошибка загрузки</span>
          : 'Загрузка..'}
      </p>
    </>
  );
}

export default Loading;
