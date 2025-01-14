import React from "react";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-base-100 mt-20 rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto font-bold text-lg">
            <h1>Cognito.</h1>
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-white dark:text-gray-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-white dark:text-gray-400">
            Login or create account
          </p>

          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-900 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-900 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-white dark:text-gray-200 hover:text-white"
              >
                Forget Password?
              </a>

              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-base dark:bg-gray-700">
          <span className="text-sm text-white dark:text-gray-200">
            Need an account?
          </span>

          <a
            href="/signup"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
