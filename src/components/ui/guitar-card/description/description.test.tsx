import {render, screen} from '@testing-library/react';

import {mockGuitar} from '../../../../mock/mock';

import Description from './description';

describe('Description component', () => {
  test('should be rendered correctly', () => {
    render(<Description text={mockGuitar.description} />);

    expect(screen.getByText(mockGuitar.description)).toBeInTheDocument();
  });
});
