import React, { useState } from 'react';
import { BsPerson, BsPersonBoundingBox, BsPersonCircle, BsSearch } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-5 md:p-8 md:px-20 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex justify-between items-center">

            {/* navbar site name */}
            <a href='#'>
                <img src={`logo.svg`} alt="herobackground"  className="bg-cover bg-center object-cover" />
            </a>

            {/* navbar links */}
            <div className="hidden md:flex items-center space-x-4 md:text-2xl text-darkblue">
                <a href="#" className="hover:bg-darkblue hover:text-white transition ease-out duration-500  p-2 rounded">
                    <span>Ik huur</span>
                </a>
                <a href="#" className="hover:bg-darkblue hover:text-white transition ease-out duration-500 p-2 rounded">
                    <span>Ik zoek</span>
                </a>
                <a href="#" className="hover:bg-darkblue hover:text-white transition ease-out duration-500 p-2 rounded">
                    <span>Over ons</span>
                </a>
                <a href="#" className="hover:bg-darkblue hover:text-white transition ease-out duration-500 p-2 rounded">
                    <span>Projecten</span>
                </a>
            </div>

            {/* navbar icons */}
            <div className="hidden md:block lg:flex items-center space-x-8 text-lg">
                <div>
                    <a href='#' className="hover:text-gray-700">
                        <BsSearch />
                    </a>
                </div>

                <div>
                    <a href='#' className="hover:text-gray-700">
                        <BsPersonCircle />
                    </a>
                </div>
            </div>


            {/* navbar in a mobile screen */}
            <button 
            className="md:hidden text-darkblue focus:outline-none" 
            onClick={toggleNavbar}
            >
            <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                />
            </svg>
            </button>
        </div>

        {isOpen && (
            <div className="md:hidden mt-4 space-y-2 text-darkblue">
                <a href="#" className="block hover:bg-blue-700 p-2 rounded">Ik huur</a>
                <a href="#" className="block hover:bg-blue-700 p-2 rounded">Ik zoek</a>
                <a href="#" className="block hover:bg-blue-700 p-2 rounded">Over ons</a>
                <a href="#" className="block hover:bg-blue-700 p-2 rounded">Projecten</a>
                <div className="flex space-x-4">
                    <button className="block hover:bg-blue-700 p-2 rounded">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16 11A5 5 0 1111 6a5 5 0 015 5z" />
                        </svg>
                    </button>

                    <button className="block hover:bg-blue-700 p-2 rounded">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    <path stroke="currentColor" strokeWidth="2" d="M5.121 17.804C6.411 15.168 9.123 13 12 13s5.589 2.168 6.879 4.804" />
</svg>

                    </button>
                </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
