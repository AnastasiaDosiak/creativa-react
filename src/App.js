import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import { ROUTES } from './components/Menu/utils/config';



function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        {ROUTES.map(({ path, page }, index) => <Route key={index} path={path} component={page} />)}
      </Switch>
    </div>
  );
}

export default App;
