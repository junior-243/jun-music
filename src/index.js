import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(
  <div style={{
    // background: require('./images/music.jpeg')
  }} className="bg-secondary">
    <div  style={{
      // background: 'rgba(34,34,34,0.6)'
    }}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>

  </div>,
  document.getElementById('root')
);
