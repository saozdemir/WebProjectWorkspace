/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 22 Jul 2025
 * <p>
 * @description: Yup kuralları tanımlandı.
 */
import * as yup from 'yup';

export const registerPageSchema = yup.object().shape({
    username: yup.string()
        .required('Kullanıcı adı zorunludur'),
    password: yup.string()
        .required('Parola zorunludur')
})
