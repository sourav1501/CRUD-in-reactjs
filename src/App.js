import React,{useState} from 'react';
import './App.css';
import Table from './view/View'
import AddUser from './forms/addUser'
import EditUser from './forms/editUser'
const App=()=>{
  const data=[

    {id:0,name:"Vit",username:'anyone'},
    {id:1,name:"Ankit:" ,username:'anyone'},
    {id:2,name:"Gaurav",username:'anyonebcjcj'}


  ]
  const initialFormState = { id: null, name: '', username: '' }

  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const[editing,setEditing]=useState(false)
  const [users,setUsers]=useState(data)

  const addUser=user=>{
    user.id=users.length+1
    setUsers([...users,user])
    localStorage.setItem("data",JSON.stringify(users))
  }
  const deleteUser=(id)=>{
    setUsers(users.filter(user=>user.id!==id))
    localStorage.setItem("data",JSON.stringify(users))

  }
  const editUser=user=>{
    setEditing(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username})
    

  }
  const updateUser=(id,updateduser)=>{
    setEditing(false)
    setUsers(users.map(user=>user.id===id?updateduser:user))
    localStorage.setItem("data",JSON.stringify(users))

  }
  

return(
<div className="container">
  <h1>CRUD in Reactjs</h1>
  {editing?(
    <div className="user">
    <h2>Edit User</h2>

    <EditUser setEditing={setEditing}
    editing={editing}
              currentUser={currentUser}
              updateUser={updateUser}/>
  </div>
  )
  
:(<div className="user">
<h2>Add User</h2>
<AddUser add={addUser}/>
</div>)}
  <div className="table">
  <h2>View User</h2>
  <Table users={users} editUser={editUser}deleteUser={deleteUser}/>

  </div>
</div>
)

}


export default App;
