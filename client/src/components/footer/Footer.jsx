import React from 'react';

function Footer() {
  return (
    <>
      <footer className='bg-gray-900 text-white py-12 px-10'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-4 gap-8 mb-8 ml-7'>
            <div>
              <h3 className='text-2xl font-bold mb-4 text-orange-400'>
                LiteMate
              </h3>
              <p className='text-gray-400 leading-relaxed'>
                Mồi than mùn cưa chất lượng cao cho mọi nhu cầu
              </p>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Sản phẩm</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Mồi than 1kg
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Mồi than 5kg
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Mồi than 10kg
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Hỗ trợ</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Theo dõi</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Zalo
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-orange-400 transition-colors'
                  >
                    Shopee
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-gray-800 pt-8 text-center'>
            <p className='text-gray-400'>
              © 2025 LiteMate. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
