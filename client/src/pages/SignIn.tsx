import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useSelector } from "react-redux";
import { getUsersState } from "../redux/user/userSlice";

const SignIn = () => {
  const disPatch = useDispatch();
  const { error } = useSelector(getUsersState);
  const router = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  interface signInprop {
    email: string;
    password: string;
  }

  const onSubmit = async (values: signInprop) => {
    try {
      disPatch(signInStart());
      const res = await axios.post("/api/auth/signIn", values);
      console.log("Data pasted successfully", res.data);
      disPatch(signInSuccess(res));
      router("/");
    } catch (error) {
      disPatch(signInFailure(error));
      console.error("Error posting data", error);
    }
  };

  return (
    <div className="px-4 py-5 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8"
        >
          <h2 className="text-4xl font-bold text-center uppercase text-slate-600">
            Sign In
          </h2>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                {...register("email")}
                id="email"
                type="email"
                className="p-4 w-full text-sm rounded-lg border-gray-200 shadow-sm pe-12"
                placeholder="Enter email"
              />

              <span className="grid absolute inset-y-0 place-content-center px-4 end-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                {...register("password")}
                id="password"
                type="password"
                className="p-4 w-full text-sm rounded-lg border-gray-200 shadow-sm pe-12"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block px-5 py-3 w-full text-sm font-medium text-white uppercase bg-indigo-600 rounded-lg disabled:bg-gray-500"
          >
            Sign In
          </button>
          <button
            type="submit"
            className="block px-5 py-3 w-full text-sm font-medium text-white uppercase bg-red-600 rounded-lg"
          >
            Continue with Google
          </button>

          <p className="mt-5 text-red-600">
            {error ? error?.message || "something went wrong" : ""}
          </p>

          <p className="text-sm text-center text-gray-500">
            No account?
            <Link to={"/signUp"} className="text-sky-700 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
