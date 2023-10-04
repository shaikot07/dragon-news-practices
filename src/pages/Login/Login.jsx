import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
      const {signIn} = useContext(AuthContext)
      const location = useLocation()
      const navigate = useNavigate()
      const handleLogIn = e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password')
            console.log(email, password);
            signIn(email,password)
                  .then(res =>{
                        toast.success("Log in Success")
                        // navaget after log in 
                        navigate(location?.state ? location.state : '/')
                  })
                  .catch(error =>{
                        toast.error("Invalid email or password")
                  })
      }
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col ">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleLogIn}>
                                          <div className="card-body">
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Email</span>
                                                      </label>
                                                      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">Password</span>
                                                      </label>
                                                      <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                                      <label className="label">
                                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                      </label>
                                                </div>
                                                <p>Do not have an Account? please <Link to="/login" className='text-blue-600 underline'>Register</Link> </p>
                                                <div className="form-control mt-6">
                                                      <button type='submit' className="btn btn-primary">Login</button>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;