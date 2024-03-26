import React from "react";

const LoginSignup = () => {
  return (
    <div className="flex bg-gradient-to-t from-pink-300 to-white flex-col w-full h-screen items-center justify-center bg-green-500">
      <div className="flex rounded-3xl bg-white flex-col p-10 sm:w-[30vw] h-[60vh] w-full max-w-md">
        <h1 className="font-bold font-serif text-3xl text-center">
          Sign Up
        </h1>
        <div className="p-2">
          <form className="flex flex-col" action="">
            <input className="p-2 my-3 border-2 rounded-md" type="text" placeholder="Your Name" />
            <input className="p-2 border-2 rounded-md" type="email" placeholder="Email Address" />
            <input className="p-2 my-3 border-2 rounded-md" type="password" placeholder="Password" />
          </form>
          <button className="w-full p-3 rounded-lg font-serif text-white font-bold bg-red-600">Continue</button>
        </div>

        <div className="flex flex-col">
          <p className="font-serif font-medium text-center">
            Already have an account? <span className="text-red-700 text-xl">Login Here</span>
          </p>
          <div className="flex justify-center items-center">
            <input type="checkbox" name="" id="" />
            <p className="font-light text-sm">By continuing I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
