import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [content, setContent] = useState()
  const [users, setUsers] = useState([])
  const [message, setHeader] = useState()
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getContent()
  }, [])

  const getContent = async () => {
    const response = await axios.get('http://localhost:8000/');
    setContent(response.data);
  }

  const getUsers  = async () => {
    const response = await axios.get('http://localhost:8000/users')
    setUsers(response.data)
  }
  useEffect(() => {
    getUsers()
  }, [])


  const getHeader = async () => {
    const response = await axios.get('http://localhost:8000/header')
    setHeader (response.data)
  }
  useEffect(() => {
    getHeader()
  }, [])


  const listUsers = users.map(item => {
    return(
      <tbody key={item.id}>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      </tbody>
    )
  })

  return (
    <div className='container'>
      <BrowserRouter>
      <Navigation setOpenModal={setOpenModal}/>
      {openModal && <Login closeModal={setOpenModal}/>}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <h1>{message}</h1>
      <p>{content}</p>

      <table>
          {listUsers}
      </table>
    </div>
  )
}

export default App