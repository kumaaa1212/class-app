import React from 'react'
import { auth } from '../firebase'
import '../App.css'
const UserInfo = () => {
  return (
    <div className='googleinfo'>
      <img src={auth.currentUser.photoURL}alt="" />
      <p>{auth.currentUser.displayName}</p>
    </div>
  )
}

export default UserInfo