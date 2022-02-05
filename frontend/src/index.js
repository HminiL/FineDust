import React from 'react';
import ReactDOM from 'react-dom';
// import 'index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
//리덕스와 미들웨어 적용을 위해 필요한 모듈 불러오기
import {createStore, applyMiddleware} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"

//rootSaga 하나로 묶기 
import { all, fork } from "redux-saga/effects";
import { rootReducer } from 'app/store';
import { WatchfineDustCity } from 'features/finedust/saga/finedustSaga';

import '@fortawesome/fontawesome-free/js/all.js';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)


// rootSaga를 만들어줘서 store에 추가해주어야 합니다.
export default function* rootSaga() {
  // alert('# 0 root saga')
  yield all([
    fork(WatchfineDustCity)
  ]);
}

//주의//
sagaMiddleware.run(rootSaga)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
