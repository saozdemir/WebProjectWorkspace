import './App.css'
import RouterConfig from "./config/RouterConfig.tsx";
import {PrimeReactProvider} from 'primereact/api';
import 'primeicons/primeicons.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner.tsx";
import {store} from './redux/store'
import {Provider} from 'react-redux'

function App() {

    return (
        <div>
            <Provider store={store}>
                <PrimeReactProvider>
                    <RouterConfig/>
                    <ToastContainer autoClose={1500} style={{fontSize: "13px"}}/>
                    <Spinner/>
                </PrimeReactProvider>
            </Provider>

        </div>
    )
}

export default App
