import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import { HomePage } from './pages/homePage/HomePage';
import { AddNewGoods } from './pages/addNewGoods/AddNewGoods';
import './index.scss';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route index element={<HomePage />} />
          <Route path="addNewGoods" element={<AddNewGoods />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
