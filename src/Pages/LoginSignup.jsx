import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const signup = async () => {
    try {
      let responseData;
      await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data);
      if(responseData.success) {
        localStorage.setItem("auth-token",responseData.token);
        window.location.replace("/");
      }
      else {
        toast.error(responseData.errors);
      }
    }
    catch(error){
      console.log(`${error}`)
    }
  };
  
  
  const login = async () => {
    try {
      let responseData;
      await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data);
      if(responseData.success) {
        localStorage.setItem("auth-token",responseData.token);
        window.location.replace("/");
      }
      else {
        toast.error(responseData.errors);
      }
    }
    catch(error){
      console.log(`${error}`)
    }
  };
  

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex bg-gradient-to-t from-pink-300 to-white flex-col w-full min-h-screen items-center justify-center bg-green-500">
      <div className="flex rounded-3xl bg-white flex-col p-5 sm:p-10 w-full max-w-md">
        <h1 className="font-bold font-serif text-3xl text-center">{state}</h1>
        <div className="p-2">
          <form className="flex flex-col" action="">
            {state === "Sign Up" && (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                className="p-2 my-3 border-2 rounded-md"
                type="text"
                placeholder="Your Name"
              />
            )}

            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="p-2 border-2 rounded-md"
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="p-2 my-3 border-2 rounded-md"
              type="password"
              placeholder="Password"
            />
          </form>
          <button
            onClick={state === "Login" ? login : signup}
            className="w-full p-3 rounded-lg font-serif text-white font-bold bg-red-600"
          >
            Continue
          </button>
        </div>

        <div className="flex flex-col">
          {state === "Sign Up" ? (
            <p className="font-serif font-medium text-center">
              Already have an account?
              <span
                onClick={() => setState("Login")}
                className="cursor-pointer text-red-700 text-xl"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="font-serif font-medium text-center">
              Create an account
              <span
                onClick={() => setState("Sign Up")}
                className="cursor-pointer text-red-700 text-xl"
              >
                Click Here
              </span>
            </p>
          )}
          <div className="flex justify-center items-center">
            <input type="checkbox" name="" id="" />
            <p className="font-light text-sm">
              By continuing I agree to the terms of use & privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
