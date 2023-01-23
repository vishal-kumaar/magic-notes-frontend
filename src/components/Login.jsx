import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../assets/images/left_arrow.svg";

export default function Login(props) {
  return (
    <div>
      <div className="mt-4 ml-2">
        <Link to="/profile">
          <img
            src={leftArrow}
            alt="left-arrow"
            className={`w-7 h-7 ${
              props.mode === "light" ? "invert-0" : "invert"
            }`}
          />
        </Link>
      </div>
      <form className="mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 2xl:mx-96 my-10">
        <div
          className={`font-extrabold text-2xl mb-7 text-center ${
            props.mode === "light" ? "text-black" : "text-white"
          }`}
        >
          Log In
        </div>
        <div className="my-6">
          <input
            type="email"
            placeholder="Your Email Address"
            className={`w-full border-2 py-3 px-6 font-lg outline-none rounded-3xl shadow-md ${
              props.mode === "light"
                ? "border-gray-200 bg-white text-gray-500 placeholder:text-gray-500"
                : "border-gray-400 bg-gray-600 text-gray-100 placeholder:text-gray-100"
            }`}
          />
        </div>
        <div className="my-6">
          <input
            type="password"
            placeholder="Password"
            className={`w-full border-2 py-3 px-6 font-lg outline-none rounded-3xl shadow-md ${
              props.mode === "light"
                ? "border-gray-200 bg-white text-gray-500 placeholder:text-gray-500"
                : "border-gray-400 bg-gray-600 text-gray-100 placeholder:text-gray-100"
            }`}
          />
        </div>
        <div className="my-6">
          <input
            type="password"
            placeholder="Password"
            className={`w-full border-2 py-3 px-6 font-lg outline-none rounded-3xl shadow-md ${
              props.mode === "light"
                ? "border-gray-200 bg-white text-gray-500 placeholder:text-gray-500"
                : "border-gray-400 bg-gray-600 text-gray-100 placeholder:text-gray-100"
            }`}
          />
        </div>
        <div className="my-6 mx-1 flex justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2"/>
            <p className={props.mode==="light" ? "text-black" : "text-gray-300"}>Remember Me</p>
          </div>
          <div className={`text-gray-400 font-normal`}>
            <Link to="/forgot">Forgot Password?</Link>
          </div>
        </div>
        <div className="my-6">
          <button
            type="submit"
            className={`w-full py-3 rounded-3xl font-semibold text-lg bg-blue-500 text-white shadow-lg`}
          >
            Login
          </button>
        </div>
      </form>
      <div className={`text-center mt-24 font-medium text-gray-400`}>
        Don't have an account?
        <Link to="/signup">
          <span className="text-blue-500"> Create new one</span>
        </Link>
      </div>
    </div>
  );
}