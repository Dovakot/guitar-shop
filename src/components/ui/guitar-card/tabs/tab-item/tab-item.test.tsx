import {render, screen} from '@testing-library/react';

import {NavLinkTitle} from '../../../../../const';

import TabItem from './tab-item';
import TextStub from '../../../text-stub/text-stub';

describe('TabItem component', () => {
  test('should be rendered correctly', () => {
    render(
      <>
        <TabItem label={NavLinkTitle.Root}>
          <TextStub />
        </TabItem>

        <TabItem label={NavLinkTitle.Blog}>
          <TextStub />
        </TabItem>
      </>,
    );

    expect(screen.getAllByText(/Извините,/i)).toHaveLength(2);
  });
});
