import './App.css'
import {useState} from "react";

function App() {
    const [exam1, setExam1] = useState(0);
    const [exam2, setExam2] = useState(0);

    const average = () => {
        debugger
        const result = add() / 2;
        printToScreen(result);
    }

    const add = () => {
        debugger
        const result = exam1 + exam2;
        return result;
    }

    const printToScreen = (result) => {
        console.log(result);

    }

    return (
        <>
            <div>
                <div>
                    <input type="number" value={exam1} placeholder="Vize 1" onChange={(e) => {
                        setExam1(Number(e.target.value))
                    }}/>
                </div>
                <div>
                    <input type="number" value={exam2} placeholder="Vize 2" onChange={(e) => {
                        setExam2(Number(e.target.value))
                    }}/>
                </div>
                <div>
                    <button onClick={average}>Ortalama</button>
                </div>
            </div>
        </>
    )
}

export default App
