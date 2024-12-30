import React from 'react'

function Item(props) {
    const{techno, deleteTechno}=props
  return (
    <div key={techno.technoid}>
        <h2>{techno.technoname}</h2>
        <p>firstname</p>
        <h2>{techno.technofirstname}</h2>
        <button onClick={()=>deleteTechno(techno.technoid)}>delete</button>
    </div>
  )
}

export default Item
