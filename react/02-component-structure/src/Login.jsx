import React from 'react'

//Export ile sadece belli özelliği dışarı açtık.
export const users = [
    { userName: "Ahmet", password: "1" },
    { userName: "Emir", password: "2" }
]

function Login() {
    return (
        <>
            <div>
                <p>User Name</p>
                <input type='text' />
            </div>
            <div>
                <p>Password</p>
                <input type='password' />
            </div>
            <button>Enter</button>
        </>
    )
}
//export default ile tüm komponenti dışarı açtık açtık
export default Login