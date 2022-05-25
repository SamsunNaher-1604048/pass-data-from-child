import React, { useState } from 'react'
import Child from './Child'


export default function App() {
  const data="i am from app"
  const[user,setuser]=useState('')

  
  const onpassChild=(data2)=>{
    console.log(data2)
    setuser(data2)
    
  }

  return (
    <div>
      <Child data={data} onpass={onpassChild}/>
      <p>{user}</p>
      </div>
  )
}
 