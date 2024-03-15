import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginRequest } from "../api/user";
import { useAuth } from "../Context/UserContext";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  // navigate("/tasks")
  // localStorage.setItem('Item', JSON.stringify(user.data.token))
  // };
  // }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (user) => {
    console.log(user, ":user");
    const resp = await signin(user);
  });

  return (
    <div className="flex h-full items-center justify-center ">
      <div className="p-10 rounded-md bg-zinc-800 mt-20">
        <h1 className="text-2xl font-bold mb-2">Login </h1>

        <form onSubmit={onSubmit} className="grid grid-col-1 w-96 gap-2">
          <input
            type="email"
            {...register("email", { required: true })}
            className=" bg-zinc-700 text-white text-lg px-4 py-2 rounded-md mt-2"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className=" bg-zinc-700 text-white text-lg px-4 py-2 rounded-md mt-2"
            placeholder="Password"
          />
          {errors.hashed_password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="bg-sky-700 px-4 py-2 rounded my-3 w-28">
            Send
          </button>
        </form>
        <p className="flex gap-x-2 justify-between my-2">
          Don't have an account?
          <Link to="/register" className="text-green-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
