import React from 'react'
import './Login.css'

function Login({closeModal}) {
  return (
    <div className='container'>
        <div className='modal-app'>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Log In</h5>
                <button type="button" onClick={() => closeModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            </div>
            <div className="modal-footer">
                <button type="button" onClick={() => closeModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Login</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login