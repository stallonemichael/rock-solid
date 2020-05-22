import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';

const history = createBrowserHistory();
const trackingID = 'UA-167230851-1';
ReactGA.initialize(trackingID);

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
