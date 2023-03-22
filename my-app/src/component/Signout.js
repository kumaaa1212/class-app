import React from 'react'
import { auth } from '../firebase';

const Signout = () => {
    return (
      <div className='login'>
        <button onClick={() =>auth.signOut()}>
          ログアウト
        </button>
      </div>
    )
}

export default Signout