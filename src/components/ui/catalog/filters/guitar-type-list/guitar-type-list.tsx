import React from 'react';
import {useSelector} from 'react-redux';

import {GuitarType} from '../../../../../const';
import {getGuitarTypes, getValidatedGuitarTypes} from '../../../../../store/reducers/guitar-data/selectors';

import Checkbox from '../checkbox/checkbox';

type GuitarTypeListProps = {
  getGuitarsForDefaultPage: () => void,
};

const guitarTypeRu: {[key: string]: string} = {
  acoustic: 'Акустические',
  electric: 'Электрогитары',
  ukulele: 'Укулеле',
};

const guitarTypes = Object.values(GuitarType);

function GuitarTypeList({getGuitarsForDefaultPage}: GuitarTypeListProps): JSX.Element {
  const checkedGuitarTypes = useSelector(getGuitarTypes);
  const validatedGuitarTypes = useSelector(getValidatedGuitarTypes);

  const getCheckboxItem = (type: string) => {
    const label = guitarTypeRu[type];

    return (
      <Checkbox
        key={type}
        name={type}
        defaultValue={type}
        label={label}
        checkedGuitarAttr={checkedGuitarTypes}
        validatedGuitarAttr={validatedGuitarTypes}
        getGuitarsForDefaultPage={getGuitarsForDefaultPage}
        isGuitarType
      />
    );
  };

  return (
    <>
      {guitarTypes.map(getCheckboxItem)}
    </>
  );
}

export default GuitarTypeList;
