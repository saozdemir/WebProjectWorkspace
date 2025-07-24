import * as axios from "axios";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 23 Jul 2025
 * <p>
 * @description:
 */
const axiosInstance = axios.default.create({
    baseURL: 'http://localhost:5000',
});

export default axiosInstance;