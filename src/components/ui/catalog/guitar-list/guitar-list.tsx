import React from 'react';
import {useSelector} from 'react-redux';

import './guitar-list.css';

import {MessageText} from '../../../../const';
import {Guitar, Guitars} from '../../../../types/guitar-types';
import {getGuitars} from '../../../../store/reducers/product-data/selectors';

import SmallGuitarCard from './small-guitar-card/small-guitar-card';

const getSmallGuitarCard = (guitar: Guitar) => (
  <SmallGuitarCard
    key={guitar.id}
    {...guitar}
  />
);

const getGuitarList = (guitars: Guitars) => guitars.length ? guitars.map(getSmallGuitarCard)
  : MessageText.NotFound;

function GuitarList(): JSX.Element {
  const {guitars, isLoading} = useSelector(getGuitars);

  return (
    <div
      className="cards catalog__cards"
      data-testid="catalog-cards"
    >
      {isLoading ? MessageText.Loading : getGuitarList(guitars)}
    </div>
  );
}

export default GuitarList;
