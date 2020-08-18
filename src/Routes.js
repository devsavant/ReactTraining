import React, { PureComponent } from 'react';
import {Route, Switch} from 'react-router-dom'
import MatchingProps from './components/Forms/MatchingProps';
import SimpleForm from './components/Forms/SimpleForm';
import HomePage from './components/common/HomePage';

const Routes = () => {
    return (  
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={SimpleForm} />
        </Switch>
    );
}
 
export default Routes;