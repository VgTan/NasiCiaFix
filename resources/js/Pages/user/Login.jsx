import React, { useState } from 'react';
import { router } from '@inertiajs/react';

function Login({ user, accessToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.post("/submit-login", {email, password})
  };

  return (
    <div>
      <div className="absolute overflow-hidden md:px-12 z-[-1] -left-20 -top-32">
        <div className="bg-yellow-500 md:p-72 rounded-br-[100px] md:-skew-y-[11deg] md:translate-y-20 md:scale-150"></div>
      </div>
      <div className="flex flex-col md:flex-row h-screen items-center">
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen xl:flex xl:justify-center">
          <div className="w-4/6 mt-4">
            <img src="/images/ricemain.png" alt="" />
          </div>
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center shadow-lg">   
          <div className="w-full h-100">
            <div className="logonama flex gap-0 items-center justify-center -mt-12">
                <div className="w-20">
                    <img src="/images/logo.png" alt="" />
                </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2 text-center">Login</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
              </div>
              <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
              </div>
              <button type="submit" className="w-full block bg-yellow-500 hover:bg-amber-400 focus:bg-amber-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Login</button>
            </form>
            <p className="mt-8">Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">Create new account</a></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
