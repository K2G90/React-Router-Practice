import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Profile from './components/Profile'

const Root = () => {
  const handleClick = () =>{
    console.log('Thanks for clicking!')
  };
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">App</NavLink>
        <NavLink activeClassName="red" to="/users">Users</NavLink>
        <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
        <NavLink activeClassName="green" to="/users/1">Kendrick's Profile</NavLink>
        <NavLink to="/" onClick={handleClick}>App with click handler</NavLink>
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
