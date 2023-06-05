import React from 'react'
interface ButtonProps{
  text:string
  color:string
  onClick: () => void
}
const Button = ({text,color,onClick}:ButtonProps) => {
  return (
   <button type="button" className="btn"onClick={onClick}>{text}</button>
  )
}

export default Button
