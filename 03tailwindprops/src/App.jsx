import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind CSS</h1>
        <Card username="Ankur" btnText= "Click me"/>
        <Card username="Gaurav"/>
    </>
  )
}

export default App
