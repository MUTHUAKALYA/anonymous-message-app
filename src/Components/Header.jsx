import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../components/Button"
const Header = () => {
  return (
    <>
    <div className='bg-darkPrimary flex justify-between items-center px-10 py-4'>
    <header className='bg-darkPrimary '>
        <Link to="/"><h1 className='font-black text-2xl text-lightPrimary'>AnonNest</h1></Link>
        
    </header>
    <Button/>
    </div>
    <hr className='border border-lightPrimary'/>
    </>
  )
}

export default Header