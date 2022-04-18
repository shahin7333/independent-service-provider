import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import register from '../../../img/register/register.jpg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('')
  const passRef = useRef('')
  const nameRef = useRef('')
  const navigate = useNavigate()
  const navigateLogin = (e) => {
    navigate('/login')
  }
if(user){
    navigate('/home');
}

  const handleRegister = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const name= nameRef.current.value;
createUserWithEmailAndPassword(email,pass);
  }
  return (
    <div className="container mx-auto w-50">
    <h2 className="log-header text-center  mt-5">Login Your Account</h2>
    <div className=" mb-3">
      <div className="row g-4 mt-4">
        <div className="col-lg-6 col-md-4">
          <img
            style={{ width: '800px' }}
            src={register}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className=" col-lg-6 col-md-8">
          <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                 ref={nameRef}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </Form.Group>
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
              Register
            </Button>
          </Form>
          <p className="mt-1">
            <span>Don't Have Account? </span>
            <small onClick={navigateLogin} className="register-account text-primary">
              Login your Account
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Register
