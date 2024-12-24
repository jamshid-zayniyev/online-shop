import React from 'react'
import logo from "../../assets/logo.webp"

const Register = () => {
  return (
    <div>
      <section class=" darkk:bg-gray-900 mt-10">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 darkk:text-white">
          {/* <img class="w-8 h-8 mr-2" src={logo} alt="logo"/> */}
          <img class="w-20 h-20 rounded-full mr-2" src={logo} alt="logo"/>

          {/* Crystal Shop     */}
      </a>
      <div class="w-full bg-white rounded-lg shadow darkk:border md:mt-0 sm:max-w-md xl:p-0 darkk:bg-gray-800 darkk:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl darkk:text-white">
                  Create new account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 darkk:text-white">Your username</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" placeholder="username" required="" />
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 darkk:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 darkk:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" required="" />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 darkk:bg-gray-700 darkk:border-gray-600 darkk:focus:ring-primary-600 darkk:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 darkk:text-gray-300">I accept the <b>Terms and Conditions</b></label>
                          </div>
                      </div>
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline darkk:text-primary-500">Forgot password?</a> */}
                  </div>
                  <button type="submit" class="w-full text-white bg-[blue] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darkk:bg-primary-600 darkk:hover:bg-primary-700 darkk:focus:ring-primary-800">Sign Up</button>
                  <p class="text-sm font-light text-gray-500 darkk:text-gray-400">
                      If you have an account  <a href="/login"  class="font-medium text-primary-600 hover:underline darkk:text-primary-500">Sign in</a>
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