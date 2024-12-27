import { Link } from "react-router-dom";
import axiosClient from "./axois-client";
import React, { useRef, useState } from "react";


const InputField = React.forwardRef(({ label, type, name, id, placeholder, required }, ref) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      type={type}
      name={name}
      ref={ref}
      id={id}
      placeholder={placeholder}
      required={required}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
));





const Login = () => {

  let [errors, setErrors] = useState([]);
  let email = useRef();
  let password = useRef();

  function hitRequest(userData) {
    axiosClient.post('/login', userData).then(({ data }) => {
      console.log(data);
      setErrors([]);

    }).catch((err) => {
      console.log(err);
      setErrors(err?.response?.data?.errors);

    })
  }

  function onSubmitForm(event) {
    event.preventDefault()
    let userData = {
      email: email.current.value,
      password: password.current.value,
    }
    if (userData.email && userData.password) {
      hitRequest(userData);
    }

  }
  return (

    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {
              errors &&
              Object.keys(errors).map((error, index) => {
                return <p key={index} className="text-sm text-red-500 dark:text-red-400">{errors[error][0]}</p>
              })
            }

            <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmitForm}>
              <InputField
                label="Your email"
                type="email"
                name="email"
                id="email"
                ref={email}
                placeholder="name@company.com"
              />
              <InputField
                label="Password"
                ref={password}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                  <label htmlFor="remember" className="ml-3 text-sm text-gray-500 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
9