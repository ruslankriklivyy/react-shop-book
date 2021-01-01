import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './scss/style.scss';

import Home from './pages/Home';
import Cart from './pages/Cart';
import { Header } from './components';

function App() {
  return (
    <div className="main">
      <Container>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Container>
    </div>
  );
}

export default App;
