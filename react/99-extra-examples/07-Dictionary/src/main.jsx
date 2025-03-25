import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from './redux/store';
import {PrimeReactProvider} from "primereact/api";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <PrimeReactProvider>
          <App />
      </PrimeReactProvider>
  </Provider>,
)
