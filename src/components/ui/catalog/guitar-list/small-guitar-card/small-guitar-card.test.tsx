import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import {mockGuitar} from '../../../../../mock/mock';

import SmallGuitarCard from './small-guitar-card';

describe('SmallGuitarCard component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <SmallGuitarCard
          {...mockGuitar}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText(mockGuitar.name)).toBeInTheDocument();
  });
});
