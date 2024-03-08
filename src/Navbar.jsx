import React from 'react'
import {Link, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
const Navbar = () => {
  return (
    <div >
      <div  className='flex justify-between text-white p-5 text-xl items-center '>
        <div className=' font-semibold text-3xl '>
            <h1>Text<span className='text-red-600' >Utils</span> </h1>
        </div>
        <ul className='flex gap-8'>
            <li className='cursor-pointer'> <Link to='/'>Home</Link>  </li>
            <li className='cursor-pointer'> <Link to='/about'>About</Link> </li>
            <li className='cursor-pointer'><Link to='/developer'>Developers</Link></li>
        </ul>

        <div>
            <button className='border-red-600 border-2 rounded-md  text-red-600 p-1 font-bold cursor-pointer'>Join Us</button>
        </div>
      </div>
     
    </div>
  )
}

export default Navbar
