import { useState } from 'react'
import './App.css'
import HomePage from './homePage'
import About from './About'
import EmailButton from './Email'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
      <EmailButton/>
    </>
  )
}

export default App
