import './App.css'
import {useState} from "react";

function App() {

    //*useState : hooks

    //* String firstName = "Ahmet";
    //* public void setFirstName (String firstName) {}
    //! Bir state'in değeri set metodu ile değiştirilirse component yeniden render edilir.
    const [firstName, setFirstName] = useState("Emir");// [değişken,]
    const [lastName, setLastname] = useState("Özdemir");
    const [names, setNames] = useState(["Ahmet", "Emir", "Esra"]); //*Array
    const [userInfo, setUserInfo] =
        useState({userName: "Ahmet", password: "123456"});
    const [showPassword, setShowPassword] = useState(true);

    const [count, setCount] = useState(0);

    function setSurname() {
        setLastname("ÖZDEMİR");
    }

    const counter = () => {
        setCount(count + 1);
    }

    //! Her arttır butonuna basıldığında component render ediliyor. Yukarıdaki açıklamanın aynısı.
    console.log("Component Render Edildi!");

    return (<>
        <div>{firstName} {lastName}</div>
        <div>
            {/*İlk yöntem callback function ile tanımlama*/}
            <button onClick={() => {
                setFirstName("Esra")
            }}>İsmi Değiştir
            </button>
            {/*İkinci fonksiyon ile tanımlama: yukarıda tanımlana JS fonksiyonunu kullandı.*/}
            <button onClick={setSurname}> Soyadını Büyüt</button>
        </div>

        <div>
            {/* Burada süslü parantez {} kullanılırsa return koymak gerekir.
                    Normal parantez () konulursa return a gerek kalmaz*/}
            {names.map((name, index) => (<div key={index}>{name}</div>))}
        </div>
        <hr/>
        <div>
            <div>Kullanıcı Bilgileri</div>
            <div>{userInfo.userName}</div>
            <div>{showPassword ? <div>{userInfo.password}</div> : <div>Şifre gösterimi kapalı</div>}</div>
            <hr/>
            <div>
                <button onClick={() => {
                    setShowPassword(!showPassword)
                }}>Şifreyi Aç/Kapa
                </button>
            </div>
            <hr/>
            <div>
                <div>Count: {count}</div>
                <div>
                    <button onClick={counter}>Arttır</button>
                </div>
            </div>
        </div>
    </>)
}

export default App
