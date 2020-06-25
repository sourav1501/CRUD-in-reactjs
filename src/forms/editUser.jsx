import React, { useState,useEffect } from 'react'

const EditUser = ({ currentUser,setEditing,updateUser }) => {
    const [user, setUser] = useState(currentUser)
  const {name,username}=user
    const handleChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        
    }

    useEffect(()=>{
        setUser(currentUser)
    },[currentUser])

    const submit=()=>{
        updateUser(user.id,user)
    }
    return (
        <form onSubmit={submit}>

            <label>Name</label><br/>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <br/>
            <label>Username</label><br/>
            <input type="text" name="username" value={username} onChange={handleChange} />
            <br/>
            <button className="btn">update user</button>
            <button  className="btn" onClick={() => setEditing(false)} >
            <i class="fas fa-times"></i>


      </button>


        </form>



    )
}
export default EditUser