import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to MERN Auth</h1>
      <p className="text-xl mb-8">Join us and enjoy our services</p>
      <div className="flex space-x-4">
        {userInfo ? (
          <>
            <div className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              {userInfo.name}
            </div>
            <Link
              to="/profile"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              <FaSignInAlt className="mr-2" /> Sign In
            </Link>
            <Link
              to="/register"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              <FaUserPlus className="mr-2" /> Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
