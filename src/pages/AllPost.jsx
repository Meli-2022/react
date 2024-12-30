import React from 'react'
import Item from './Item'

function AllPost(props) {
  const {technos,deleteTechno}=props
  //preventDefault();
  //const[objet,setObjet]=useState([])
  //useEffect(()=>{
   // fetchPost()
  //} ,[])
  //const fetchPost=()=>{
    //setObjet(objet)
  //}

  return (
    <div className='yo'>
      <h2>allpost</h2>
      <div>
       {
       technos.map(techno => (
        <Item techno={techno} key={techno.technoid} deleteTechno = {deleteTechno} />
        
        ))
       }
      </div>
    </div>
  );
}

export default AllPost
