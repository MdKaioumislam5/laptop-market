import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import './App.css';
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
import LaptopMarket from './components/LaptopMarket/LaptopMarket';
import ManageProducts from './components/ManageProducts/ManageProducts';
 


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
                <Link to="/laptop">LaptopMarket</Link>
              </li>
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
                <Link to="/event">Book</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/manageProducts">Manage Products</Link>
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
            <Route path="/laptop">
              <LaptopMarket />
            </Route>
            <Route path="/manageProducts">
              <ManageProducts/>
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
