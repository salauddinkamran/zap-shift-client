import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation()
  const navigate = useNavigate();
  const handleRegistration = (data) => {
    console.log("After register", data.photo[0]);
    const profileImage = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // update user profile here
        const formData = new FormData();
        formData.append("image", profileImage);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log("after uploade image", res.data.data.url);
          const updatePhotoUrl = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(updatePhotoUrl)
            .then(() => {
              console.log("user profile updated successfully!");
              navigate(location?.state || "/")
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-10">
      <h2 className="text-4xl font-bold">Create an Account</h2>
      <p className="text-gray-600">Register with ZapShift</p>
      <form onSubmit={handleSubmit(handleRegistration)} className="mt-5">
        <fieldset className="fieldset">
          {/* name */}
          <label className="label text-lg font-bold">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is requred.</p>
          )}

          {/* photo image field */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />
          {errors.file?.type === "required" && (
            <p className="text-red-500">Photo is requred.</p>
          )}
          {/* email */}
          <label className="label text-lg font-bold">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is requred.</p>
          )}
          {/* passowrd */}
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
            <span className="absolute top-3 right-3 text-lg cursor-pointer" onClick={() => setShow(!show)}>{ show ? <FaRegEye /> : <FaRegEyeSlash />}</span>
          </div>

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
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
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="text-gray-500 mt-2">
          Already have an account?{" "}
          <Link state={location.state} to="/" className="text-primary">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
