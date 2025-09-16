import React from 'react'

export default function Button({color,setColor}) {
  return (
      <button onClick={()=> setColor(color)}
        className='outline-none px-4 py-1 rounded-full shadow-lg '
        style={{backgroundColor:color,
          color: color==="yellow" || color==="white" || color==="lavender" ? "black":"white"
        }}>
        {color.charAt(0).toUpperCase()+color.slice(1)}
      </button>
  )
}
