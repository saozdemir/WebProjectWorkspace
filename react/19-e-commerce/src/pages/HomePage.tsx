/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 07 May 2025
 * <p>
 * @description:
 */
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadCurrentUser, setLoading, setProducts} from "../redux/appSlice.tsx";
import type {RootState} from "../redux/store.tsx";
import productService from "../services/ProductService.ts";
import {toast} from "react-toastify";
import type {ProductType} from "../types/Types.tsx";
import ProductCard from "../components/ProductCard.tsx";
import '../css/HomePage.css'
import Category from "../components/Category.tsx";
import Container from '@mui/material/Container';

function HomePage() {
    const dispatch = useDispatch();
    const {products} = useSelector((state: RootState) => state.app);
    const {currentUser} = useSelector((state: RootState) => state.app);
    const getAllProducts = async () => {
        try {
            dispatch(setLoading(true));
            const response: ProductType[] = await productService.getAllProducts();
            if (response) {
                dispatch(setProducts(response));
            }
        } catch (e) {
            toast.error("An error occurred while fetching products.");
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        dispatch(loadCurrentUser());
        getAllProducts();
    }, []);

    return (
        <div>
            <div className={"home-page-wrapper"}>
                <Category />
                <Container maxWidth={"xl"}>
                    <div className={"product-list"}>
                        {
                            products && products.map((product: ProductType, index: number) => (
                                <ProductCard key={index} product={product}></ProductCard>))
                        }
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default HomePage
