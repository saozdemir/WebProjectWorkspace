/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Jul 2025
 * <p>
 * @description:
 */
import axios, {type AxiosResponse} from "axios";
import type {ProductType} from "../types/Types.tsx";

class ProductService {

    BASE_URL = "https://fakestoreapi.com";

    getAllProducts(): Promise<ProductType[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error:any) => reject(error));
        });
    }
}

export default new ProductService();