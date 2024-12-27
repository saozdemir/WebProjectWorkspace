import './App.css'

function App() {

    /** Java Script kodları bu alana yazılıyor.*/
    let a = 5;
    let b = 3;
    let result = a + b;

    const name = "Ahmet";
    let exam1 = 60;
    let exam2 = 80;

    let names = ["Ahmet", "Emir", "Esra"];

    return (/** HTML kodları bu alana yazılıyor. */
        //! JSX : {} parantezler arasında JS kodunu HTML içine yazdırma.
        <div>
            <p>Sonuç: {result}</p>
            <p>İsim: {name}</p>
            <p>Dersi Geçme Durumu: {((exam1 + exam2) / 2) >= 50 ? <p>Geçti</p> : <p>Kaldı</p>}</p>
            {
                names.map((name, index) => (
                    <div style={{
                        backgroundColor: "orange",
                        border: "1px solid black"
                    }} key={index}>{names}</div>//! style verilirken bir {} parantez daha açılır
                ))
            }
        </div>)
}

/** Bir komponentin dışarıda kullanılmasını sağlamak için export edilmesi gerekmektedir.*/
export default App
