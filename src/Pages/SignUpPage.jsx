import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import toast from "react-hot-toast";

function SignUpPage() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    addressName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    otp: ""
  });

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  async function getOtp() {
    try {
      if (!formData.email) {
        toast.error("Please enter an email address");
        return;
      }
   
      const response = await axios.post("", { email: formData.email });
      if(response.status===200){
        toast.success("OTP sent to your email ID")
      }
      console.log("OTP sent to your email ID");
     
      setIsOtpSent(true);
    } catch (error) {
      console.log(error);
      toast.error("Failed to send OTP");
    }
  }


  async function verifyOtp() {
    try {
      const response = await axios.post("", { 
        email: formData.email, 
        otp: formData.otp 
      });
      if(response.status===200){
        toast.success("Account Verified Successfully");
      }
      console.log("OTP Verified");
    
      setIsOtpVerified(true);
    } catch (error) {
      toast.error("Couldn't Verify your Account");
      toast.error("Couldn't Verify your Account")
      setIsOtpVerified(false);
    }
  }


  async function sendUserData(e) {
    e.preventDefault();
    

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!isOtpVerified) {
      toast.error("Please verify OTP first");
      return;
    }

    try {
  
      const response = await axios.post("", formData);
      console.log("User data sent successfully:", response.data);
      if(response.status===200){
        toast.success("Account created successfully!");
      }
    } catch (error) {
      console.error("Error sending user data:", error);
      toast.error("Failed to create account. Please try again.");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img src={logo} alt="Logo" className="mb-4 w-20" />
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={sendUserData} className="max-w-md mx-auto">
     
          <div className="mb-3">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email"
              required
            />
          </div>

      
          <div className="flex justify-center items-center mb-3">
            <button 
              type="button" 
              onClick={getOtp} 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2"
            >
              Get OTP
            </button>
          </div>

          {isOtpSent && (
            <div className="mb-3">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter OTP"
                required
              />
              <button 
                type="button" 
                onClick={verifyOtp} 
                className="mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5"
              >
                Verify OTP
              </button>
            </div>
          )}

      
          <div className="mb-3 my-3">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Phone Number"
              required
            />
          </div>

      
          <div className="mb-3 my-2">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
              required
            />
          </div>

    
          <div className="mb-3 mx-2">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm Password"
              required
            />
          </div>

     
          <div className="mb-3">
            <input
              type="text"
              name="addressName"
              value={formData.addressName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Address Name"
              required
            />
          </div>

   
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Full Address"
              required
            />
          </div>

      
          <div className="mb-3">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="City"
              required
            />
          </div>


          <div className="mb-3">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="State"
              required
            />
          </div>

         
          <div className="mb-3">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Country"
              required
            />
          </div>


          <div className="mb-3">
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Pin Code"
              required
            />
          </div>

        
          <button 
            type="submit" 
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;