const initialState = {
  isLoading: false,
  items: null,
};

const SET_BOOKS = 'SET_BOOKS';
const SET_LOADING = 'SET_LOADING';

const books = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default books;
