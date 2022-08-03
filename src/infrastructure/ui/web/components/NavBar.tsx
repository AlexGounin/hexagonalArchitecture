import { Link } from 'react-router-dom';
import React from 'react';

export const NavBar = () => {
  return (
    // <nav className='bg-green-300 h-16 w-100 flex items-center px-5 text-gray-50 shadow-xl rounded-b-lg mb-5'>
    //   <span className='flex-none w-24'>
    //     <Link className='text-green-800' to='/'>
    //       DOGAPP
    //     </Link>
    //   </span>
    // </nav>
    <nav>
      <div className='nav-wrapper teal'>
        <Link to='/' className='brand-logo center'>
          DogApp
        </Link>
      </div>
    </nav>
  );
};
