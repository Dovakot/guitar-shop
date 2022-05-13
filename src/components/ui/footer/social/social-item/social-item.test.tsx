import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import SocialItem from './social-item';

describe('SocialItem component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <SocialItem
          label="twitter"
          currentLink="https://twitter.com/"
        />
      </BrowserRouter>,
    );
  });
});
