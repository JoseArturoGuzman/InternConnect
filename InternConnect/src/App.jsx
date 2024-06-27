import { useState } from 'react'


import {Landing} from "./Pages/Landing.jsx"
//import { Header } from './Components/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landing/>  
    </>
  )
}

export default App
