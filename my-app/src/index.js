import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import { BrowserRouter, Route } from 'react-router-dom';
import { Profile } from './components/Profile'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/users/:userId">
          <Profile />
        </Route>
    </div>
    </BrowserRouter>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
