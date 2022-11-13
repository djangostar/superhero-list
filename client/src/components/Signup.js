import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    passwordCornfirmation: ''
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const { username, password, passwordConfirmation } = formData
  

  function handleSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password,
      passwordConfirmation
    }

    fetch(`/users`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          navigate(`/users/${user.id}`)
        })
      } else {
        res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input 
        type='text'
        name='username' 
        value={username} 
        onChange={handleChange} 
      />
      <br />
      <label>Password: </label>
      <input 
        type='password' name='password' value={password} onChange={handleChange}
      />
      <label>Confirm Password: </label>
      <input 
        type='password' name='password_confirmation' value={passwordConfirmation} onChange={handleChange}
      />
      <input type='submit' value='Sign Up!' />
    </form>
    {errors ? errors.map(error => <div className='errors'>{error[0]} {error[1]}</div>) : null}
    </>
  )
}

export default Signup