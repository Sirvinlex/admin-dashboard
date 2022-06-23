import React from 'react'

const Button = ({ color, bgColor, size, borderRadius, text }) => {
  return (
    <button
    type="button"
      onClick={() => {}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3  hover:drop-shadow-xl`}
    
    >
      {text}
    </button>
    )
}

export default Button