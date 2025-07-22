import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div>Sentry IO Example</div>
        <button onClick={() => {throw new Error("This is sentry React Error!");}}>Error Message!</button>
        <button onClick={() => {throw new AxiosError("This is sentry React Error!");}}>Axios Error Message!</button>
    </div>
  )
}

export default App
