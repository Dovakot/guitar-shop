import React from 'react';

import {Page} from '../../../types/types';

import TextStub from '../../ui/text-stub/text-stub';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';

function ContentWrapper({children, title, isBreadcrumbs}: Page): JSX.Element {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">{title}</h1>

        {isBreadcrumbs && <Breadcrumbs />}
        {children || <TextStub />}
      </div>
    </main>
  );
}

export default ContentWrapper;
