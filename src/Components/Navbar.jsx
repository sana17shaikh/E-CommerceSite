import React from 'react'
import { NavLink } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import { useSelector } from 'react-redux';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
  const state = useSelector(state => state.handlecart)
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">React Ecommerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto my-2 text-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="button text-center">
        <NavLink to="/login" className="btn btn-outline-dark m-2">
            <i className='mx-1'><Login/></i>
            Login
        </NavLink>
        <NavLink to="/register" className="btn btn-outline-dark m-2">
            <i className='mx-1'><PersonAddAlt1RoundedIcon/></i>
            Register
        </NavLink>
        <NavLink to="/cart" className="btn btn-outline-dark m-2">
            <i className='mx-1'><ShoppingCartRoundedIcon/></i>
            Cart ({state.length})
        </NavLink>
      </div>
    </div>
  </div>
</nav> 
    </>
  )
}

export default Navbar
