import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name,setName]=useState("")
    const [email,SetEmail]=useState("")
    const navigate=useNavigate();
    
    const dispatch=useDispatch();
    const allUsers = useSelector((state)=>state.users)

    const handleSubmit = (event) =>{
        event.preventDefault();
         dispatch(addUser({id:allUsers[allUsers.length-1].id +1,name:name,email:email}))
         navigate("/")
    }
  return (
    <div>
<div className='container'>
    <h4>Add User</h4>
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label htmlFor='name' >Name </label>
    <input type="text"  onChange={e =>setName(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label htmlFor='email'>Email </label>
    <input type="email"  onChange={e =>SetEmail(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    </div>
  )
}

export default Create;