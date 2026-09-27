import React from 'react';
import cricketImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='w-11/12 h-[60vh] mx-auto bg-linear-to-r from-indigo-500 to-indigo-300 p-10 mt-4'>
              <div className='flex flex-col items-center justify-center space-y-4 mt-4'>
                
                <img className='' src={cricketImg} alt="Cricket" />
              <h1 className='text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl text-gray-500'>Beyond Boundaries Beyond Limits</p>
                <button className='btn btn-outline bg-amber-300 text-black rounded-2xl p-4 border-2 border-gray-100 mb-4'>Claim Free Credit</button>
              </div>
              
        </div>
    );
};

export default Banner;