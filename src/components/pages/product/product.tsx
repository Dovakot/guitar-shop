import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {fetchGuitar, fetchGuitarReviews} from '../../../store/api-actions/api-actions';
import {resetGuitar} from '../../../store/reducers/product-data/product-data';
import {resetGuitarReviews} from '../../../store/reducers/review-data/review-data';
import {getGuitar, getGuitarName} from '../../../store/reducers/product-data/selectors';

import BasePage from '../../base-page/base-page';
import Loading from '../../ui/loading/loading';
import GuitarCard from '../../ui/guitar-card/guitar-card';

function Product(): JSX.Element {
  const dispatch = useDispatch();
  const {id} = useParams<{id: string}>();
  const {guitar, isLoading, isError} = useSelector(getGuitar);
  const title = useSelector(getGuitarName);

  useEffect(() => {
    const resetGuitarPage = async () => {
      await dispatch(resetGuitar());
      dispatch(resetGuitarReviews());
    };

    (async () => {
      await dispatch(fetchGuitar(id));
      dispatch(fetchGuitarReviews(id));
    })();

    return () => {
      resetGuitarPage();
    };
  }, [dispatch, id]);

  return (
    <BasePage
      title={title}
    >
      {isLoading
        ? <Loading isError={isError} />
        : <GuitarCard {...guitar} />}
    </BasePage>
  );
}

export default Product;
