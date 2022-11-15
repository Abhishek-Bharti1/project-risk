import React, { useState } from 'react'

const Form = () => {

    const [formState,setFormState] = useState({
        username:"",
        age:"",
    })

    const handleChange=(e)=>{
if(e.target.id==="username"){
    setFormState({
        ...formState,
        username:e.target.value
    })
}

if(e.target.id==="age"){
    setFormState({
        ...formState,
        age:e.target.value
    })
}
    }

const handleSubmit=(e)=>{
e.preventDefault();

console.log("Data",formState)

//or fetch("url",{post})
}


  return (
   <form onSubmit={handleSubmit}>
    <input onChange={handleChange}
     type='text' 
    placeholder='Enter user name'
        id='username'
    />

<input onChange={handleChange} 
type='number' 
    placeholder='Enter age'
        id='age'
    />

    <input type='submit' value='submit'/>
   </form>
  )
}

export default Form