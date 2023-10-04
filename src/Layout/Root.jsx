import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const Root = () => {
      return (
            <div className='max-w-6xl mx-auto font-poppins mt-3'>
                  <Outlet></Outlet>
                  <Toaster />
            </div>
      );
};

export default Root;
