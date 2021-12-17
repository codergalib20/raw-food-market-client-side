import { Box } from '@mui/material'
import React from 'react'
import AllAdmin from './AllAdmin'
import AllUser from './AllUser'

export default function UsersAdmin() {
  const [admins, setAdmins] = React.useState([])
  const [users, setUsers] = React.useState([])
  React.useEffect(()=>{
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data.filter(user => user.role !== 'admin')))
  },[])
  console.log(users)
  

  let role = "admin"
  React.useEffect(()=>{
    fetch(`http://localhost:5000/admins?role=${role}`)  // ____Get Admin List
      .then(res => res.json())
      .then(data => setAdmins(data))
  },[role])
  return (
    <Box>
       <Box>
        <h1>Admin List</h1>
        {admins.map((item)=> <AllAdmin key={item._id} admin={item} admins={admins} setAdmins={setAdmins} />)}
       </Box>
       <Box>
        <h1>User List</h1>
        {users.map((item)=> <AllUser key={item._id} user={item} users={users} setUsers={setUsers}/>)}
       </Box>
    </Box>
  )
}
