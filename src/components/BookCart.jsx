import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const BookCart = (book) => {
  const { title, author, image, price, addedCount, addBookToCart } = book;

  const addBook = () => {
    addBookToCart(book);
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
      <Button onClick={addBook}>
        Добавить в корзину {addedCount > 0 ? `(${addedCount})` : null}
      </Button>
    </Card>
  );
};

export default BookCart;
