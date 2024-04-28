import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
   <Link to="/trd"> <button className='bg-lightPrimary px-5 py-1 text-darkPrimary text-sm font-semibold rounded-md'>Truth/Dare</button></Link>
  )
}

export default Button