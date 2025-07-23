import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div
      className='w-full sm:w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                 transform transition-transform duration-700 hover:scale-105 hover:shadow-lg'
    >
      <img
        src='https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/496008467_710270574754914_696396985638097819_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcDykVVD6TX6-e2PYYzM5wopkq9HovbyaimSr0ei9vJsQ1SiYZmKcmIlASrAocm-Nfl1PIAaIJND5DkVg0t35j&_nc_ohc=R-PIeW_g3zkQ7kNvwGCjm6P&_nc_oc=Adk1OZANGH1HhgEBu0rbp8axhxMfphY2aLIWWtGGS09nlcB-EcFs8tFpee2MV71oHvsqQaHi8BKKB4lRfnMmca0R&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=Sljw2ubig7XNlf5NKQ9P7w&oh=00_AfS8YyypNwKY1sfq-c_QsosgLaHRKOEdDiQmDyXYyplpbw&oe=6886DFAE'
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
