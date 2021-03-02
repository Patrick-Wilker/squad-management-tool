import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';
import Edit from './pages/Edit';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/team" exact component={Team}/>
                <Route path="/team/edit" exact component={Edit}/>
            </Switch>
        </BrowserRouter>
    );
}