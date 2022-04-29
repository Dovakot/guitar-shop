import React from 'react';
import {useSelector} from 'react-redux';

import {MessageText} from '../../../../const';
import {GuitarCard, Guitars} from '../../../../types/guitar-types';
import {getGuitars} from '../../../../store/reducers/guitar-data/selectors';

import SmallGuitarCard from './small-guitar-card/small-guitar-card';

const getSmallGuitarCard = (guitar: GuitarCard) => (
  <SmallGuitarCard
    key={guitar.id}
    {...guitar}
  />
);

const getGuitarList = (guitars: Guitars) => guitars.length ? guitars.map(getSmallGuitarCard)
  : MessageText.NotFound;

function GuitarList(): JSX.Element {
  const {data, isLoading} = useSelector(getGuitars);

  return (
    <div className="cards catalog__cards">
      {isLoading ? MessageText.Loading : getGuitarList(data)}
    </div>
  );
}

export default GuitarList;
