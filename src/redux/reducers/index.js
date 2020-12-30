import { combineReducers } from 'redux';
import books from './books';
import filters from './filters';
import cart from './cart';

import 'semantic-ui-css/semantic.min.css';

const rootReducers = combineReducers({
  books,
  filters,
  cart,
});

export default rootReducers;
