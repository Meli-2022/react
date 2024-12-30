import React from 'react'
import { NavLink } from 'react-router-dom'
function Menu() {
  return (
    <div>
      <ul className='menu'>
        <li><NavLink to='/' className={({isActive})=>(isActive ? "activeLink" : undefined)}>Home</NavLink></li>
        <li><NavLink to='/addpost' className={({isActive})=>(isActive ? "activeLink" : undefined)}>AddPost</NavLink></li>
        <li><NavLink to='/allpost' className={({isActive})=>(isActive ? "activeLink" : undefined)}>AllPost</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu
