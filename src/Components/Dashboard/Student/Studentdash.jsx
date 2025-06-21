import React, { useState } from 'react';
import dashimg from "../../../Assets/dashimg.png";
import { FaHome, FaBook, FaBell, FaCalendar, FaCog, FaBars, FaTimes, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import EventCalendar from '../../Calendar';
import { Link } from 'react-router-dom';
import Services from '../../Service';
import Headercard from './Headercard';


const Studentdash = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out bg-purple-500 shadow-lg w-64 z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200  bg-purple-500 text-white">
          <h2 className="text-xl font-semibold">Student Dashboard</h2>
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
          <a href="/courses" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaBook />
            <span>My Courses</span>
          </a>
          <a href="/reviewform" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaChartBar />
            <span>Review Form</span>
          </a>

          <a href="#messages" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaBell />
            <span>Messages</span>
          </a>
          <a href="/calendar" className="flex items-center space-x-2 text-white hover:text-purple-900">
            <FaCalendar />
            <span>Calendar</span>
          </a>
          <a href="/settings" className="flex items-center space-x-2 text-white hover:text-purple-900">
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
          <h1 className="sm:text-base font-semibold lg:text-xl md:text-xl text-purple-500">Welcome Students!👋</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border-2 border-grey-500 rounded-full"
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
        
        <div className="flex-1 overflow-y-auto">
        <Headercard />
        </div>
        <main className="flex-1 p-4">

          <EventCalendar />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">


            <section className="lg:col-span-2 bg-white rounded-lg p-6 shadow flex justify-center">
              <Services />
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

export default Studentdash;
