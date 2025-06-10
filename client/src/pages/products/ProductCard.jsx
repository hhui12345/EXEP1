import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div
      className="w-64 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                    transform transition-transform duration-700 hover:scale-105 hover:shadow-lg"
    >
      <img
        src="https://i.pinimg.com/736x/c9/59/0e/c9590e571af77a1127f9a15945556bea.jpg"
        alt="Tranh Vải"
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          Tranh Vải Tái Chế - Biển Cả
        </h3>
        <p className="text-base text-gray-700 mb-3">450.000 VND</p>

        <div className="flex gap-2">
          <Link
            to="#"
            className="px-3 py-1 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition"
          >
            Xem chi tiết
          </Link>
          <Link
            to="#"
            className="px-4 py-1 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
          >
            Mua
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
