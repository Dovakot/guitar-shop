import React, {FocusEvent} from 'react';

import {formatPlaceholder} from '../../../../../../utils/filter-utils';

type PriceFieldProps = {
  id: string,
  name: string,
  value: string,
  defaultValueMin: number,
  defaultValueMax: number,
  placeholder: number,
  onFieldBlur: (a: FocusEvent<HTMLInputElement>) => Promise<void>,
};

function PriceField({
  id,
  name,
  value,
  defaultValueMin,
  defaultValueMax,
  placeholder,
  onFieldBlur,
}: PriceFieldProps): JSX.Element {
  const formattedPlaceholder = formatPlaceholder(placeholder);
  const defaultValue = value || '';

  return (
    <input
      id={id}
      type="number"
      name={name}
      min={defaultValueMin}
      max={defaultValueMax}
      defaultValue={defaultValue}
      placeholder={formattedPlaceholder}
      onBlur={onFieldBlur}
    />
  );
}

export default PriceField;
