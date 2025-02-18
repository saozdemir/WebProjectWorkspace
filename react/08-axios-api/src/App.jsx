import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

const BASE_URL = "http://localhost:4000"
const POST_BASE_URL = "https://jsonplaceholder.typicode.com/posts/"

function App() {
    //?GET: sorgulama
    //? Tüm kullanıcılar sorgulayan bir requset
    const getAllUsers = async () => {
        const response = await axios.get(BASE_URL + "/users");
        console.log(response.data);
    }

    //? Id ye göre sorgulama bir requset
    const getUserById = async (userId) => {
        //const response = await axios.get(BASE_URL + "/users/" + userId);
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        console.log(response.data);
    }

    //? POST: veri eklemek için kullanılır.
    const createUser = async (newUser) => {
        const response = await axios.post(`${BASE_URL}/users`, newUser);
        console.log("Eklenen kullanıcı : " + response.data)
    }


    //?PUT: veri güncellemek için kullanılır.
    const updateUser = async (userId, updatedUser) => {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    }

    const newUser = {
        "username": "Esra",
        "password": "zz"
    }

    const updatedUser = {
        "username": "Seyit Ahmet",
        "password": "aaa"
    }

    //? DELETE: silme işlemi
    const deleteUserById = async (userId) => {
        const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    }

/**----------------------------------------------------------------------------------------------*/
    //! 2 FARKLI REST API KULLANIM ÖRNEĞİ (ASYNC YAPILARININ ÖNEMİ)
    const getUserByIds = async (userId) => {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data.postId;
    }

    const getPostByIds = async (postId) => {
        const response = await axios.get(`${POST_BASE_URL}${postId}`);
        return response.data;
    }


    const getPost = async () => {
        const postId = await getUserByIds(2);//! await ile beklenmeli!!!!!
        console.log(postId);
        const post = await getPostByIds(postId);//! await ile beklenmeli!!!!!
        console.log(post);
    }

    //! Uygulama ilk yüklendiğinde aşağıdaki metotları çağır. (Sadece sayfa ilk yüklendiğinde çalışır.)
    useEffect(() => {
        getAllUsers(); // GET
        // getUserById(2); // GET
        createUser(newUser) // POST
        // updateUser("1", updatedUser); // PUT
        //deleteUserById("1"); // DELETE
        // getPost();
    }, []);

    return (
        <div>

        </div>
    )
}

export default App
