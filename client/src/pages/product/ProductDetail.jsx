import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      {/* Banner */}
      <div className='relative w-full h-[40vh] sm:h-[50vh]'>
        <img
          src='https://img.freepik.com/premium-photo/camping-camp-fire-with-mountain-background_1301236-61595.jpg'
          alt='Banner'
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4'>
          <h1 className='text-3xl sm:text-5xl font-bold'>Chi tiết Sản Phẩm</h1>
          <p className='text-sm sm:text-base mt-2'>
            Mua sắm các sản phẩm mồi lửa - Góp phần bảo vệ môi trường
          </p>
        </div>
      </div>

      {/* End Banner */}

      {/* Detail */}
      <div className='min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Image */}
          <div className='relative aspect-square'>
            <img
              src='../../../public/assets/product.png'
              alt='Sản phẩm'
              className='object-cover w-[66.6667vw] h-[90vh] rounded-lg'
            />
          </div>

          {/* Info */}
          <div className='space-y-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
              LiteMate Classic
            </h2>

            <div className='flex flex-wrap gap-3'>
              <span className='bg-green-500 text-white px-3 py-1 rounded text-sm font-medium'>
                Sản phẩm mới
              </span>
              <span className='bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium'>
                Nổi bật
              </span>
            </div>

            <div className='text-3xl sm:text-4xl font-bold text-red-600'>
              25.000 VND
            </div>

            <div className='text-sm sm:text-base text-gray-600 space-y-2'>
              <div>
                <span className='font-medium'>Loại:</span> Viên mồi lửa từ mùn
                cưa
              </div>
              <p>
                <span className='font-medium'>Mô tả:</span> Sản phẩm thân thiện
                với môi trường, được làm từ mùn cưa ép tự nhiên, dễ bắt lửa và
                tiện lợi cho việc nhóm bếp, đốt lửa trại hoặc sử dụng trong lò
                nướng than. Không hóa chất độc hại, an toàn cho sức khỏe và bảo
                vệ thiên nhiên.
              </p>
            </div>

            {/* Quantity & Button */}
            <div className='space-y-6'>
              {/* Quantity Selector */}
              <div>
                <label className='block text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2'>
                  Số lượng
                </label>
                <div className='flex items-center bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-200 rounded-xl shadow-sm hover:shadow-md w-fit'>
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className='w-8 h-8 sm:w-10 sm:h-10 text-amber-700 hover:text-amber-900 hover:bg-amber-200 rounded-l-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200'
                  >
                    <svg
                      className='w-4 h-4 mx-auto'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <line x1='5' y1='12' x2='19' y2='12' />
                    </svg>
                  </button>

                  <div className='min-w-[50px] sm:min-w-[60px] h-8 sm:h-10 px-3 sm:px-4 bg-white border-x border-amber-200 flex items-center justify-center'>
                    <span className='text-base font-bold text-gray-800 select-none'>
                      {quantity}
                    </span>
                  </div>

                  <button
                    onClick={incrementQuantity}
                    className='w-8 h-8 sm:w-10 sm:h-10 text-amber-700 hover:text-amber-900 hover:bg-amber-200 rounded-r-xl transition-all duration-200'
                  >
                    <svg
                      className='w-4 h-4 mx-auto'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                    >
                      <line x1='12' y1='5' x2='12' y2='19' />
                      <line x1='5' y1='12' x2='19' y2='12' />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className='group relative w-full sm:w-fit bg-gradient-to-r from-gray-900 to-black text-white px-4 py-3 rounded-lg font-semibold text-sm sm:text-base uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
                <div className='relative flex items-center justify-center space-x-2 sm:space-x-3'>
                  <svg
                    className='w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M3 3h2l.4 2M7 13h10l4-8H5.4' />
                    <circle cx='9' cy='21' r='1' />
                    <circle cx='20' cy='21' r='1' />
                  </svg>
                  <span>Thêm vào giỏ hàng</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Detail */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ProductDetail;
