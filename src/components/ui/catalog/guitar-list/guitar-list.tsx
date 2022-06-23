import React from 'react';
import {useSelector} from 'react-redux';

import './guitar-list.css';

import {MessageText} from '../../../../const';
import {Guitar} from '../../../../types/guitar-types';
import {getGuitars} from '../../../../store/reducers/product-data/selectors';
import {getOrderConfig} from '../../../../store/reducers/cart-data/selectors';

import SmallGuitarCard from './small-guitar-card/small-guitar-card';

function GuitarList(): JSX.Element {
  const {guitars, isLoading} = useSelector(getGuitars);
  const order = useSelector(getOrderConfig);

  const getSmallGuitarCard = (guitar: Guitar) => {
    const isToCart = guitar.id in order;

    return (
      <SmallGuitarCard
        key={guitar.id}
        isToCart={isToCart}
        {...guitar}
      />
    );
  };

  const getGuitarList = () => guitars.length ? guitars.map(getSmallGuitarCard)
    : MessageText.NotFound;

  return (
    <div
      className="cards catalog__cards"
      data-testid="catalog-cards"
    >
      {isLoading ? MessageText.Loading : getGuitarList()}
    </div>
  );
}

export default GuitarList;
