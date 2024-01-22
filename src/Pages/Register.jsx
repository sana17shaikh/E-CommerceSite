import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
     <Navbar/>
     <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                <form>
                    <div className="form my-3">
                        <label htmlFor="Name">Full Name</label>
                        <input type="text"  className='form-control' id='Name' placeholder='Enter Your Name'/>
                    </div>
                    <div className="form my-3">
                        <label htmlFor="Email">Email address</label>
                        <input type="email" className='form-control'id='Email' placeholder='name@example.com'/>
                    </div>
                    <div className="form my-3">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className='form-control'id='password' placeholder='password'/>
                    </div>
                    <div className="form my-3">
                        <p>Already has an account</p>
                        <Link to="/login" className="text-decoration-underline text-info">Login</Link>
                    </div>
                    <div className="text-center">
                        <button className='my-2 mx-auto btn btn-dark' type='submit' disabled>Register</button>
                    </div>
                </form>
            </div>
        </div>
     </div>
     <Footer/> 
    </>
  )
}

export default Register
