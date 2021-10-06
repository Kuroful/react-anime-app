import React from 'react';
import Home from './pages/Home';
import SearchPage from './pages/AnimeSearch';
import UpcomingPage from './pages/Upcoming';
import AnimeList from './pages/AnimeList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Title from './components/Title';


const App = () =>  {


    return (
    <Router>
        <Title/>
        <Switch>
            <Route path="/" exact component= { Home }/>
            <Route path="/AnimeSearch" exact component = {SearchPage}/>
            <Route path="/List" exact component = {AnimeList}/>
            <Route path="/Upcoming" exact component = {UpcomingPage}/>
        </Switch>
    </Router>
  );
}

export default App;
