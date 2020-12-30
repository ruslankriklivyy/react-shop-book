const SET_SORT_BY = 'SET_SORT_BY';
const SEARCH_QUERY = 'SEARCH_QUERY';

export const setSortBy = (sortByItem) => ({
  type: SET_SORT_BY,
  payload: sortByItem,
});

export const searchQuery = (value) => ({
  type: SEARCH_QUERY,
  payload: value,
});
