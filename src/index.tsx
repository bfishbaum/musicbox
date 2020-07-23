import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import App from './App';
import { store, history } from './app/store';
import * as serviceWorker from './serviceWorker';
// import { MusicNotes } from './features/musicnotes/Musicnotes';
// import { Soundboard } from './features/soundboard/Soundboard';
import { Toplevel } from './features/toplevel/Toplevel';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
			<Toplevel/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
