 import { createSlice} from "@reduxjs/toolkit";
 import { UserList } from "./Data";
 const userSlice=createSlice({
       name: "users",
        initialState:UserList,
        
            
        reducers:{
               
addUser:(state,action)=>{
    state.push(action.payload)
    console.log(action)
},
updateUser:(state,action)=>{
   const {id,name,email}=action.payload
   const upuser=state.find(user =>  user.id == id) 
   if(upuser){
    upuser.name = name ;
    upuser.email = email
   }
},
deleteuser:(state,action)=>{
    const{id}=action.payload
    const upuser=state.find(user =>  user.id == id) 
    if(upuser){
        return state.filter(f => f.id !==id)
    }
    
}

        }
       


 }) 
 export const {addUser,updateUser,deleteuser}=userSlice.actions
 export default userSlice.reducer;