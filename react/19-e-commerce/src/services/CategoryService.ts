import axios, {type AxiosResponse} from "axios";
import type { ProductType } from "../types/Types";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 30 Jul 2025
 * <p>
 * @description:
 */
class CategoryService{
    BASE_URL = "https://fakestoreapi.com";

    getAllCategories(): Promise<string[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products/categories`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error:any) => reject(error));
        });
    }

    getProductsByCategory(category:string): Promise<ProductType[]>{
        return new Promise((resolve:any, reject:any)=>{
            axios.get(`${this.BASE_URL}/products/category/${category}`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error:any) => reject(error));
        });
    }
}
export default new CategoryService();