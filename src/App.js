import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Container>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Container>
  );
}

export default App;
