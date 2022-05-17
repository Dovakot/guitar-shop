import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {GuitarString} from '../../../../../const';
import {filterGuitarAttr} from '../../../../../utils/filter-utils';
import {getFilterParams} from '../../../../../store/reducers/query-string-data/selectors';
import {getValidatedFilterValues} from '../../../../../store/reducers/catalog-data/selectors';
import {setGuitarStringsParam} from '../../../../../store/reducers/query-string-data/query-string-data';
import {setGuitarTypesFilter} from '../../../../../store/reducers/catalog-data/catalog-data';

import Checkbox from '../checkbox/checkbox';

type GuitarStringListProps = {
  getGuitarsForDefaultPage: () => void,
};

const guitarStrings = Object.values(GuitarString);

function GuitarStringList({getGuitarsForDefaultPage}: GuitarStringListProps): JSX.Element {
  const dispatch = useDispatch();
  const {checkedGuitarStrings} = useSelector(getFilterParams);
  const {validatedGuitarStrings} = useSelector(getValidatedFilterValues);

  const setGuitarStrings = (value: string) => {
    const stringsParam = filterGuitarAttr(checkedGuitarStrings, value);

    dispatch(setGuitarStringsParam(stringsParam));
  };

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
        setValue={setGuitarStrings}
      />
    );
  };

  useEffect(() => {
    dispatch(setGuitarTypesFilter(checkedGuitarStrings));
  }, [dispatch, checkedGuitarStrings]);

  return (
    <>
      {guitarStrings.map(getCheckboxItem)}
    </>
  );
}

export default GuitarStringList;
