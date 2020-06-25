import React from 'react'


const Table = ({ users ,deleteUser,editUser}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (

                    users.map(user =>
                        
                        (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="actions" onClick={()=>editUser(user)}><i class="far fa-edit"></i></button>
                                    <button className="actions" onClick={()=>deleteUser(user.id)}><i class="fas fa-times"></i>

</button>

                                </td>
                            </tr>
                            ))

                )
                    : (
                        <tr>
                            <td colSpan={3}>No Users</td>
                        </tr>
                    )
                }

            </tbody>
        </table>

    )
}
export default Table