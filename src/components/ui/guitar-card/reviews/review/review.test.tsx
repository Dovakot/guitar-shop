import {render, screen} from '@testing-library/react';

import {createMockComment} from '../../../../../mock/mock';
import {humanizeDate} from '../../../../../utils/utils';

import Review from './review';

const review = createMockComment();

describe('Review component', () => {
  test('should be rendered correctly', () => {
    render(<Review {...review} />);

    const date = humanizeDate(review.createAt);

    expect(screen.getByText(review.userName)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
  });
});
