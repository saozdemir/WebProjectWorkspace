import React, {useEffect, useState} from 'react';
import "../css/Currency.css";//! ../ ile bir üst dizine çıktı
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import axios from "axios"; //! react-icon ekleme

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"; // "?apikey"=
const API_KEY = "fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V"// "&base_currency=USD"
function Currency() {
    const [currencies, setCurrencies] = useState([]);

    //? Değişkenlrti tutacağımız statelerimizi tanımladık.
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const init = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);
        setCurrencies(Object.keys(response.data.data)); // Tüm para birimi anahtarlarını al
        console.log(Object.keys(response.data.data));
    }

    const exchange = async () => {
        let EXCHANGE_URL = `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`;
        const response = await axios.get(EXCHANGE_URL);
        //* 1."data" axios, 2. "data" exchange api
        //* response.data.data[toCurrency] => Tüm datalardan dönüştürülecek para birimine karşılık gelen değeri al
        let exchange = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(exchange);//! state set edildiği için component otomatik render edilir.
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div className={"currency-div"}>
            <div style={{
                marginTop: "-20px",
                fontFamily: "arial",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                textAlign: "center"
            }}>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div style={{marginTop: "25px"}}>
                <input type={"number"}
                       className={"amount"}
                       value={amount}
                       onChange={(e) => setAmount(e.target.value)}/>
                <select className={"from-currency-option"}
                        onChange={(e) => setFromCurrency(e.target.value)}>
                    {currencies.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
                <FaRegArrowAltCircleRight style={{fontSize: "25px", marginRight: "10px", marginTop: "5px"}}/>
                <select className={"to-currency-option"}
                        onChange={(e) => setToCurrency(e.target.value)}>
                    {currencies.map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))
                    }
                </select>
                <input type={"number"} className={"result"} value={result} readOnly={true}/>
            </div>
            <div>
                <button className={"exchange-button"} onClick={exchange}>Dönüştür</button>
            </div>

        </div>
    );
}

export default Currency;