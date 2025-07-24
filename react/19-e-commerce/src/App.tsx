import './App.css'
import RouterConfig from "./config/RouterConfig.tsx";
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
        <PrimeReactProvider>
            <RouterConfig/>
            <ToastContainer autoClose={1500} style={{fontSize: "13px"}}/>
        </PrimeReactProvider>
    </div>
  )
}

export default App
