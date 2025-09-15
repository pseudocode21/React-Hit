import { useState } from "react";
function App() {
  // let counter  = 15; //this will not update the ui 
// When you click Increment or Decrement, you do change the variable value.
// But React does not know about that change.
// React re-renders a component only when state or props change
// Since counter is just a plain variable, the UI doesn’t update (only console.log shows new values).

  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    // counter = counter +1;
    // console.log("increment clicked",counter)
    // counter = counter+1;
    setCounter(counter+1)
  }
  const RemoveValue = ()=>{
    // counter = counter -1;
    // console.log("decrement clicked",counter)
    // counter = counter-1;
    if(counter>0)
    setCounter(counter-1)
  }
  return (
   <>
        <h1>React</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Increment</button>
        <br />
        <button onClick={RemoveValue}>Decrement</button>
        <footer>Footer </footer>
   </>
  )
}

export default App