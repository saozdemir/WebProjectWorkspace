import {useEffect, useState} from 'react'
import axios from "axios";


function App() {

  const [message, setMessage] = useState("EmptyMessage");

  const getMessages = async () => {
    const response = await axios.get("http://localhost:8080/backend/api/message");
    setMessage(response.data);
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
