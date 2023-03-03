import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex justify-between items-center border-b border-sky-900">
      <Link to={"/"} className="logo text-3xl font-semibold text-sky-400">
        Proxima.
      </Link>
      <nav className=" flex gap-5">
        <Link className="hover:text-sky-400 duration-300" to="/login">
          Login
        </Link>
        <Link className="hover:text-sky-400 duration-300" to="/signup">
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
