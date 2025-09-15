import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https;//google.com" target="_blank" >Visit Google</a>
)

const anotherUser = "React variable"
const ReactElement = React.createElement(
  'a',
  {href:"https://google.com", target: "_blank"},
  'click me to visit google',
  anotherUser //must be an evaluated javascript can be written loop control statement etc
)

createRoot(document.getElementById('root')).
render(
 
      // ReactElement  //works fine 
    // anotherElement
    // <ReactElement />
    // MyApp() can write like that 

    <App/>
)
