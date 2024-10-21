import React from 'react'

function TestComponent() {
    //JSX: {} küme parantezi ile ifade edilen kısımlar. Html kodu içine java script yazmak için kullanılır.
    //Javascript kodlarının yazılacağı alan
    let a = 15;
    const firtName = "Ahmet";

    let exam1 = 60;
    let exam2 = 80;

    let pass = true;

    let names = ["Ahmet", "Emir", "Esra"];

    return (
        //Html kodlarının yazılacağı alan
        <div>
            {/* <p> a değeri = {a}</p>
      <p>Adı: {firtName}</p> */}

            <p>Ortalama: {(exam1 + exam2) / 2}</p>
            <p>{pass ? <p>Pass</p> : <p>Fail</p>}</p>

            {
                names.map((name, index) => (
                    <div style={{
                        backgroundColor: "orange",
                        border: "1px solid black"
                    }} key={index}>{name}</div>
                    //Style için ilk açılan parantez JSX, 
                    //İkinci açılan parantez style temsil eder.
                ))
            }
        </div>
    )
}

export default TestComponent