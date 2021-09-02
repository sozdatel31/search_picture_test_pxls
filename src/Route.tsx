import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {PhotoContainer} from "./components/PhotoContainer/PhotoContainer";
import {SearchPage} from "./components/SearchPage/SearchPage";
import Modal from "./components/Modal/Modal";

export function Router() {
    return (<div>
            <Switch>
                <Route exact path="/" render={() => <PhotoContainer/>}/>
                <Route path="/search/:searchTitle" render={() => <SearchPage/>}/>
                <Route path="/photo/:id" children={<Modal/>}/>
            </Switch>
        </div>
    );

}


