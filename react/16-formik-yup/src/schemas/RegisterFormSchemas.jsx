import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
//! Kontroller burada ekleniyor. useFormik> initialValues altına hangi isim ile tanımlandıysa o olacak!!!
    email: yup.string().email("Geçerli email adresi giriniz.").required("Email adresi zorunlu."),
    age: yup.number().positive("Yaş sıfırdan küçük olamaz.").integer("Tamsayı giriniz").required("Yaş alanı zorunlu"),
    password: yup.string().required("Şifre alanı zorunlu."),
    confirmPassword: yup.string().required("Şifre tekrar alanı zorunlu.").oneOf([yup.ref("password", yup.password)], "Şifreler eşleşmiyor."),
    term: yup.boolean().required("Sözleşmeyi onaylayınız")
})