import React, {ChangeEvent} from 'react';

type SearchFieldProps = {
  fieldValue: string,
  onInputChange: (a: ChangeEvent<HTMLInputElement>) => void;
};

function SearchField({fieldValue, onInputChange}: SearchFieldProps): JSX.Element {
  return (
    <>
      <input
        className="form-search__input"
        id="search"
        type="text"
        autoComplete="off"
        placeholder="что вы ищите?"
        value={fieldValue}
        onChange={onInputChange}
        data-testid="search"
      />
      <label className="visually-hidden" htmlFor="search">Поиск</label>
    </>
  );
}

export default SearchField;
