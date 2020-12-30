import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardGroup } from 'semantic-ui-react';
import { getBooks } from '../redux/actions/book';
import { setSortBy, searchQuery } from '../redux/actions/filters';
import { addBook, removeBook } from '../redux/actions/cart';

import { Menu, Preloader, BookCart, Sort } from '../components';

const sortByArr = [
  { name: 'Все', type: 'all', order: 'desc' },
  { name: 'Популярные', type: 'rating', order: 'desc' },
  { name: 'Цена (дорогие)', type: 'price', order: 'desc' },
  { name: 'Цена (дешевые)', type: 'price', order: 'asc' },
  { name: 'Автор', type: 'author', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ books }) => books.items);
  const { itemsCart, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoading = useSelector(({ books }) => books.isLoading);
  const { sortBy, searchValue } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(getBooks(sortBy, searchValue));
  }, [sortBy, searchValue, itemsCart]);

  const onSelectSortType = (sortByItem) => {
    dispatch(setSortBy(sortByItem));
  };

  const onChangeInputValue = (value) => {
    dispatch(searchQuery(value));
  };

  const onAddBookToCart = (item) => {
    dispatch(addBook(item));
  };

  return (
    <>
      <Menu totalPrice={totalPrice} totalCount={totalCount} />
      <Sort
        items={sortByArr}
        onSelectItem={onSelectSortType}
        onChangeInputValue={onChangeInputValue}
      />
      <CardGroup itemsPerRow={4}>
        {isLoading
          ? items.map((book) => (
              <BookCart
                key={book.id}
                addedCount={cartItems[book.id] && cartItems[book.id].items.length}
                addBookToCart={onAddBookToCart}
                {...book}
              />
            ))
          : Array(19)
              .fill(0)
              .map((_, index) => <Preloader key={index} />)}
      </CardGroup>
    </>
  );
};

export default Home;
