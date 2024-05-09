import React, { useState } from 'react';
import { router } from '@inertiajs/react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (!name.trim()) {
      setNameError(true);
      return;
    }

    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    if (!password.trim()) {
      setPasswordError(true);
      return;
    }

    if (name.trim() && email.trim() && password.trim()) {
    router.post("/submit-signup", {name, email, password})
    }
  };

  return (
      <div className="flex flex-col md:flex-row h-screen items-center font-nunito ">
        <div className="bg-white w-full lg:max-w-full md:mx-12 md:p-20 md:w-full xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center shadow-lg">   
          <div className="w-full h-100">
            <div className="logonama flex gap-0 items-center justify-center -mt-12">
                <div className="w-20 xl:w-20 md:w-24">
                    <img src="/images/logo.png" alt="" />
                </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2 text-center">SIGN UP</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
              <label className="block text-gray-700 md:text-xl lg:text-base">Email Address</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-white mt-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:bg-white focus:outline-none`} />
              {emailError && <p className="text-red-500 text-sm mt-2">Please enter your email</p>}
              </div>
              <div className="mt-4">
              <label className="block text-gray-700 md:text-xl lg:text-base">Username</label>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-white mt-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:bg-white focus:outline-none`} />
              {nameError && <p className="text-red-500 text-sm mt-2">Please enter your username</p>}
              </div>
              <div className="mt-4">
              <label className="block text-gray-700 md:text-xl lg:text-base">Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-white mt-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:bg-white focus:outline-none`} />
              {passwordError && <p className="text-red-500 text-sm mt-2">Please enter your password</p>}
              </div>
              <button type="submit" className="w-full block bg-yellow-500 hover:bg-amber-400 focus:bg-amber-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign In</button>
            </form>
            <p className="mt-8 md:text-xl lg:text-lg">Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700 font-semibold md:text-xl lg:text-lg">Login to existing account</a></p>
          </div>
        </div>
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen xl:flex xl:justify-center">
          <div className="md:absolute md:overflow-hidden md:right-0 md:px-12 z-[-1] ">
            <div className="bg-yellow-500 md:p-72 rounded-bl-[100px] md:-skew-x-[11deg] md:translate-x-20 md:scale-x-110 xl:block md:hidden"></div>
          </div>
          <div className="w-4/6 mt-10 mr-20">
            <img src="/images/ricemain.png" alt="" />
          </div>
        </div>
      </div>

  );
}

export default SignUp;
