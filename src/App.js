import React, { useState } from 'react'
import Home from './pages/Home'
import './css/app.css'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import AddPost from './pages/AddPost'
import Footer from './components/Footer'
import AllPost from './pages/AllPost'
import Header from './components/Header'
//import './images/profile.jpg'
import{v4 as uuidv4} from 'uuid'
import './App.css'


function App() {
  const[technos,setTechonos]=useState([])

  //const[name,setName]=useState('')
  //const[firstname, setFirstname]=useState('')
  //const[objet, setObjet]=useState([])

  const handle = (techno)=>{
    
   console.log('handle',techno);
    
    //setTechonos([...technos , techno])
    //setFirstname(...firstname , objet1)
    setTechonos([...technos, {...techno, technoid: uuidv4()}])
  }
 const deleteTechno=(id)=>{
  setTechonos(technos.filter((tech)=> tech.technoid !==id))
 }

  return (
    <div className='container-fluid'>
      <Header/>
      <Menu/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/addpost' element={<AddPost handle={handle}/>} />
        <Route path='/allpost' element={<AllPost technos= {technos} deleteTechno={deleteTechno}/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

