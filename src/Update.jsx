import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

const Update = () => {
    const {id} = useParams();
    
    const allUsers = useSelector((state)=>state.users)
    const existingUser = allUsers.find((f) => f.id === Number(id))
    
     const {name,email}=existingUser;
    const [uname,setName]=useState(name)
    const [uemail,SetEmail]=useState(email)
    const dispatch=useDispatch();
     const navigate=useNavigate();
    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateUser({
                id:id,
                name:uname,
                email:uemail

        }));
        navigate("/")
    }
  return (
    <div>
        <div className='container'>
    <h4>Add User</h4>
<form onSubmit={handleUpdate} >
  <div class="mb-3">
    <label htmlFor='name' >Name </label>
    <input type="text" value={uname} onChange={e => setName(e.target.value)}/>
    
  </div>
  <div class="mb-3">
    <label htmlFor='email'>Email </label>
    <input type="email" value={uemail}  onChange={e => SetEmail(e.target.value)}/>
  </div>
  <button type="info" class="btn btn-primary">Update</button>
</form>
</div>
    </div>
  )
}

export default Update