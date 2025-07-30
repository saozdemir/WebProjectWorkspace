import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {type ChangeEvent, useEffect, useState} from "react";
import categoryService from "../services/CategoryService.ts";
import productService from "../services/ProductService.ts";
import {setLoading, setProducts} from "../redux/appSlice.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../redux/store.tsx";
import {toast} from "react-toastify";
import type {ProductType} from "../types/Types.tsx";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 30 Jul 2025
 * <p>
 * @description:
 */

function Category() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<string[]>();

    const getCategories = async () => {
        try {
            dispatch(setLoading(true));
            const response: string[] = await categoryService.getAllCategories();
            if (response) {
                setCategories(response);
            }
        } catch (e) {
            toast.error("An error occurred while fetching categories.");
        } finally {
            dispatch(setLoading(false));
        }
    }

    const handleCategory = async (e: ChangeEvent<HTMLInputElement>, category:string) => {
        try {
            dispatch(setLoading(true));
            console.log(e.target.checked, category);
            if (e.target.checked) {
                const products: ProductType[] = await categoryService.getProductsByCategory(category);
                dispatch(setProducts(products));
            } else {
                const products: ProductType[] = await productService.getAllProducts();
                dispatch(setProducts(products));
            }
        } catch (e) {
            toast.error("An error occurred while filtering products by category.");
        } finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className={"category"}>
            <FormGroup>
                {categories && categories.map((category: string, index: number) => (
                    <FormControlLabel control={<Checkbox onChange={(e:ChangeEvent<HTMLInputElement>)=> handleCategory(e, category)}/>} label={category} key={index}/>
                ))
                }
            </FormGroup>
        </div>
    )
}

export default Category
