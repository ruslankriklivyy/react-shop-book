import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Sort = ({ items, onSelectItem, onChangeInputValue }) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [inputValue, setInputValue] = React.useState('');

  const selectItem = (item, index) => {
    setActiveItem(index);
    onSelectItem(item);
  };

  const changeInputValue = (value) => {
    setInputValue(value);
    onChangeInputValue(value);
  };

  return (
    <Menu secondary>
      {items.map((item, index) => (
        <Menu.Item
          key={index}
          active={activeItem === index}
          onClick={() => selectItem(item, index)}>
          {item.name}
        </Menu.Item>
      ))}
      <Menu.Item>
        <Input
          onChange={(e) => changeInputValue(e.target.value)}
          placeholder="Введите название..."
          value={inputValue}
        />
      </Menu.Item>
    </Menu>
  );
};

export default Sort;
