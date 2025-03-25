import './App.css'
import WordAdd from "./components/WordAdd.jsx";
import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css';
import WordTable from "./components/WordTable.jsx"; //core css


function App() {

    return (
        <div>
            <WordAdd/>
            <WordTable/>
        </div>
    )
}

export default App
