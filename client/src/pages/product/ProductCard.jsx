import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div
      className='w-full sm:w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                 transform transition-transform duration-700 hover:scale-105 hover:shadow-lg'
    >
      <img
        src='../../../public/assets/product.png'
        alt='Ảnh'
        className='w-full h-48 sm:h-72 object-cover'
      />

      <div className='p-4'>
        <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-1'>
          LiteMate Classic
        </h3>
        <p className='text-sm sm:text-base text-gray-700 mb-3'>25.000 VND</p>

        <div className='flex flex-wrap gap-2'>
          <Link
            to='detail/:id'
            className='px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition text-sm'
          >
            Xem chi tiết
          </Link>
          <Link
            to='/cart'
            className='px-4 py-1 bg-green-700 text-white rounded-md hover:bg-green-800 transition text-sm'
          >
            Mua
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
