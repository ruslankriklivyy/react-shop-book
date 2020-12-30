import axios from 'axios';

const SET_BOOKS = 'SET_BOOKS';
const SET_LOADING = 'SET_LOADING';

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const getBooks = (sortBy, searchValue) => (dispatch) => {
  dispatch(setLoading(true));

  axios
    .get(`http://localhost:3001/books?books&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => {
      const newData = data.filter(
        (item) =>
          item.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ||
          item.author.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
      );
      searchValue.length > 0 ? dispatch(setBooks(newData)) : dispatch(setBooks(data));
    });
  dispatch(setLoading(false));
};
