import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleeLogin = async (e) => {
    e.preventDefault();

    // login user
    await login(email, password);
    if (!error) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleeLogin}
      className="login-form max-w-sm mx-auto flex flex-col gap-5 py-20 "
    >
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
        disabled={loading}
        type="submit"
        className="btn bg-sky-400 text-slate-900 py-3 mt-3  rounded-xl hover:bg-sky-500 duration-300"
      >
        Login
      </button>
      {error && (
        <p className="bg-yellow-500/20 rounded-lg p-5 text-yellow-500 border border-yellow-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Login;
