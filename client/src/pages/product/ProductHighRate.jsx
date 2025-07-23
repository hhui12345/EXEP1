import React from 'react';
import { Link } from 'react-router-dom';

function ProductHighRate() {
  return (
    <div
      className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                 hover:shadow-lg w-full'
    >
      <img
        src='../../../public/assets/product-2.png'
        alt='Tranh Vải'
        className='w-full h-40 sm:h-56 object-cover'
      />

      <div className='p-3'>
        <h3 className='text-sm sm:text-base font-semibold text-gray-900 mb-1'>
          Viên mồi lửa
        </h3>
        <p className='text-xs sm:text-sm text-gray-700 mb-2'>50.000 VND</p>

        <div className='flex flex-wrap gap-2 text-xs sm:text-sm'>
          <Link
            to='detail/:id'
            className='px-2 py-1 border border-green-600 text-green-600 rounded hover:bg-green-50 transition'
          >
            Chi tiết
          </Link>
          <Link
            to='#'
            className='px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition'
          >
            Mua
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductHighRate;
