import React, { useState } from 'react';
import logo from '../assets/images/logo-1.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/#",
  },
  {
    id:5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    links: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    links: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    links: "/#",
  },
];

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className='shadow-md bg-white dark:bg-gray-500 dark:text-white duration-200 relative z-40'>
      {/* upper Navbar */}
      <div className='bg-primary/40 py-3 sm:py-0'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#"
              className='font-bold text-2xl sm:text3xl flex gap-2'>
              <img src={logo} alt='Logo'
                className='w-10' />
              QSA Store
            </a>
          </div>
          {/* Search bar */}
          <div className='flex justify-between items-center gap-4'>
            <div className="relative group hidden sm:block">
              <input type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px]
              group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
              />
              <IoMdSearch
                className="text-black group-hover:text-primary absolute top-1/4 -translate-y-1/12 right-3 cursor-pointer font-thin" />
            </div>
            {/* order button */}
            <button onClick={toggleSignIn}
              className='bg-gradient-to-r from-primary to to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group '>
              <span
                className='group-hover:block hidden transition-all duration-200'
              >Order</span>
              <FaCartShopping
                className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>
            <button
            onClick={toggleSignIn}
            className='bg-gradient-to-r from-slate-800 to to-primary/55 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 hover:bg-black '>Sign In</button>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className='flex justify-center font-medium'>
        <ul className='sm:flex hidden items-center gap-4'>
          { Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link}
              className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
            </li>
          ))}
          {/* simple dropdown & linkd */}
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Trending Products
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md p-2 text-black'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}
                    className='inline-block w-full rounded-md p-2 hover:bg-primary/20 '>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>      
      </div>
      {/* Sign In Popup */}
      {showSignIn && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-slate-200 p-8 rounded-lg shadow-md">
            {/* Sign-in form content */}
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" placeholder="Enter your email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" placeholder="Enter your password" required />
              </div>
              <div className="flex justify-between items-center mb-4">
                <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-md hover:bg-primary hover:to-secondary transition-colors duration-300">Sign In</button>
                <a href="#" className="text-gray-500 hover:text-slate-950">Forgotten Password?</a>
              </div>
              <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-green-600 hover:underline">Create one</a></p>
            </form>
            <button onClick={toggleSignIn} className="mt-4 text-red-500 hover:text-red-700">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
