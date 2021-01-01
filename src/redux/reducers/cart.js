const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const currentItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItem,
          totalPrice: currentItem.reduce((sum, obj) => sum + obj.price, 0),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };

    case REMOVE_BOOK: {
      const newItems = { ...state.items };
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default filters;
