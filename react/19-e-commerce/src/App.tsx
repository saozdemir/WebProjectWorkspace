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
import type {ProductType, UserType} from "./types/Types.tsx";
import {setCurrentUser, setProducts} from "./redux/appSlice.tsx";
import Navbar from './components/NavBar.tsx';
import productService from "./services/ProductService.ts";
import {setBasket} from "./redux/basketSlice.ts";
import BasketDetails from './components/BasketDetails.tsx';

function App() {
    const {currentUser} = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    const getAllProduct = async () => {
        const products:ProductType[] = await productService.getAllProducts();
        dispatch(setProducts(products));
    }

    const setCurrentUserFromLocalStorage = () => {
        const currentUserString: string | null = localStorage.getItem("currentUser");
        if (currentUserString) {
            const currentUser: UserType = JSON.parse(currentUserString) as UserType;
            dispatch(setCurrentUser(currentUser))
        }
    }

    const setBasketFromLocalStorage = () => {
        const basketString: string | null = localStorage.getItem("basket");
        if (basketString) {
            const basket: ProductType[] = JSON.parse(basketString) as ProductType[];
            dispatch(setBasket(basket));
        }
    }

    useEffect(() => {
        setCurrentUserFromLocalStorage();
        getAllProduct();
        setBasketFromLocalStorage();
    }, []);

    return (
        <div>
            <PrimeReactProvider>
                {currentUser && <Navbar/>}
                <RouterConfig/>
                <ToastContainer autoClose={1500} style={{fontSize: "13px"}}/>
                <Spinner/>
                <BasketDetails/>
            </PrimeReactProvider>

        </div>
    )
}

export default App
