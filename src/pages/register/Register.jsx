import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
      const navigate = useNavigate()
      const {createUser } = useContext(AuthContext)
      const handleRegister = e => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password')
            // console.log(email, password);

            createUser(email,password)
                  .then(res =>{
                        toast.success(' User create Successfully !')
                        navigate("/")
                  })
                  .catch(error =>{
                        toast.error("Already have account")
                  })
      }
      return (

            <div>
                  <Navbar></Navbar>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col ">
                              <h1 className="text-5xl font-bold">Register now!</h1>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleRegister}>
                                          <div className="card-body">
                                                <div className="form-control">
                                                      <label className="label">
                                                            <span className="label-text">name</span>
                                                      </label>
                                                      <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                                </div>
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
                                                <p>Already have Account? <Link to="/login" className='text-blue-600  underline'>Login</Link> </p>
                                                <div className="form-control mt-6">
                                                      <button type='submit' className="btn btn-primary">Register</button>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;