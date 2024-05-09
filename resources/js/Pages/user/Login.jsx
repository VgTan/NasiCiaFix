import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

function Login({ user, accessToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    if (!password.trim()) {
      setPasswordError(true);
      return;
    }

    router.post("/submit-login", { email, password });
  };

  return (
    <div>
      <Navbar/>
      <div className="md:absolute md:overflow-hidden md:px-12 z-[-1] md:-left-20 md:-top-32 font-nunito">
        <div className="bg-yellow-500 md:p-72 rounded-br-[100px] md:-skew-y-[11deg] md:translate-y-20 md:scale-150 xl:block md:hidden"></div>
      </div>
      <div className="flex flex-col md:flex-row h-screen items-center">
        <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen xl:flex xl:justify-center">
          <div className="w-4/6 mt-4">
            <img src="/images/ricemain.png" alt="" />
          </div>
        </div>
        <div className="bg-white w-full lg:max-w-full md:mx-12 md:p-20 md:w-full xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center shadow-lg">   
          <div className="w-full h-100">
            <div className="logonama flex gap-0 items-center justify-center -mt-12">
                <div className="w-20 xl:w-20 md:w-24">
                    <img src="/images/logo.png" alt="" />
                </div>
            </div>
            <h1 className="text-xl md:text-3xl font-bold leading-tight mt-2 text-center">LOGIN</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <div>
              <label className="block text-gray-700 md:text-xl lg:text-base">Email Address</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-white mt-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:bg-white focus:outline-none`} />
              {emailError && <p className="text-red-500 text-sm mt-2">Please enter your email</p>}
              </div>
              <div className="mt-4">
              <label className="block text-gray-700 md:text-xl lg:text-base">Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-4 py-3 rounded-lg bg-white mt-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:bg-white focus:outline-none`} />
              {passwordError && <p className="text-red-500 text-sm mt-2">Please enter your password</p>}
              </div>
              <button type="submit" className="w-full block bg-yellow-500 hover:bg-amber-400 focus:bg-amber-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 md:text-xl lg:text-lg">Login</button>
            </form>
            <p className="mt-8 md:text-xl lg:text-lg">Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-700 font-semibold md:text-xl lg:text-lg">Create new account</a></p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;
