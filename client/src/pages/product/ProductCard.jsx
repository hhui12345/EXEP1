import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div
      className='w-full sm:w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                 transform transition-transform duration-700 hover:scale-105 hover:shadow-lg'
    >
      <img
        src='https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/494696458_710601798055125_8798376064221314940_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFAJpN4MSoJb6yVmc38vxEyzfXhEhuRuqTN9eESG5G6pAbxuD2TmuySSNA_1ROqYftiuqPiFW8eoDYqmhtYkZcY&_nc_ohc=lK05lepSw9cQ7kNvwHMVoU6&_nc_oc=AdnIBsEBmDVkOuNfb9Tmm_JOXJHccUx_HypmGJW9arwDpfkm17m-LAC3UgehRDcoP0o&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=JozEZj9v2LlxYJWvEDuPxA&oh=00_AfS0xXZxBuKfSdBtcuBYZoZmH5RLxaZdMte4TNBYgIG4cw&oe=687CC0AF'
        alt='Ảnh'
        className='w-full h-48 sm:h-72 object-cover'
      />

      <div className='p-4'>
        <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-1'>
          Viên mồi lửa 

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
            to='#'
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
