import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { deleteuser } from './UserReducer';

const Home = () => {
    const allUsers = useSelector((state)=>state.users)
    // console.log(allUsers);
    const dispatch=useDispatch();
    const handleDelete =(id) =>{
        dispatch(deleteuser({id:id}))

    }
  return (
    <div>
        <div className='creat'>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        </div>
<div>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
         {allUsers.map((user,index)=> 
         (

            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link >
                    <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>
            </tr>
         ))}
  </tbody>
</table>
</div>
</div>
  )
}

export default Home;