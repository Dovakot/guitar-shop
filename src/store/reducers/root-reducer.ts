import {combineReducers} from 'redux';

import guitarData from './guitar-data/guitar-data';

enum NameSpace {
  Guitar = 'GUITAR',
}

const rootReducer = combineReducers({
  [NameSpace.Guitar]: guitarData,
});

export {
  NameSpace,
  rootReducer
};
