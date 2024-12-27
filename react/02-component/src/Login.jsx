import React from 'react'

//! users dizisini başka yerde kullanmak için export ile kullanıma açtı. Bu tanımlama bu alanda yapılmalıdır.
//* Kullanıacağı yerde : import {users} from "./Login.jsx"; şeklinde {} parantezler arasında yazılır.
export const users = [
    {name: "Ahmet", id: 1},
    {name: "Emir", id: 2}];

function Login() {
    return (
        <>
            <div>
                <div>
                    <p>Kullanıcı Adı</p>
                    <input type="text"/>
                </div>
                <div>
                    <p>Şifre</p>
                    <input type="password"/>
                </div>
                <button>Giriş</button>
            </div>
        </>
    )
}

//! Login componentini olduğu gibi dış kullanıma açmış olduk.
//* Kullanılacağı yerde import Login from "./Login.jsx"; şeklinde component adı ile yazılır.
export default Login
