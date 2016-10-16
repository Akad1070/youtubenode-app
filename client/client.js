import React    from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux'; 

import routes from './scripts/routes';



const middlewares = [thunk];
 
if (process.env.NODE_ENV !== 'production') {
  const logger = require(`redux-logger`);
  middlewares.push(logger());
}



const store = createStore(
  (state = {}) => state,
  
    applyMiddleware(...middlewares)
    //window.devToolsExtension ? window.devToolsExtension() : f => f
);



render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
), document.getElementById('app'));


