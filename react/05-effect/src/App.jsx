import './App.css'
import {useEffect, useState} from "react";

function App() {
    //* useEffect : hooks
    /**
     * Bir sayfa yüklendiğinde yapılmasını istediğimiz aksiyonu çağırmak için kullanılır.
     * Aynı işlem bir state de değişiklikmeydana geldiği durumlar için de kullanılır.
     */

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //! Her zaman çalışır.
    useEffect(() => {
        /** 1. parametre bir callback fonksiyon, */
        console.log("Her zaman çalışır.");

    });

    //! Component ilk render edildiğinde çalışır.
    useEffect(() => {
        console.log("Component ilk render edildiğinde çalışır.");
        //? vt den ürünleri getir ve listele (1 defa).
    }, []);


    //! Aşağıdaki iki effect state değişiklğine bağlıdır.
    useEffect(() => {
        console.log("Component ilk render edildiğinde ve firtsName ve lastName state'i değiştiğinde çalışır.")

    }, [firstName, lastName]);

    // useEffect(() => {
    //     console.log("Component ilk render edildiğinde ve lastName state'i değiştiğinde çalışır.")
    //
    // }, [lastName]);

    return (
        <>
            <div>
                <button onClick={() => setFirstName("Ahmet")}>Adı Değiştir</button>
                <button onClick={() => setLastName("Özdemir")}>Soyadı Değiştir</button>
            </div>
        </>
    )
}

export default App
