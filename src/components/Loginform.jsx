import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";
import { loginUser, userdetails } from "../Redux/feautures/loginSlice";

const Loginform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userdetails()).then(() => {});
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let PasswordRegex = /^[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,15}$/;
    !emailRegex.test(data.email) &&
      toast.error("Invalid email id ", {
        style: {
          border: "1px solid red",
          padding: "10px 50px",
          color: "black",
        },
      });
    !PasswordRegex.test(data.password) &&
      toast.error("Password Must be 6 digits ", {
        style: {
          border: "1px solid red",
          padding: "10px ",
          color: "black",
        },
      });

    if (emailRegex.test(data.email) && PasswordRegex.test(data.password)) {
      dispatch(loginUser({ data })).then(({ payload }) => {
        if (payload) {
          toast.success("Successfully Authenticated!");
          navigate("/success");
        } else {
          toast.error("Authentication Failed ", {
            style: {
              border: "1px solid red",
              padding: "10px",
              color: "black",
            },
          });
        }
      });
    }
  };
  return (
    <div className=" md:flex ">
      <div className="bg-white md:m-10 mx-6 md:w-full md:h-full rounded-xl ">
        <form onSubmit={handleSubmit}>
          <div className="text-violet-900 font-bold text-2xl mt-5 md:mt-10 lg:mt-5">
            Login
          </div>
          <div className="text-md md:my-4 lg:my-2 text-gray-300">
            Doesn't have an account yet?
            <span className="text-violet-500 underline font-semibold cursor-pointer">
              Sign Up
            </span>
          </div>

          <div class="mb-6    ">
            <label
              class="block text-gray-700 text-md font-semibold mb-2"
              for="username"
            >
              Email Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-4 text-sm px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="you@example.com"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.email}
            />
          </div>

          <div class="mb-6 ">
            <div className="flex justify-between">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>

              <span className="text-violet-500 underline font-semibold cursor-pointer">
                {" "}
                Forgot Password?
              </span>
            </div>
            <input
              class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter 6 charecter or more"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.password}
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-gray-300 font-medium">Remember me</span>
          </label>

          <button
            type="submit"
            className="text-center text-lg font-semibold cursor-pointer bg-violet-600 text-white w-full rounded-lg py-2 mt-2 md:my-5 lg:mt-2"
          >
            Login
          </button>
          <Toaster />
          <div className="m-5 lg:my-2 grid grid-cols-3 items-center text-gray-500">
            <hr className="text-gray-400" />
            <p className="text-center">or login with</p>
            <hr className="text-gray-400" />
          </div>
          <div className="flex justify-around mb-10 md:mt-10 lg:mt-0">
            <div className="border-red-400 border cursor-pointer flex items-center py-2 md:px-14 px-10 rounded-lg">
              <FcGoogle className="mr-2" /> Google
            </div>
            <div className="border-blue-500 border cursor-pointer flex items-center py-2 md:px-14 px-10  rounded-lg">
              <GrFacebookOption className="mr-2" />
              Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
