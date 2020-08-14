import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MatchingProps from './components/Forms/MatchingProps';
import SimpleForm from './components/Forms/SimpleForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MatchingProps} />
      <Route path='/login' component={SimpleForm} />
    </Switch>
  )
}

export default Routes