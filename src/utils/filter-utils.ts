import {GuitarType, GuitarString} from '../const';
import {formatPrice} from '../utils/utils';
import {GeneratedParams} from '../types/types';

const guitarTypeСonfig: GeneratedParams = {
  [GuitarType.Acoustic]: [GuitarString.Six, GuitarString.Seven, GuitarString.Twelve],
  [GuitarType.Electric]: [GuitarString.Four, GuitarString.Six, GuitarString.Seven],
  [GuitarType.Ukulele]: [GuitarString.Four],
};

const guitarStringСonfig = Object.entries(guitarTypeСonfig)
  .reduce((types: GeneratedParams, [type, stringCount]) => {
    stringCount.forEach((count: string) => {
      const list = types[count] || [];
      list.push(type);

      types[count] = list;
    });

    return types;
  }, {});

const getValidatedAttrs = (attrs: string[], attrsСonfig: GeneratedParams) => {
  const validatedAttrs = attrs.reduce((list: string[], key) => {
    const values = attrsСonfig[key];

    return [...list, ...values];
  }, []);

  return [...new Set(validatedAttrs)] as never[];
};

const checkGuitarTypes = (attrs: string[]) => getValidatedAttrs(attrs, guitarStringСonfig);

const checkGuitarStrings = (attrs: string[]) => getValidatedAttrs(attrs, guitarTypeСonfig);

const filterGuitarAttr = (attrs: string[], name: string) => {
  const filteredAttr = attrs.filter((value) => value !== name);

  if (attrs.length === filteredAttr.length) {
    filteredAttr.push(name);
  }

  return filteredAttr;
};

const isDisabledCheckbox = (attrs: string[], value: string) => attrs.length
  ? !attrs.includes(value) : false;

const isCheckedCheckbox = (isDisabled: boolean, attrs: string[], value: string) => isDisabled
  ? false : attrs.includes(value);

const checkValue = (field: HTMLInputElement, defaultPrice: number, activePrice: string) => {
  const isInvalid = !field.checkValidity();

  if (isInvalid) {
    field.value = defaultPrice.toString();
  }

  return field.value !== activePrice;
};

const formatPlaceholder = (price: number) => price ? formatPrice(price) : '';

export {
  checkGuitarTypes,
  checkGuitarStrings,
  filterGuitarAttr,
  isDisabledCheckbox,
  isCheckedCheckbox,
  checkValue,
  formatPlaceholder
};
