import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponent = ({ totalPrice, totalCount }) => {
  return (
    <Menu>
      <Menu.Item name="editorials">Магазин книг</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="signup">
          Итого: &nbsp; <b>{totalPrice}</b> руб.
        </Menu.Item>
        <Menu.Item name="signup">
          Корзина: (<b>{totalCount}</b>)
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default MenuComponent;
