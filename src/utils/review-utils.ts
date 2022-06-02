import {Dispatch, SetStateAction} from 'react';

import {ReviewFieldName} from '../const';
import {getSelectedElements} from './utils';
import {GeneratedReview} from '../types/types';
import {GuitarComments, GuitarComment} from '../types/guitar-types';

type DefaultRules = {
  [key: string]: {
    message: string,
    isValid: boolean,
    validate: (a: HTMLFormElement) => boolean,
  },
};

type Action = Dispatch<SetStateAction<DefaultRules>>;

const REVIEW_TO = 2;

const DEFAULT_RULES: DefaultRules = {
  [ReviewFieldName.Name]: {
    message: 'Заполните поле',
    isValid: true,
    validate: ({value}: HTMLFormElement) => value.trim().length > 0,
  },
  [ReviewFieldName.Rate]: {
    message: 'Поставьте оценку',
    isValid: true,
    validate: (field: HTMLFormElement) => field.length ? getSelectedElements(field).length > 0
      : field.checked,
  },
};

const reviewСonfig: {[key: string]: string} = {
  userName: ReviewFieldName.Name,
  advantage: ReviewFieldName.Advantage,
  disadvantage: ReviewFieldName.Disadvantage,
  comment: ReviewFieldName.Comment,
  rating: ReviewFieldName.Rate,
};

const reviewFields = Object.keys(reviewСonfig);

const getValidationField = (field: HTMLFormElement) => field.length ? field[0] : field;

const validateReviewField = (field: HTMLFormElement, setRules: Action) => {
  const {name} = getValidationField(field) as HTMLFormElement;
  const validationField = DEFAULT_RULES[name];

  if (!validationField) {
    return;
  }

  const isValid = validationField.validate(field);

  setRules((prevValue) => ({
    ...prevValue,
    [name]: {
      ...prevValue[name],
      isValid,
    },
  }));

  return isValid;
};

const validateReviewForm = (field: HTMLFormElement, setRules: Action) => {
  const list = [];
  let isFocus = false;

  for (const key in DEFAULT_RULES) {
    const currentField = field[key];
    const isValid = validateReviewField(currentField, setRules);

    list.push(isValid);

    if (!isValid && !isFocus) {
      const validationField = getValidationField(currentField) as HTMLFormElement;

      isFocus = true;
      validationField.focus();
    }
  }

  return list.every((item) => item);
};

const getValueReviewForm = (form: HTMLFormElement, id: number) => Object.entries(reviewFields)
  .reduce((review: GeneratedReview, [index, key]) => {
    const name = reviewСonfig[key];

    review[key] = name === ReviewFieldName.Rate
      ? +getSelectedElements(form[ReviewFieldName.Rate])[0].value
      : form[name].value || '-';

    return review;
  }, {guitarId: id});

const addLoadedReviews = (oldReviews: GuitarComments, newReviews: GuitarComments) => oldReviews
  .concat(newReviews);

const addNewReview = (oldReviews: GuitarComments, review: GuitarComment) => {
  const newReviews = oldReviews.slice(0, REVIEW_TO);
  newReviews.unshift(review);

  return newReviews;
};

export {
  DEFAULT_RULES,
  validateReviewField,
  validateReviewForm,
  getValueReviewForm,
  addLoadedReviews,
  addNewReview
};
