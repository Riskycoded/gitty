import React from 'react'
import HeaderImage from "../assets/header.jpeg"

const Header = () => {
  return (
      <div className='flex justify-around items-center bg-white p-4'>
          <div>
              <div className='flex flex-col gap-2'>
                  <div className=' flex flex-row gap-2'>
                         <p>B</p>
                  <p className=' text-blue-600'>Jump start your portfolio</p>
                
                  </div>
                  <div className=''>
                  <p className=' text-start font-bold text-4xl '>Jump start <br /> your crypto <br /> portfolio</p>
                    <p className=' text-start mt-5'>Coinbase is the easiest place to buy and sell <br /> cryptocurrency. Sign up and get started today.</p>
                  </div>
                  <div className=' flex gap-4 justify-center items-center'>
                      <input type="email" placeholder='Email address' className=' py-2 px-2 border-2' />
                      <button className='bg-blue-600 text-white pointer px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                        Get Started
                    </button>
                 </div>
              </div>
          </div>
          <div className='flex justify-center items-center'>
              {/* image*/}
              <img src={HeaderImage} alt="bitcoin" className=' w-[500px] h-[700px]'  />
          </div>
    </div>
  )
}

export default Header