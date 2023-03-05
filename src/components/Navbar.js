import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();
  const handleLogout = () => {
    // logout
    logout();
  };

  return (
    <div className="navbar container mx-auto h-20 flex justify-between items-center border-b border-sky-900">
      <Link to={"/"} className="logo text-3xl font-semibold text-sky-400">
        Proxima.
      </Link>
      <nav className=" flex gap-5">
        {!user && (
          <div className="flex  gap-5">
            <Link className="hover:text-sky-400 duration-300" to="/login">
              Login
            </Link>
            <Link className="hover:text-sky-400 duration-300" to="/signup">
              Signup
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-5 items-center">
            <span>{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-sky-400 font-medium text-sky-900 px-5 py-2 rounded-lg hover:bg-sky-50 duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
