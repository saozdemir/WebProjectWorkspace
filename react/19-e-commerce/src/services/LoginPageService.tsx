import axiosInstance from "../config/AxiosConfig.tsx";
import type {UserType} from "../types/Types.tsx";
import type {AxiosResponse} from "axios";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Jul 2025
 * <p>
 * @description:
 */
class LoginPageService {
    login(): Promise<UserType[]> {
        return new Promise((resolve: any, reject: any) => {
            axiosInstance.get("/users")
                .then((response: AxiosResponse<any, any>) => {
                    resolve(response.data)
                })
                .catch((error:any)=>{reject(error)});
        })
    }
}

export default new LoginPageService();