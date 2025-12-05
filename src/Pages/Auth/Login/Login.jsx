import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signInUser } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const handleLoginForm = (data) => {
    console.log("After Login", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-10">
      <h3 className="text-4xl font-bold">Welcome Back</h3>
      <p className="text-gray-500">Login with ZapShift</p>
      <form onSubmit={handleSubmit(handleLoginForm)} className="mt-5">
        <fieldset className="fieldset">
          <label className="label text-lg font-bold">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Thsi email field is required</p>
          )}
          <label className="label text-lg font-bold">Password</label>
          <div className="relative">
          <input
            type={show ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="input"
            placeholder="Password"
            />
            <span className="absolute top-3 right-3 text-lg cursor-pointer" onClick={() => setShow(!show)}> { show ? <FaRegEye /> : <FaRegEyeSlash />}</span>
          </div>

          {errors.password?.type === "required" && (
            <p className="text-red-500">This password field is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              password must be 6 characters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              password must have at least one uppercase, at least one lowercase,
              atlest one number, and least one special characters
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-gray-500 mt-2">
          Don’t have any account?{" "}
          <Link state={location.state} to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
