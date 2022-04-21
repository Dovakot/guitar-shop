import React, {ChangeEvent, FocusEvent, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {debouncedFetchData} from '../../../../utils/utils';

import {getFoundGuitars} from '../../../../store/reducers/guitar-data/selectors';
import {searchGuitars} from '../../../../store/actions/actions';
import {fetchFoundGuitars} from '../../../../store/api-actions/api-actions';

import SearchList from './search-list/search-list';
import SearchField from './search-field/search-field';

function Search(): JSX.Element {
  const {guitars, guitarCount} = useSelector(getFoundGuitars);

  const dispatch = useDispatch();
  const [fieldValue, setFieldValue] = useState('');

  const handleFormChange = ({target}: ChangeEvent<HTMLFormElement>) => {
    const {value} = target;
    const truncValue = value.trim();

    setFieldValue(truncValue);
    debouncedFetchData(dispatch, fetchFoundGuitars, searchGuitars, truncValue);
  };

  const handleSearchBlur = ({currentTarget, relatedTarget}: FocusEvent<Element | Node>) => !currentTarget
    .contains(relatedTarget) && dispatch(searchGuitars());

  useEffect(() => () => {
    dispatch(searchGuitars());
    setFieldValue('');
  }, [dispatch]);

  return (
    <div className="form-search" onBlur={handleSearchBlur}>
      <form
        className="form-search__form"
        onChange={handleFormChange}
      >
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width={14} height={15} aria-hidden="true">
            <use xlinkHref="#icon-search" />
          </svg>
          <span className="visually-hidden">Начать поиск</span>
        </button>

        <SearchField fieldValue={fieldValue} />
      </form>

      {guitarCount ? <SearchList guitars={guitars} /> : ''}
    </div>
  );
}

export default Search;
