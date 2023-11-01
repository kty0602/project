import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from '../node_modules/redux/src';
import rootReducer, { rootSaga } from './modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import { Provider } from '../node_modules/react-redux/es/exports';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import { ACCESS_TOKEN } from './lib/api/OAuth';
import { check } from './modules/user';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem(ACCESS_TOKEN);
    if (!user) return; // 사용자가 로그인하지 않았을 경우 아무 작업도 수행하지 않습니다.

    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
