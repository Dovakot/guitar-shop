import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import {NavLinkTitle} from '../../../../../const';
import {mockGuitar} from '../../../../../mock/mock';

import TabLink from './tab-link';

describe('TabLink component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <TabLink
          id={mockGuitar.id}
          label={NavLinkTitle.Root}
          activeTab={NavLinkTitle.Root}
          onActiveTabChange={jest.fn()}
        />
      </BrowserRouter>,
    );

    const tabLink = screen.getByTestId('tab-link');

    fireEvent.click(tabLink);
    expect(tabLink).toHaveClass('link--current');
  });
});
