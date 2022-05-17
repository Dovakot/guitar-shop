import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {GuitarType} from '../../../../../const';
import {filterGuitarAttr} from '../../../../../utils/filter-utils';
import {getFilterParams} from '../../../../../store/reducers/query-string-data/selectors';
import {getValidatedFilterValues} from '../../../../../store/reducers/catalog-data/selectors';
import {setGuitarTypesParam} from '../../../../../store/reducers/query-string-data/query-string-data';
import {setGuitarStringsFilter} from '../../../../../store/reducers/catalog-data/catalog-data';

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
  const dispatch = useDispatch();
  const {checkedGuitarTypes} = useSelector(getFilterParams);
  const {validatedGuitarTypes} = useSelector(getValidatedFilterValues);

  const setGuitarTypes = (value: string) => {
    const typesParam = filterGuitarAttr(checkedGuitarTypes, value);

    dispatch(setGuitarTypesParam(typesParam));
  };

  useEffect(() => {
    dispatch(setGuitarStringsFilter(checkedGuitarTypes));
  }, [dispatch, checkedGuitarTypes]);

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
        setValue={setGuitarTypes}
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
