import React, { useState } from "react";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";
import axios from "axios"; // Ensure axios is imported

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function login(e) {
    e.preventDefault();

    try {
      const response = await axios.post("", formData);
      console.log("User data sent successfully:", response.data);
      if (response.status === 200) {
        toast.success("Login Successful");
      }
    } catch (error) {
      console.error("Error sending user data:", error);
      toast.error("Failed to login. Please try again.");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img src={logo} alt="Logo" className="mb-4 w-20" />
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={login} className="max-w-md mx-auto">
          <div className="mb-3">
            <input
              type="text"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
