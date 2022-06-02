import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import {mockGuitar} from '../../../../mock/mock';

import Tabs from './tabs';
import TextStub from '../../text-stub/text-stub';

describe('Tabs component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <Tabs id={mockGuitar.id}>
          <TextStub />
          <TextStub />
        </Tabs>
      </BrowserRouter>,
    );

    expect(screen.getAllByTestId('tab-link')).toHaveLength(2);
    expect(screen.getAllByText(/Извините,/i)).toHaveLength(2);
  });
});
