import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import './App.css';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvents from './components/AddEvents/AddEvents';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log('loggedInUser', loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/addEvents">Add Event</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book/:bookType">
              <Book />
            </PrivateRoute>
            <Route path="/addEvents">
              <AddEvents />
            </Route>
            <Route path="/dashboard">
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    </UserContext.Provider >

  );
}
export default App;
