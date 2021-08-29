import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {PhotoContainer} from "./components/PhotoContainer/PhotoContainer";
import {SearchPage} from "./components/SearchPage/SearchPage";

export function Router() {

    return (
        <Switch>
            <Route exact path="/" render={() => <PhotoContainer/>}/>
            <Route path="/search" render={() => <SearchPage/>}/>
        </Switch>
    );
}


