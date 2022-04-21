import React from 'react';

type SearchFieldProps = {
  fieldValue: string,
};

function SearchField({fieldValue}: SearchFieldProps): JSX.Element {
  return (
    <>
      <input
        className="form-search__input"
        id="search"
        type="text"
        autoComplete="off"
        placeholder="что вы ищите?"
        defaultValue={fieldValue}
      />
      <label className="visually-hidden" htmlFor="search">Поиск</label>
    </>
  );
}

export default SearchField;
