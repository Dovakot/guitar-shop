import React from 'react';
import {useSelector} from 'react-redux';

import {GuitarCard} from '../../../../types/guitar-types';
import {getGuitars} from '../../../../store/reducers/guitar-data/selectors';

import SmallGuitarCard from './small-guitar-card/small-guitar-card';

const getSmallGuitarCard = (guitar: GuitarCard) => (
  <SmallGuitarCard
    key={guitar.id}
    {...guitar}
  />
);

function GuitarList(): JSX.Element {
  const {data} = useSelector(getGuitars);

  return (
    <div className="cards catalog__cards">
      {data.map(getSmallGuitarCard)}
    </div>
  );
}

export default GuitarList;
