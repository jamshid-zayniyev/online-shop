import React from 'react'
import logo from "../../assets/logo.webp"

const Register = () => {
  return (
    <div>
      <section className=" darkk:bg-gray-900 mt-10">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 darkk:text-white">
          {/* <img className="w-8 h-8 mr-2" src={logo} alt="logo"/> */}
          <img className="w-20 h-20 rounded-full mr-2" src={logo} alt="logo"/>

          {/* Crystal Shop     */}
      </a>
      <div className="w-full bg-white rounded-lg shadow darkk:border md:mt-0 sm:max-w-md xl:p-0 darkk:bg-gray-800 darkk:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl darkk:text-white">
                  Create new account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" className="block mb-2 text-sm font-medium text-gray-900 darkk:text-white">Your username</label>
                      <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" placeholder="username" required="" />
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 darkk:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 darkk:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 darkk:bg-gray-700 darkk:border-gray-600 darkk:focus:ring-primary-600 darkk:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 darkk:text-gray-300">I accept the <b>Terms and Conditions</b></label>
                          </div>
                      </div>
                      {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline darkk:text-primary-500">Forgot password?</a> */}
                  </div>
                  <button type="submit" className="w-full text-white bg-[blue] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darkk:bg-primary-600 darkk:hover:bg-primary-700 darkk:focus:ring-primary-800">Sign Up</button>
                  <p className="text-sm font-light text-gray-500 darkk:text-gray-400">
                      If you have an account  <a href="/login"  className="font-medium text-primary-600 hover:underline darkk:text-primary-500">Sign in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Register