import React from 'react';

import {Page} from '../../../types/types';

import TextStub from '../../ui/text-stub/text-stub';

function ContentWrapper({children, title}: Page): JSX.Element {
  return (
    <main
      className="page-content"
      data-testid="page-content"
    >
      <div className="container">
        <h1 className="page-content__title title title--bigger">{title}</h1>
        {children || <TextStub />}
      </div>
    </main>
  );
}

export default ContentWrapper;
