import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductHighRate from './ProductHighRate';

function Product() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <div className="relative w-full h-[30vh] md:h-[50vh]">
        <img
          src="https://img.freepik.com/premium-photo/camping-camp-fire-with-mountain-background_1301236-61595.jpg"
          alt="Danh sách sản phẩm"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold">Danh sách Sản Phẩm</h1>
          <p className="text-sm md:text-base mt-2">
            Mua sắm các sản phẩm mồi lửa - Góp phần bảo vệ môi trường
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-24 mt-5 gap-6">
        {/* Filter */}
        <div className="w-full lg:w-1/4 space-y-4">
          <h1 className="font-semibold text-2xl md:text-3xl">Bộ lọc</h1>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-[16px] text-gray-700">
              Tìm kiếm
            </label>
            <input
              id="search"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Tìm kiếm sản phẩm"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="cate_id" className="block text-[16px] text-gray-700">
              Danh mục
            </label>
            <select
              id="cate_id"
              name="category"
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 appearance-none"
              defaultValue=""
            >
              <option value="">Tất cả danh mục</option>
              <option value="tent">Lều trại</option>
              <option value="fire-starter">Mồi lửa</option>
              <option value="tools">Dụng cụ</option>
              <option value="clothing">Trang phục</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price_id" className="block text-[16px] text-gray-700">
              Khoảng giá
            </label>
            <select
              id="price_id"
              name="price"
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 appearance-none"
              defaultValue=""
            >
              <option value="">Tất cả giá</option>
              <option value="under100">Dưới 100,000 VND</option>
              <option value="over100">Trên 100,000 VND</option>
            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-center text-3xl md:text-5xl text-emerald-600">
            Tất cả sản phẩm
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex rounded-lg border border-green-500 overflow-hidden">
              {[1, 2].map((num) => (
                <div
                  key={num}
                  onClick={() => setSelected(num)}
                  className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    selected === num
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-green-500 hover:bg-green-50'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          {/* High Rated Products */}
          <div className="mt-10">
            <h1 className="text-center text-xl md:text-2xl text-emerald-600 mb-4">
              Sản phẩm đánh giá cao
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <ProductHighRate />
              <ProductHighRate />
              <ProductHighRate />
              <ProductHighRate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
