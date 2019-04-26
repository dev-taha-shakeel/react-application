import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import RestarauntListingContainer from '../containers/RestarauntListingContainer';
import RestarauntDetailPageContainer from '../containers/RestarauntDetailPageContainer';

export default () => {
 return (
   <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={RestarauntListingContainer}/>
        <Route path='/details/:id' component={RestarauntDetailPageContainer}/>
      </Switch>
    </React.Fragment>
   </BrowserRouter>
 )
}
