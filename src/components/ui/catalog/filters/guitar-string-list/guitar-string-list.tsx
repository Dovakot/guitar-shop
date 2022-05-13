import React from 'react';
import {useSelector} from 'react-redux';

import {GuitarString} from '../../../../../const';
import {getGuitarStrings, getValidatedGuitarStrings} from '../../../../../store/reducers/guitar-data/selectors';

import Checkbox from '../checkbox/checkbox';

type GuitarStringListProps = {
  getGuitarsForDefaultPage: () => void,
};

const guitarStrings = Object.values(GuitarString);

function GuitarStringList({getGuitarsForDefaultPage}: GuitarStringListProps): JSX.Element {
  const checkedGuitarStrings = useSelector(getGuitarStrings);
  const validatedGuitarStrings = useSelector(getValidatedGuitarStrings);

  const getCheckboxItem = (type: string) => {
    const label = `${type}-strings`;

    return (
      <Checkbox
        key={label}
        name={label}
        label={type}
        defaultValue={type}
        checkedGuitarAttr={checkedGuitarStrings}
        validatedGuitarAttr={validatedGuitarStrings}
        getGuitarsForDefaultPage={getGuitarsForDefaultPage}
      />
    );
  };

  return (
    <>
      {guitarStrings.map(getCheckboxItem)}
    </>
  );
}

export default GuitarStringList;
