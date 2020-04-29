import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './core/service-worker';
import { GloablStyles } from './styles';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GloablStyles />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();