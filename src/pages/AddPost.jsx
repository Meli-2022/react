import React, { useState } from 'react'

function AddPost(props) {
  const[techno,setTechno]=useState({
    technoname:'',
    technofirstname:''
  })
  const[errors,setErrors]=useState(false)
  
 const{handle}=props
 
 const handleChange=(e)=>{
  const{name,value}=e.target
  setTechno({...techno, [name] : value})
 }
 
  
  const create=(e)=>{
    e.preventDefault()
    if(!techno.technoname || !techno.technofirstname){
      setErrors(true)
      return false
    
    }
    handle(techno)
    setTechno({
      technoname:'',
      technofirstname:''
    })
   //handle(objet1)
   // setName('')
   // setFirstname('')
   /* handle(objet)
    //console.log(objet);
    setObjet({
      name:'',
      firstname:''
    }) */
  }
 

  return (
    <div>
      <h1>addPost</h1>
      <div className='form'>
      <form action="" onSubmit={(e)=>create(e)} >
        <label htmlFor="nom">Name</label>
        <input type="text" name='technoname' value={techno.technoname} onChange={(e)=>handleChange(e)}/>
        {errors && !techno.technoname && <span style={{color:'red'}}>entrez un nom</span>}
        <label htmlFor="firstname">Firstname</label>
        <input type="text" name='technofirstname' value={techno.technofirstname} onChange={(e)=>handleChange(e)}/>
        {errors && !techno.technofirstname && <span style={{color:'red'}}>entrez un prenom valide</span>}
        <input type="submit" value="createPost" className='btn'/>
      </form>
      </div>
    </div>
  )
}

export default AddPost
