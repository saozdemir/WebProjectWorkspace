import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store.tsx";
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
    //Yeni kullanım yöntemi(App.tsx gerekmiyor)
    // <StrictMode>
    //     <Provider store={store}>
    //         <PrimeReactProvider>
    //             <ToastContainer autoClose={1500} style={{ fontSize: '13px' }} />
    //             <RouterProvider router={router} />
    //         </PrimeReactProvider>
    //     </Provider>
    // </StrictMode>
)
