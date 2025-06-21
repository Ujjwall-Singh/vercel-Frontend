import React, { useState } from 'react';
import dashimg from "../../../Assets/dashimg.png";
import facultyimg from "../../../Assets/facultyimg.gif";
import { FaHome, FaBook, FaBell, FaCalendar, FaCog, FaBars, FaTimes, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import EventCalendar from '../../Calendar';
import Services from '../../Service';



const Facultydash = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out bg-purple-500 shadow-lg w-64 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200  bg-purple-500 text-white">
          <h2 className="text-xl font-semibold ">Faculty Dashboard</h2>
          <button
            className="focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#dashboard" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaHome />
            <span>Dashboard</span>
          </a>
          <a href="/reviewchart" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaBook />
            <span>Evaluation Review</span>
          </a>
          <a href="#analysis" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaChartBar />
            <span>Analysis Chart</span>
          </a>

          <a href="#messages" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaBell />
            <span>Messages</span>
          </a>
          <a href="/calendar" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaCalendar />
            <span>Calendar</span>
          </a>
          <a href="#settings" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaCog />
            <span>Settings</span>
          </a>
          <a href="/login" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaSignOutAlt />
            <span>Logout</span>
          </a>

          <div >
            <img src={dashimg} alt="" />
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md">
          <button
            className="focus:outline-none" // Menu button always visible on all screens
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
          <h1 className="sm:text-base font-semibold lg:text-xl md:text-xl text-purple-500">Welcome Faculty!👋</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-full"
            />
            <Link to='/userprofile'>
            <img
              src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            /></Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4">

          <div className="bg-purple-500 py-6 px-5 my-3 md:px-20 rounded-tl-3xl rounded-br-3xl">
            <div className="bg-white rounded-lg p-5 md:p-5 flex flex-col md:flex-row items-center">
              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-2xl md:text-3xl font-semibold text-purple-600">
                  "Welcome to the Faculty Dashboard"
                </h1>
                <p className="text-gray-700">
                  Track, analyze, and enhance faculty performance with real-time insights and comprehensive reports. Your hub for efficient decision-making and continuous improvement!
                </p>
              </div>

              {/* Image Section */}
              <div className="hidden md:flex md:w-1/2 mt-6 md:mt-0 justify-center">
                <img
                  src={facultyimg} // Replace with the path to your image
                  alt="Faculty Evaluation Dashboard"
                  className="w-1/2 max-w-xs md:max-w-md"
                />
              </div>
            </div>




          </div>
         
          <EventCalendar/>

           {/* Activity Overview */}
            {/* <section className="lg:col-span-1 bg-purple-500 rounded-lg p-6 shadow">
  <h2 className="text-lg font-semibold mb-4 text-white">Notifications</h2>
  <div className="space-y-4">
   
    <div className="flex items-center bg-white rounded p-4 shadow-md">
      <img
        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" // Replace with the path to the avatar image
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="flex-1">
        <p className="font-semibold text-gray-800">Ankur Gill</p>
        <p className="text-gray-600 text-sm">Sent you 2 messages</p>
      </div>
      <button className="text-purple-500 hover:text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

   
    <div className="flex items-center bg-white rounded p-4 shadow-md">
      <img
        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" // Replace with the path to the avatar image
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="flex-1">
        <p className="font-semibold text-gray-800">Vishal Garg</p>
        <p className="text-gray-600 text-sm">Sent you 3 messages</p>
      </div>
      <button className="text-purple-500 hover:text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

   
    <div className="flex items-center bg-white rounded p-4 shadow-md">
      <img
        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" // Replace with the path to the avatar image
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="flex-1">
        <p className="font-semibold text-gray-800">Prashant Panday</p>
        <p className="text-gray-600 text-sm">Sent you a message</p>
      </div>
      <button className="text-purple-500 hover:text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section> */}

        

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
       
           
            <section className="lg:col-span-2 bg-white rounded-lg p-6 shadow">
             <Services/>
            </section>

            {/* Analysis Chart */}
            <Link to='/reviewchart'><section className="lg:col-span-1 bg-purple-500 rounded-lg p-5 shadow">
              <h2 className="text-lg font-semibold p-2 text-white">Analysis Chart</h2>
              <div>
                <img className='rounded' src='https://i.pinimg.com/564x/c0/6f/d0/c06fd06105457b26a4aaec81ee8b1d71.jpg' alt="" />
              </div>
            </section></Link>
          </div>


        </main>
      </div>
    </div>
  );
};

export default Facultydash;
