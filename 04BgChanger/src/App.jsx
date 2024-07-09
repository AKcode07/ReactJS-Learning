import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-600 text-3xl'>Bg Changer App with Vite</h1>
    </>
  )
}

export default App
