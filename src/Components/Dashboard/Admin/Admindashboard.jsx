import React, { useState } from "react";
import { FaBars, FaBook, FaBell, FaChartBar, FaUser, FaSearch } from "react-icons/fa";
import dashimg from '../../../Assets/dashimg.png';
import facultyimg from '../../../Assets/facultyimg.gif';
import { Link } from 'react-router-dom';
import EventCalendar from "../../Calendar";

const Admindash = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-purple-500 text-white w-64 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static z-10 h-full`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 text-xl font-bold border-b border-purple-500">
           Admin Dashboard
          </div>
          <nav className="flex-1 p-4 space-y-4">
            <a href="/reviewtable" className="flex items-center space-x-2">
              <FaChartBar />
              <span>Dashboard</span>
            </a>
            <a href="/ratecard" className="flex items-center space-x-2">
              <FaBook />
              <span>Evaluation Review</span>
            </a>
            <a href="/reviewform" className="flex items-center space-x-2">
              <FaBell />
              <span>Analysis Form</span>
            </a>
            <a href="profile" className="flex items-center space-x-2">
              <FaUser />
              <span>User Profiles</span>
            </a>
          </nav>
          <img
            src={dashimg}
            alt="Dashboard"
            className="mt-auto p-4"
          />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button
            className="lg:hidden text-purple-700 text-2xl"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
          <div className="text-lg font-semibold">Welcome, Admin</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaSearch className="absolute left-2 top-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Link to='/userprofile'>
            <img
              src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border"
            /></Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Welcome Section */}
          <section className="bg-white p-10 rounded-lg flex justify-between items-center shadow-2xl">
            <div>
              <h1 className="text-2xl font-bold text-purple-700 pb-5">Welcome Back!</h1>
              <p className="text-black pr-60">Track, analyze, and enhance faculty performance with real-time insights and comprehensive reports. Your hub for efficient decision-making and continuous improvement!
              </p>
            </div>
            <img
              src={facultyimg}
              alt="Welcome"
              className="w-60"
            />
          </section>

          <EventCalendar/>
          <div className="flex m-2 gap-5">
           <Link to='/studentdashform'><section className="lg:col-span-1 bg-purple-500 rounded-lg p-5 shadow">
                        <h2 className="text-lg font-semibold p-2 text-white"> Student Analysis Chart</h2>
                        <div>
                          <img className='rounded' src='https://i.pinimg.com/564x/c0/6f/d0/c06fd06105457b26a4aaec81ee8b1d71.jpg' alt="" />
                        </div>
                      </section></Link>
                       <Link to='/studentdashform'><section className="lg:col-span-1 bg-purple-500 rounded-lg p-5 shadow">
                                    <h2 className="text-lg font-semibold p-2 text-white"> Faculty Analysis Chart</h2>
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

export default Admindash;
