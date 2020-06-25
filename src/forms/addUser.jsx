import React, { useState } from 'react'


const AddUser = ({ add }) => {
    const initialvalue={
        id:null,
        name:'',
        username:''
    }
    const [initial,setUser]=useState(initialvalue)
     
    const{name,username}=initial
    const handleChange=(e)=>{
     setUser({...initial,[e.target.name]:e.target.value})

    }
const submit=e=>{
    e.preventDefault()
    if(!name||!username) return 
     
    add(initial)
    setUser(initialvalue)
}
const data=()=>{
    return(
        <form onSubmit={submit}>
            <label>Name</label><br/>
            <input type="text"  name="name" onChange={handleChange} value={name} />
            <br/>
            <label>Username</label><br/>
            <input type="text" name="username" onChange={handleChange} value={username} />
            <br/>
            <button className="btn">Add new user</button>
        </form>
    )
}
    
    return (
<React.Fragment>
        
{data()}
</React.Fragment>
    )

}
export default AddUser