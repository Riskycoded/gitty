
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center bg-white ">
          
          <div>
              <h1 className='text-2xl font-bold text-blue-600'>
              Coinbase
          </h1>
          </div>
          <div>
              <li className='flex gap-4 justify-center items-center'>
                  <ul>Prices</ul>
                  <ul>Learn</ul>
                  <ul>Individual</ul>
                  <ul>Business</ul>
                  <ul>Developers</ul>
                  <ul>Company</ul>
              </li>
          </div>
          <div className=' flex gap-4 justify-center items-center'>
              <ul>Sign In</ul>
              <ul>
                <button className='bg-blue-600 text-white pointer px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                    Get Started
              </button>
              </ul>
          </div>
    </nav>
  );
};

export default Navbar;
