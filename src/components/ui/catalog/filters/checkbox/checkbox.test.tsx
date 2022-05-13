import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import {GuitarType} from '../../../../../const';

import Checkbox from './checkbox';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('Checkbox component', () => {
  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <Checkbox
          name={GuitarType.Acoustic}
          defaultValue={GuitarType.Acoustic}
          label={GuitarType.Acoustic}
          checkedGuitarAttr={[]}
          validatedGuitarAttr={[]}
          getGuitarsForDefaultPage={jest.fn()}
        />
      </Provider>,
    );

    expect(screen.getByText(GuitarType.Acoustic)).toBeInTheDocument();
  });
});
