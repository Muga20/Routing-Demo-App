import React from 'react'
import { Link } from 'react-router-dom'

function Navigation({setOpenModal}) {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Users</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/contacts'>Contacts</Link>
                    </li>
                </ul>
               
                <div><button type='button' onClick={() => {setOpenModal(true)}} className="btn btn-outline-primary mx-2">Login</button></div>
                <div><Link to='/signup'><button type='button' className="btn btn-outline-primary">Signup</button></Link></div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation