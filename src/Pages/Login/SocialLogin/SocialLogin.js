import React from 'react'
import './SocialLogin.css'
import google from '../../../img/google/google.png'
import github from '../../../img/github/github.png'
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom'

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth)
  const navigate = useNavigate()
  let errorElement
  if (error || error1) {
    errorElement = (
      <p className="text-danger text-center mt-2">
        Error: {error?.message}
        {error1?.message}
      </p>
    )
  }
  if (user || user1) {
    navigate('/home')
  }
  return (
    <div>
      <div className="d-flex align-aitems-center">
        <div className="line-or w-50 mt-3"></div>
        <p className="px-2">Or</p>
        <div className="line-or w-50 mt-3"></div>
      </div>

      <div>
        <h3 className="text-center">Login With Googel or Github</h3>
        <button
          onClick={() => signInWithGoogle()}
          className="btn-btn text-items-center d-flex mx-auto border-0  py-2 px-5 mt-3"
        >
          <img src={google} alt="" /> Login with Google
        </button>
        {errorElement}
        <button
          onClick={() => signInWithGithub()}
          className="btn-btn text-items-center d-flex mx-auto border-0  py-2 px-5 mt-3"
        >
          <img src={github} alt="" /> Login with Github
        </button>
      </div>
    </div>
  )
}

export default SocialLogin
