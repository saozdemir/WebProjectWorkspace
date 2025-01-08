import React from 'react'
import {useFormik} from "formik";
import {registerFormSchemas} from "../schemas/RegisterFormSchemas.jsx";

function RegisterForm() {

    const submit = (values, action) => {
        console.log(values)
        console.log(action)

        //* Sanki veritabanına
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }

    const {values, errors, handleChange, handleSubmit} = useFormik({
        //*InitialValues içini biz tanımlyoruz. kontrol edilmesini istediğimiz alanlar
        //* inputların value değerlerine verilen state ler burada tanımlanıyor
        initialValues: {
            email: '',
            age: "",
            password: "",
            confirmPassword: "",
            term: ""
        },
        validationSchema: registerFormSchemas, //! Oluşturduğumuz formatı tanımladık.
        onSubmit: submit// handleSubmit'e göderdiğimiz submit buraya tekrar geri geldi. Biz de submit olduğunda çalışacak fonksiyona yönlendirdik.
    });

    return (
        <div>
            <form onSubmit={handleSubmit}> {/* form Submit edildiğinde formikten gelen handleSubmit metodunu kullan*/}
                <div className={"input-div"}>
                    <label htmlFor="">Email</label>
                    {/*Formik ile inputları bağladık. Değer ve değişiklite yapılacak işlemler*/}
                    <input type="text" id={"email"} placeholder={"example@mail.com"} value={values.email}
                           onChange={handleChange}/>
                    {errors.email && <p className={"input-error"}>{errors.email}</p>}
                </div>
                <div className={"input-div"}>
                    <label htmlFor="">Yaş</label>
                    {/*Formik ile inputları bağladık. Değer ve değişiklite yapılacak işlemler*/}
                    <input type="number" id={"age"} placeholder={"Yaşınız"} value={values.age}
                           onChange={handleChange}/>
                    {errors.age && <p className={"input-error"}>{errors.age}</p>}
                </div>
                <div className={"input-div"}>
                    <label htmlFor="">Şifre</label>
                    {/*Formik ile inputları bağladık. Değer ve değişiklite yapılacak işlemler*/}
                    <input type="password" id={"password"} placeholder={"Şifreniz"} value={values.password}
                           onChange={handleChange}/>
                    {errors.password && <p className={"input-error"}>{errors.password}</p>}
                </div>
                <div className={"input-div"}>
                    <label htmlFor="">Şifre(Tekrar)</label>
                    {/*Formik ile inputları bağladık. Değer ve değişiklite yapılacak işlemler*/}
                    <input type="password" id={"confirmPassword"} placeholder={"Şifreniz(Tekrar)"}
                           value={values.confirmPassword}
                           onChange={handleChange}/>
                    {errors.confirmPassword && <p className={"input-error"}>{errors.confirmPassword}</p>}
                </div>
                <div className={"input-div-term"}>

                    {/*Formik ile inputları bağladık. Değer ve değişiklite yapılacak işlemler*/}
                    <input type="checkbox" id={"term"} value={values.term}
                           onChange={handleChange}/>
                    <label htmlFor="">Kullanım koşullarını kabul ediyorum</label>
                    {errors.term && <p className={"input-error"}>{errors.term}</p>}
                </div>
                <button className={"button"} type={"submit"}>Kaydet</button>

            </form>
        </div>
    )
}

export default RegisterForm
