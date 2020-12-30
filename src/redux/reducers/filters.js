const initialState = {
  sortBy: {
    type: 'all',
    order: 'desc',
  },
  searchValue: '',
};

const SET_SORT_BY = 'SET_SORT_BY';
const SEARCH_QUERY = 'SEARCH_QUERY';

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case SEARCH_QUERY:
      return {
        ...state,
        searchValue: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
