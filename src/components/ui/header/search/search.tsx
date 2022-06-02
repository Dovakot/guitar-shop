import React, {ChangeEvent, FocusEvent, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {debouncedFindGuitars} from '../../../../utils/utils';
import {resetFoundGuitars} from '../../../../store/reducers/product-data/product-data';
import {getFoundGuitars} from '../../../../store/reducers/product-data/selectors';
import {fetchFoundGuitars} from '../../../../store/api-actions/api-actions';

import SearchList from './search-list/search-list';
import SearchField from './search-field/search-field';

function Search(): JSX.Element {
  const dispatch = useDispatch();
  const {foundGuitars, guitarCount} = useSelector(getFoundGuitars);
  const [fieldValue, setFieldValue] = useState('');
  const {id} = useParams<{id: string}>();

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target;
    const truncValue = value.trim();

    setFieldValue(truncValue);
    debouncedFindGuitars(dispatch, fetchFoundGuitars, resetFoundGuitars, truncValue);
  };

  const handleSearchBlur = ({currentTarget, relatedTarget}: FocusEvent<Element | Node>) => !currentTarget
    .contains(relatedTarget) && dispatch(resetFoundGuitars());

  useEffect(() => () => {
    dispatch(resetFoundGuitars());
    setFieldValue('');
  }, [dispatch, id]);

  return (
    <div
      className="form-search"
      data-testid="header-search"
      onBlur={handleSearchBlur}
    >
      <form className="form-search__form">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width={14} height={15} aria-hidden="true">
            <use xlinkHref="#icon-search" />
          </svg>
          <span className="visually-hidden">Начать поиск</span>
        </button>

        <SearchField fieldValue={fieldValue} onInputChange={handleInputChange} />
      </form>

      {guitarCount ? <SearchList guitars={foundGuitars} /> : ''}
    </div>
  );
}

export default Search;
