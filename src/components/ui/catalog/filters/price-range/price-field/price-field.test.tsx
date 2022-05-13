import {render, screen} from '@testing-library/react';

import {mockPriceMin, mockPriceMax} from '../../../../../../mock/mock';

import PriceField from './price-field';

describe('PriceField component', () => {
  test('should be rendered correctly', () => {
    render(
      <PriceField
        id="priceMin"
        name="от"
        value=""
        defaultValueMin={mockPriceMin}
        defaultValueMax={mockPriceMax}
        placeholder={mockPriceMin}
        onFieldBlur={jest.fn()}
      />,
    );

    expect(screen.getByTestId('price-field')).toBeInTheDocument();
  });
});
