import React from 'react';

import TextStub from '../../ui/text-stub/text-stub';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';

type ContentWrapperProps = {
  children?: React.ReactNode;
  title: string;
  isBreadcrumbs?: boolean;
};

function ContentWrapper(
  {children, title, isBreadcrumbs}: ContentWrapperProps,
): JSX.Element {
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
