import React, {FormEvent, ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';

import './form-review.css';

import {ReviewFieldName, ModalType} from '../../../../../../const';
import {
  DEFAULT_RULES,
  validateReviewField,
  validateReviewForm,
  getValueReviewForm
} from '../../../../../../utils/review-utils';
import {sendGuitarReview} from '../../../../../../store/api-actions/api-actions';

import Spinner from '../../../../spinner/spinner';
import ReviewFieldContainer from './review-field-container/review-field-container';
import ReviewRate from './review-rate/review-rate';

type FormReviewProps = {
  guitarId: number,
  guitarName: string,
  setModalType: (a: string) => void,
};

function FormReview({guitarId, guitarName, setModalType}: FormReviewProps): JSX.Element {
  const dispatch = useDispatch();
  const [rules, setRules] = useState(DEFAULT_RULES);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (target: HTMLFormElement) => {
    const data = getValueReviewForm(target, guitarId);

    await setIsLoading(true);
    await dispatch(sendGuitarReview(data));

    setIsLoading(false);
    setModalType(ModalType.Success);
  };

  const handleFormChange = ({target}: FormEvent<HTMLFormElement>) => validateReviewField(
    target as HTMLFormElement, setRules,
  );

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const {target}: {target: HTMLFormElement} = evt;

    if (validateReviewForm(target, setRules)) {
      submitForm(target);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}

      <h2 className="modal__header modal__header--review title title--medium">
        Оставить отзыв
      </h2>
      <h3 className="modal__product-name title title--medium-20 title--uppercase">
        {guitarName}
      </h3>
      <form
        className="form-review"
        autoComplete="off"
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
        data-testid="form-review"
      >
        <div className="form-review__wrapper">
          <div className="form-review__name-wrapper">
            <ReviewFieldContainer
              id={ReviewFieldName.Name}
              name={ReviewFieldName.Name}
              type="text"
              label="Ваше Имя"
              modifier="name"
              {...rules[ReviewFieldName.Name]}
            />
          </div>

          <ReviewRate
            name={ReviewFieldName.Rate}
            {...rules[ReviewFieldName.Rate]}
          />
        </div>

        <ReviewFieldContainer
          id={ReviewFieldName.Advantage}
          name={ReviewFieldName.Advantage}
          type="text"
          label="Достоинства"
        />
        <ReviewFieldContainer
          id={ReviewFieldName.Disadvantage}
          name={ReviewFieldName.Disadvantage}
          type="text"
          label="Недостатки"
        />
        <ReviewFieldContainer
          id={ReviewFieldName.Comment}
          name={ReviewFieldName.Comment}
          label="Комментарий"
        />

        <button className="button button--medium-20 form-review__button" type="submit">
          Отправить отзыв
        </button>
      </form>
    </>
  );
}

export default FormReview;
