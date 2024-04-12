import React, { useState } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [input, SetInput] = useState({
    email: "",
    name: "",
    password: ""
  })

function handleSubmit(e) {
  e.preventDefault();
  router.post("/submit-signup", {name, email, password})
};

  return (
      <div className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center shadow-lg">   
          <div className="w-full h-100">
            <div className="logonama flex gap-0 items-center justify-center -mt-12">
                <div className="w-20">
                    <img src="/images/logo.png" alt="" />
                </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2 text-center">Sign Up</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
              </div>
              <div className="mt-4">
              <label className="block text-gray-700">Username</label>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
              </div>
              <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
              </div>
              <button type="submit" className="w-full block bg-yellow-500 hover:bg-amber-400 focus:bg-amber-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign In</button>
            </form>
            <p className="mt-8">Already have an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Login to existing account</a></p>
          </div>
        </div>
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen xl:flex xl:justify-center">
          <div className="absolute right-0 overflow-hidden md:px-12 z-[-1]">
            <div className="bg-yellow-500 md:p-72 rounded-bl-[100px] md:-skew-x-[11deg] md:translate-x-20 md:scale-x-110"></div>
          </div>
          <div className="w-4/6 mt-4">
            <img src="/images/ricemain.png" alt="" />
          </div>
        </div>
      </div>
  );
}

export default SignUp;
