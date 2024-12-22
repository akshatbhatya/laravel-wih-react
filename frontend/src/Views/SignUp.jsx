import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../Views/axois-client.js";
import React from "react";

import {UseAuth,AuthProvider} from "../context/contextProvide.jsx"



const InputField = React.forwardRef(({ label, type, name, id, placeholder, required }, ref) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      ref={ref}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
));


const SignUp = () => {

 

  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmRef = useRef();
  let {setToken,setUser}=UseAuth();
     
  function submitForm(e) {
    e.preventDefault();
    let formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
   
    axiosClient.post('/signup', formData).then(({data}) => {
      console.log(data);
      
      try {
        
       setToken(data.staus);
      

      } catch (error) {
        console.log(error.response);

      }


    }).catch((err) => {
      console.log(err?.response?.data?.errors);

    })

  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
              <InputField
                ref={nameRef}
                label="Your name"
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
              />
              <InputField
                ref={emailRef}
                label="Your email"
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
              />
              <InputField
                ref={passwordRef}
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
              />
           
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
