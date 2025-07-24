import axiosInstance from "../config/AxiosConfig.tsx";
import type {UserType} from "../types/Types.tsx";
import type {AxiosResponse} from "axios";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 23 Jul 2025
 * <p>
 * @description:
 */
class RegisterPageService {
    register(newUser: UserType): Promise<UserType> {
        return new Promise((resolve: any, reject: any) => {
            axiosInstance.post("/users", newUser)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }
}

export default new RegisterPageService();