import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateUser from './assets/Componts/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CreateUser></CreateUser>
     
    </>
  )
}

export default App
