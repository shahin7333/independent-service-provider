import { async } from '@firebase/util'
import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init'
import login from '../../../img/login/login.jpg'
import SocialLogin from '../SocialLogin/SocialLogin'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Login.css'

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)
  let errorElement
  const emailRef = useRef('')
  const passRef = useRef('')
  const navigate = useNavigate()

  const location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const handleLogin = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value
    signInWithEmailAndPassword(email, pass)
  }
  const resetPassword = async () => {
    const email = emailRef.current.value
   if(email){
    await sendPasswordResetEmail(email)
    toast('Sent email')
   }
   else{
       toast('Enter Your Email')
   }
  }
  const navigateRegister = (e) => {
    navigate('/register')
  }
  if (user) {
    navigate(from, { replace: true })
  }
  if (error) {
    errorElement = (
      <p className="text-danger text-center mt-2">Error: {error?.message}</p>
    )
  }
  return (
    <div className="container mx-auto w-50">
      <h2 className="log-header text-center  mt-5">Login Your Account</h2>
      <div className=" mb-3">
        <div className="row g-4 mt-4">
          <div className="col-lg-6 col-md-4">
            <img
              style={{ width: '800px' }}
              src={login}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className=" col-lg-6 col-md-8">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  ref={passRef}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Button className="login-btn mx-auto d-block w-50" type="submit">
                Login
              </Button>
            </Form>
            {errorElement}
            <p className="mt-1">
              <span>Don't Have Account? </span>
              <small
                className="register-account text-primary"
                onClick={navigateRegister}
              >
                Register an Account
              </small>
            </p>
            <p className="mt-1">
              <span>Forget Password?</span>
              <small
                className="register-account text-primary"
                onClick={resetPassword}
              >
                Reset Password
              </small>
            </p>
          </div>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Login
