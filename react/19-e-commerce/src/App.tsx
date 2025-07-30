import './App.css'
import RouterConfig from "./config/RouterConfig.tsx";
import {PrimeReactProvider} from 'primereact/api';
import 'primeicons/primeicons.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner.tsx";
import {store, type RootState} from './redux/store'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import type {UserType} from "./types/Types.tsx";
import {setCurrentUser} from "./redux/appSlice.tsx";
import Navbar from './components/NavBar.tsx';

function App() {
    const {currentUser} = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        const currentUserString: string | null = localStorage.getItem("currentUser");
        if (currentUserString) {
            const currentUser: UserType = JSON.parse(currentUserString) as UserType;
            dispatch(setCurrentUser(currentUser))
        }
    }, [])

    return (
        <div>
            <PrimeReactProvider>
                {currentUser && <Navbar/>}
                <RouterConfig/>
                <ToastContainer autoClose={1500} style={{fontSize: "13px"}}/>
                <Spinner/>
            </PrimeReactProvider>

        </div>
    )
}

export default App
