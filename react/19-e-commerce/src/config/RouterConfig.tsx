/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 07 May 2025
 * <p>
 * @description:
 */
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";
import ProductDetails from "../pages/ProductDetails.tsx";

function RouterConfig() {
    return (
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path='/product-details/:productId' element={<ProductDetails />} />
            </Routes>
    )
}

export default RouterConfig
