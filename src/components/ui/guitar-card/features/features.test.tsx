import {render, screen} from '@testing-library/react';

import {mockGuitar} from '../../../../mock/mock';

import Features from './features';

describe('Features component', () => {
  test('should be rendered correctly', () => {
    render(
      <Features
        vendorCode={mockGuitar.vendorCode}
        typeKey={mockGuitar.type}
        stringCount={mockGuitar.stringCount}
      />,
    );

    expect(screen.getByText(mockGuitar.vendorCode)).toBeInTheDocument();
  });
});
