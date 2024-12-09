import React from 'react';
import { Link } from 'react-router-dom'; 
const BookingConfirmation = () => {

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            {/* User Profile Section */}
            <div className="flex flex-row items-center gap-4 mb-12">
                <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                    alt="Chris Dave"
                    className="w-28 h-28 rounded-full object-cover border-2 border-white shadow-lg"
                />

                <div className="text-center my-9">
                    <h1 style={{ fontSize: "24px" }} className="text-7xl font-bold mb-2">Chris Dave</h1> {/* Increased font size */}
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Personal details
                    </button>
                </div>
            </div>
            <br /> <br /> <br />
            {/* Confirmation Check */}
            <div className="mb-12 flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-full object-cover border-2 border-white shadow-lg"> {/* Increased size */}
                    <img src='./images/tick.gif' alt="Tick" />
                </div>

                {/* Booking Details */}
                <div className="flex justify-center gap-12 mb-8">
                    <button class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Pin: 3456</button>
                 <Link
                        to='/ride'  >
                    <button class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start Ride</button>
                    </Link>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-1">Booking Confirmed</h2>
                    <p className="text-gray-600">Booking ID: 1234 5678</p>
                </div>
            </div>

            {/* Added vertical spacing */}
            <div className="mb-8"></div>
            <br /> <br />
            {/* Driver Details */}
            <div className="w-full max-w-md text-center">
                <h3 className="text-gray-600 mb-4 text-2xl font-semibold">Taxi Ride Application Cab details</h3> {/* Centered and larger font size */}

                <div className="flex flex-col gap-6">
                    {/* Driver Info */}
                    <div className="flex flex-row items-center gap-2">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                            alt="Willis Bricks"
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        />
                        <h3 className="font-medium text-gray-800">Willis Bricks</h3>

                        {/* Added Stars Below Name */}
                        <div className="flex gap-1 text-yellow-500 mt-2">
                            <span>⭐</span>
                            <span>⭐</span>
                            <span>⭐</span>
                        </div>
                    </div>
                    <br />

                    {/* Action Buttons */}
                    <div className="flex flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Chat</button>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Locate</button>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Profile</button>
                    </div>

                    {/* Arrival Info */}
                    <div className="flex flex gap-4 items-center justify-between">
                        <div>
                            <span className="text-gray-600">Arriving in</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">2 mins</button>
                        </div>
                        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {/* <footer className="mt-auto pt-8 pb-4">
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
                    {links.map((link) => (
                        <a key={link} href="#" className="hover:text-gray-900">
                            {link}
                        </a>
                    ))}
                </nav>
            </footer> */}
        </div>
    );
}

export default BookingConfirmation;
