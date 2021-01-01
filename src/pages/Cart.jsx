import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardGroup } from 'semantic-ui-react';

import { removeBook } from '../redux/actions/cart';
import CartItem from '../components/CartItem';

import cartEmpty from '../assets/img/cart-empty.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ cart }) => cart);
  const addedBookCart = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="cart">
      <CardGroup itemsPerRow={4}>
        {addedBookCart.length > 0 ? (
          addedBookCart.map((obj) => (
            <CartItem
              key={obj.id}
              onRemoveBook={onRemoveBook}
              id={obj.id}
              title={obj.title}
              image={obj.image}
              author={obj.author}
              price={obj.price}
            />
          ))
        ) : (
          <div className="cart-empty">
            <img src={cartEmpty} alt="cart empty" />
            <h2>Корзина пустая</h2>
          </div>
        )}
      </CardGroup>
    </div>
  );
};

export default Cart;
