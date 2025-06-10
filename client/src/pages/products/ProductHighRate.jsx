import React from 'react';
import { Link } from 'react-router-dom';

function ProductHighRate() {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 
                 hover:shadow-lg w-full mt-5 "
    >
      <img
        src="https://i.pinimg.com/736x/c9/59/0e/c9590e571af77a1127f9a15945556bea.jpg"
        alt="Tranh Vải"
        className="w-full h-56 object-cover"
      />

      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          Tranh Vải Tái Chế - Biển Cả
        </h3>
        <p className="text-sm text-gray-700 mb-2">450.000 VND</p>

        <div className="flex gap-1 text-sm">
          <Link
            to="#"
            className="px-2 py-1 border border-green-600 text-green-600 rounded hover:bg-green-50 transition"
          >
            Chi tiết
          </Link>
          <Link
            to="#"
            className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition"
          >
            Mua
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductHighRate;
