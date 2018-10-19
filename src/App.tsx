import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Characters from './components/Characters/CharacterList';
import Home from './components/Home/index';

import './App.css';

const App: React.SFC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/characters/:code" component={Characters} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
