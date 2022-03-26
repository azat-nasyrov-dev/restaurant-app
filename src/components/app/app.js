import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header/header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={() => <h1>Error Page!</h1>} />
          <Route path="/" component={() => <p>404 - not found :(</p>} />
        </Switch>
      </div>
    );
  }
}
