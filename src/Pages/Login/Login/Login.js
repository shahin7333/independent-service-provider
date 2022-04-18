import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import login from '../../../img/login/login.jpg'
import './Login.css'

const Login = () => {
  const emailRef = useRef('')
  const passRef = useRef('')
  const navigate = useNavigate()
  

  const handleLogin = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(pass,email);
}
  const navigateRegister = (e) => {
    navigate('/register');
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </Form>
            <p className="mt-1">
              <span>Don't Have Account? </span>
              <small className="register-account text-primary" onClick={navigateRegister}>
                Register an Account
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
