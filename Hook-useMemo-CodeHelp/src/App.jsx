import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput] = useState(0)
  function expensiveTask(num){
    console.log("Inside Expensive Task")
    for (let i = 0; i <=1000000000; i++) { }
      return num*2;
  }

  // let doublevalue = expensiveTask(input)
  const doublevalue = useMemo(()=> expensiveTask(input),[input])
  return (
    <>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <div>Count : {count}</div>
     <input type="number" placeholder='enter number' value={input} onChange={(e)=>setInput(e.target.value)} />
      <div>doubleValue : {doublevalue}</div>
    </>
  )
}

export default App
