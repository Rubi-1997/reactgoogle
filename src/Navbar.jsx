import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
     <NavLink to="/"><button className='btn bg-primary'>Home</button></NavLink> 
      <NavLink to="/contact"><button className='btn bg-secondry ml-2'>contactus</button></NavLink>
      <NavLink to="/about"><button className='btn bg-success ml-2'>About</button></NavLink>
    </div>
  )
}

export default Navbar
