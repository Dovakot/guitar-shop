import React, {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';

import {isDisabledCheckbox, isCheckedCheckbox} from '../../../../../utils/filter-utils';
import {fetchGuitarPrice} from '../../../../../store/api-actions/api-actions';

type CheckboxProps = {
  name: string,
  label: string,
  defaultValue: string,
  checkedGuitarAttr: string[],
  validatedGuitarAttr: string[],
  getGuitarsForDefaultPage: () => void,
  setValue: (a: string) => void,
};

function Checkbox({
  name,
  label,
  defaultValue,
  checkedGuitarAttr,
  validatedGuitarAttr,
  getGuitarsForDefaultPage,
  setValue,
}: CheckboxProps): JSX.Element {
  const dispatch = useDispatch();

  const isDisabled = isDisabledCheckbox(validatedGuitarAttr, defaultValue);
  const isChecked = isCheckedCheckbox(isDisabled, checkedGuitarAttr, defaultValue);

  const handleCheckboxChange = async ({target}: ChangeEvent<HTMLInputElement>) => {
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
