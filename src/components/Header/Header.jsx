import React from 'react'
import './Header.css'
import Logo from './Logo/logo.png'
import user from './user.svg'
import lupa from './lupa.svg'
import heart from './heart.svg'
import cart from './cart.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
const [query, setQuery] = useState('')
console.log(query);

  return (
    <div className="menu">
      <div className="nese">
        <Link to="/" className="logo">
          <img src={Logo} />
        </Link>
        <div className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/news">NEWS</Link>
        </div>
      </div>
      <div className="icons">
          <img className="lupa" src={lupa} alt="" /><Link to="/favorites">
            <img className="heart" src={heart} alt="" />
          </Link>
          <Link to="/cart">
              <img className="cart" src={cart} alt="" />
            </Link><div className='dropwdown'>
              <div className='dropdownBtn'>
                <button className='user__btn'><img className="user" src={user} alt="" /></button>
              </div>
              <div className='dropdownContent'>
                <Link className='linkStyles' to="/account">My account</Link>
                <br />
                <Link className='linkStyles' to="/login">Sign out</Link>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Header