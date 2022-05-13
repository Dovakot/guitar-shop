import React, {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';

import {isDisabledCheckbox, isCheckedCheckbox} from '../../../../../utils/filter-utils';
import {fetchGuitarPrice} from '../../../../../store/api-actions/api-actions';
import {setGuitarTypes, setGuitarStrings} from '../../../../../store/actions/actions';

type CheckboxProps = {
  name: string,
  label: string,
  defaultValue: string,
  checkedGuitarAttr: string[],
  validatedGuitarAttr: string[],
  getGuitarsForDefaultPage: () => void,
  isGuitarType?: boolean,
};

function Checkbox({
  name,
  label,
  defaultValue,
  checkedGuitarAttr,
  validatedGuitarAttr,
  getGuitarsForDefaultPage,
  isGuitarType,
}: CheckboxProps): JSX.Element {
  const dispatch = useDispatch();

  const isDisabled = isDisabledCheckbox(validatedGuitarAttr, defaultValue);
  const isChecked = isCheckedCheckbox(isDisabled, checkedGuitarAttr, defaultValue);

  const handleCheckboxChange = async ({target}: ChangeEvent<HTMLInputElement>) => {
    const setValue = (value: string) => isGuitarType ? dispatch(setGuitarTypes(value))
      : dispatch(setGuitarStrings(value));

    await setValue(target.value);
    getGuitarsForDefaultPage();
    dispatch(fetchGuitarPrice());
  };

  return (
    <div className="form-checkbox catalog-filter__block-item">
      <input
        className="visually-hidden"
        type="checkbox"
        id={name}
        name={name}
        disabled={isDisabled}
        defaultValue={defaultValue}
        defaultChecked={isChecked}
        onChange={handleCheckboxChange}
        data-testid="checkbox"
      />
      <label htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
