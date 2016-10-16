import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App              from './pages/App';
import TrendPage        from './pages/TrendPage';
import SignInPage       from './pages/SignInPage';



export default (
    <Route path="/" component={App}>
          <IndexRoute component={TrendPage}/>
          <Route path="signin" component={SignInPage} />
          <Route path="trends" component={TrendPage} />
          <Route path="search/:keyword" component={TrendPage} />
          <Route path="search/:type/:keyword" component={TrendPage} />
      </Route>
);