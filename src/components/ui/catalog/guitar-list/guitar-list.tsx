import React from 'react';
import {useSelector} from 'react-redux';

import {getGuitars} from '../../../../store/reducers/guitar-data/selectors';

import SmallGuitarCard from './small-guitar-card/small-guitar-card';

type GuitarCardProps = {
  id: number;
  name: string;
  type: string;
  previewImg: string;
  stringCount: number;
  rating: number;
  price: number;
};

const getSmallGuitarCard = (guitar: GuitarCardProps) => (
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
