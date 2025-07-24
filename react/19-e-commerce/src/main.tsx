import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
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
