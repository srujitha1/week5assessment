import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import About from './components/About';
import Main from './components/Main';
import UserDetails from './components/UserDetails';
import UserDelete from './components/UserDelete';
import UserUpdate from './components/UserUpdate';
import UserAdd from './components/UserAdd';

const router = (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <div>
            <Route exact path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route exact path="/movies" component={Main}></Route>
            <Route exact path="/movies/:id" component={UserDetails}></Route>
            <Route exact path="/movies/delete/:id" component={UserDelete}></Route>
            <Route exact path="/movies/update/:id" component={UserUpdate}></Route>
            <Route exact path="/AddMovies" component={UserAdd}></Route>
        </div>
    </Router>
)
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

