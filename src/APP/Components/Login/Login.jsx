import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../constants/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();

  const handleAuthentication = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setStatusMessage("");

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setStatusMessage(`Welcome back, ${result.user.email}`);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 sm:min-h-screen bg-gray-100">
      <div
        className="w-full max-w-sm 
                      sm:bg-white sm:p-6 sm:rounded-xl sm:shadow-md sm:space-y-5"
      >
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-semibold text-center mt-6 sm:mt-0">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base">
          Say hi to your friends — they’re waiting!
        </p>

        {/* Form */}
        <form
          onSubmit={handleAuthentication}
          className="flex flex-col gap-3 sm:gap-4 mt-4"
        >
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Messages */}
        {errorMessage && (
          <p className="text-red-500 text-center text-sm mt-2">
            {errorMessage}
          </p>
        )}
        {statusMessage && (
          <p className="text-green-500 text-center text-sm mt-2">
            {statusMessage}
          </p>
        )}

        {/* Link */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 mb-6 sm:mb-0">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
