import React from 'react';

import {Page} from '../../types/types';

import ContentWrapper from './content-wrapper/content-wrapper';
import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';

function BasePage(props: Page): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <ContentWrapper {...props} />
      <Footer />
    </div>
  );
}

export default BasePage;
