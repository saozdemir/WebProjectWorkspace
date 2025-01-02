import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store.jsx";
/*
! App componentinde Redux Toolkit kullanmak için Provider componentine sardık.
! store.jsx de oluşturduğumuz store'u Provider componentine props olarak verdik.
* */
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>,
)
