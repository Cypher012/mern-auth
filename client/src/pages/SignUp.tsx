const SignUp = () => {
  return (
    <div className="px-4 py-5 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          action="#"
          className="p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-lg sm:p-6 lg:p-8"
        >
          <h2 className="text-4xl font-bold text-center text-slate-600">
            Sign in
          </h2>

          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                id="username"
                type="text"
                className="p-4 w-full text-sm rounded-lg border-gray-200 shadow-sm pe-12"
                placeholder="Enter Username"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
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
                id="password"
                type="password"
                className="p-4 w-full text-sm rounded-lg border-gray-200 shadow-sm pe-12"
                placeholder="Enter password"
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block px-5 py-3 w-full text-sm font-medium text-white bg-indigo-600 rounded-lg"
          >
            Sign in
          </button>
          <button
            type="submit"
            className="block px-5 py-3 w-full text-sm font-medium text-white uppercase bg-red-600 rounded-lg"
          >
            Continue with Google
          </button>

          <p className="text-sm text-center text-gray-500">
            No account?
            <a className="underline" href="#">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
