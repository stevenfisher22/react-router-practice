import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
// import './index.css';
import App from './App';
import AddMovie from './components/AddMovie';
import AllMovies from './components/AllMovies';
import BaseLayout from './components/BaseLayout';
import Article from "./components/Article";
import Forms from "./components/Forms";

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/add-movie" component={AddMovie} />
                <Route path="/all-movies" component={AllMovies} />

                <Redirect from="/old-page" to="/"></Redirect>

                <Route path="/article/:art" component={Article}></Route>

                <Route path="/forms" component={Forms}></Route>

            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root')
);


