import { auth } from '../firebase';
import {GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
import '../App.css'
const Signup = () => {
  const clickLogin = function () {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }
  return (
    <div className='login'>
      <button onClick={clickLogin}>
        ログイン
      </button>
    </div>
  )
}
export default Signup