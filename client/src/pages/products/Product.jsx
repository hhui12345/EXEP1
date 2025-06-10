import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductHighRate from './ProductHighRate';

function Product() {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <div className="relative min-w-screen h-[50vh]">
        <img
          src="https://img.freepik.com/premium-photo/camping-camp-fire-with-mountain-background_1301236-61595.jpg"
          alt="Danh sách sản phẩm"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl">Danh sách Sản Phẩm</h1>
          <div className="text-base mt-2">
            Mua sắm các sản phẩm mồi lửa - Góp phần bảo vệ môi trường
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex mx-24 mt-5">
        {/* Filter */}
        <div className="w-1/4">
          <h1 className="font-semibold text-3xl"> Bộ lọc </h1>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-[16px] text-gray-700">
              Tìm kiếm
            </label>
            <input
              id="search"
              type="text"
              className="mt-1 block w-[230px] border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Tìm kiếm sản phẩm"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="cate_id"
              className="block text-[16px] text-gray-700"
            >
              Danh mục
            </label>
            <select
              id="cate_id"
              name="category"
              className="block w-[230px] border border-gray-300 rounded-md shadow-sm p-2 appearance-none"
              defaultValue=""
            >
              <option value="tent">Tất cả danh mục</option>
              <option value="tent">Lều trại</option>
              <option value="fire-starter">Mồi lửa</option>
              <option value="tools">Dụng cụ</option>
              <option value="clothing">Trang phục</option>
            </select>
          </div>

          {/* Price */}

          <div>
            <label
              htmlFor="price_id"
              className="block text-[16px] text-gray-700"
            >
              Khoảng giá
            </label>
            <select
              id="price_id"
              name="price"
              className="block w-[230px] border border-gray-300 rounded-md shadow-sm p-2 appearance-none"
              defaultValue=""
            >
              <option value="tent">Tất cả giá</option>
              <option value="tent">Dưới 100,000 VND</option>
              <option value="fire-starter">Trên 100,000 VND</option>
            </select>
          </div>
        </div>

        {/* Product Card All */}
        <div className="w-3/4">
          <h1 className="text-center text-5xl text-emerald-600">
            Tất cả sản phẩm
          </h1>

          <div className="grid grid-cols-3 gap-5 mt-4 ">
            {/* Card 1 */}
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* End  Product Card All*/}

          {/* Pagination */}
          <div className="inline-flex rounded-lg border-1 border-green-500 overflow-hidden mt-5 ml-[750px]">
            <div
              onClick={() => setSelected(1)}
              className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                selected === 1
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500 hover:bg-green-50'
              }`}
            >
              1
            </div>
            <div
              onClick={() => setSelected(2)}
              className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                selected === 2
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500 hover:bg-green-50'
              }`}
            >
              2
            </div>
          </div>
          {/* End pagination */}

          {/* Product đánh giá cao */}

          <div>
            <h1 className="text-center text-2xl text-emerald-600">
              Sản phẩm đánh giá cao
            </h1>

            <div className='grid grid-cols-4 gap-4'>

              <ProductHighRate/>
              <ProductHighRate/>
              <ProductHighRate/>
              <ProductHighRate/>
           
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
