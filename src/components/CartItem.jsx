import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const CartItem = ({ id, image, title, author, price, onRemoveBook }) => {
  const onRemove = () => {
    onRemoveBook(id);
  };

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={onRemove} color="red">
        Удалить с корзины
      </Button>
    </Card>
  );
};

export default CartItem;
