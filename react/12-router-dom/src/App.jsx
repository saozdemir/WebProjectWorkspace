import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Header from "./components/Header.jsx";
import EmployeeAbout from "./pages/EmployeeAbout.jsx";
import CompanyAbout from "./pages/CompanyAbout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {

    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/products"} element={<Products/>}></Route>
                <Route path={"/product-details/:id"} element={<ProductDetails/>}></Route>
                <Route path={"/about"} element={<About/>}>
                    <Route path={"employee"}
                           element={<EmployeeAbout/>}></Route>{/* '/' karakterini başında kullanmadık*/}
                    <Route path={"company"} element={<CompanyAbout/>}></Route>
                </Route>
                <Route path={"/contact"} element={<Contact/>}></Route>
                <Route path={"*"}
                       element={
                           <NotFoundPage/>}></Route>{/* Eğer url yoksa bu sayfayı yükle dedik "*" path propsuna atadık.*/}
            </Routes>
        </div>)
}

export default App
