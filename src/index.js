import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

// rootReducer - 여러개의 reducer 들을 모아서 import 함.
import {createStore} from 'redux';
import rootReducer from './modules/reducers'


let store = createStore(rootReducer)
console.log(store.getState())
// counter 에서 지정한 initialState 를 reducer 에서 호출한뒤 가져올 수 있게 됨.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 필요할 때마다 store 에 접근 할 수 있다.
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();