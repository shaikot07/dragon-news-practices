import React from 'react';

const Login = () => {

      const handleLogIn = e =>{
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password')
            console.log(email,password);

      }
      return (
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
                                          <div className="form-control mt-6">
                                                <button type='submit' className="btn btn-primary">Login</button>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Login;