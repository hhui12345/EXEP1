import { ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // const handleLogin = () => {
  // };

  return (
    <header className='w-full bg-gray-50 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold text-amber-800'>LiteMate</h1>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <a
              href='/'
              className='text-green-600 hover:text-green-700 font-medium'
            >
              Trang Chủ
            </a>
            <a
              href='/products'
              className='text-green-600 hover:text-green-700 font-medium'
            >
              Sản Phẩm
            </a>
            <a
              href='/about'
              className='text-green-600 hover:text-green-700 font-medium'
            >
              Giới Thiệu
            </a>
          </nav>

          {/* Right Icons */}
          <div className='flex items-center space-x-4'>
            <button
              className='p-2 text-green-600 hover:text-green-700 transition-colors duration-200'
            >
              <Link
                to='user/login'
                className='hidden md:inline ml-1 font-medium'
              >
                Đăng nhập
              </Link>
            </button>

            {/* cart */}
            <a
              href='/cart'
              className='p-2 text-green-600 hover:text-green-700 transition-colors duration-200'
            >
              <ShoppingCart className='h-6 w-6' />
              <span className='sr-only'>Shopping Cart</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
