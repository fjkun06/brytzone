'use client'
import Navbar from '@/stories/layout/navbar/Navbar';
import React from 'react'
interface SubLayoutProps{
  children?: React.ReactNode;
  
}
const SubLayout:React.FC<SubLayoutProps> = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(true)

  const handleIsOpen = () => setIsOpen(!isOpen)
  return (
    <main id='layout'>
       <Navbar handleClick={handleIsOpen} isOpen={isOpen} />
            <section id="layoutwwww">{children}</section>
            <footer>hell-o</footer>
    </main>
  )
}

export default SubLayout
