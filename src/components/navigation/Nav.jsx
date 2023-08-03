import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navigation'>
      <Link to="/categories/all">All</Link>
      <Link to="/categories/furnitures">Furnitures</Link>
      <Link to="/categories/electronics">Electronics</Link>
      <Link to="/categories/lamps">Lamps</Link>
      <Link to="/categories/kitchen">Kitchen</Link>
      <Link to="/categories/chairs">Chairs</Link>
      <Link to="/categories/skin-care">Skin Care</Link>
    </div>
  )
}

export default Nav
