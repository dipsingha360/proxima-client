import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-form max-w-sm mx-auto flex flex-col gap-5 py-20 ">
      <h2 className="text-4xl font-medium text-sky-400 mb-10 ">Login</h2>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-within:border-sky-400 duration-300"
          type="email"
          id="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-within:border-sky-400 duration-300"
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn bg-sky-400 text-slate-900 py-3 mt-3  rounded-xl hover:bg-sky-500 duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
