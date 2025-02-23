import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [message, setMessage] = useState("EmptyMessage")

  const getMessages = async () => {
    debugger
    const response = await axios.get("http://localhost:8080/backend/api/message");
    setMessage(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    return () => {
      setMessage(getMessages);
    };
  }, []);

  return (
    <div>
        {"*" + message}
    </div>
  )
}

export default App
