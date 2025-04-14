import React, { useContext, useState } from 'react'
import Usercontext from '../contexts/UserContext'
function Login() {
    const [username , setusername] = useState('')
    const [password , setPassword] = useState('')
    const {setuser} = useContext(Usercontext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username , password})
    }
  return (
    <div>
      <label htmlFor="">Username</label>
      <input type="text"  
      value ={username}
      onChange={(e) =>setusername(e.target.value) } />
      <label htmlFor="">Password</label>
      <input type="text" 
      value ={password}
      onChange={(e) => setPassword(e.target.value)} />
      <button onClick = {handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
