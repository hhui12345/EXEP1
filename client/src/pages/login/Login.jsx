import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200'>
        <div className='flex flex-col lg:flex-row min-h-[600px]'>
          {/* Left Panel - Login Form */}
          <div className='w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white'>
            <div className='max-w-md mx-auto w-full'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                  ĐĂNG NHẬP
                </h2>
                <p className='text-gray-600'>Chào mừng bạn trở lại!</p>
              </div>

              <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
                {/* Email Input */}
                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    placeholder='Nhập email của bạn'
                    className='w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm flex items-center gap-1'>
                      <span className='w-4 h-4'>⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div className='space-y-2'>
                  <label
                    htmlFor='password'
                    className='text-sm font-medium text-gray-700'
                  >
                    Mật khẩu
                  </label>
                  <input
                    id='password'
                    type='password'
                    placeholder='Nhập mật khẩu của bạn'
                    className='w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className='text-red-500 text-sm flex items-center gap-1'>
                      <span className='w-4 h-4'>⚠️</span>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Login Button */}
                <button
                  type='submit'
                  // onClick={handleLogin}
                  className='w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]'
                >
                  Đăng Nhập
                </button>

                {/* Divider */}
                <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-4 bg-white text-gray-500'>Hoặc</span>
                  </div>
                </div>

                {/* Google Login Button */}
                <button
                  type='button'
                  variant='outline'
                  className='w-full h-12 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-3 hover:bg-gray-50'
                >
                  <svg className='w-5 h-5' viewBox='0 0 24 24'>
                    <path
                      fill='#4285F4'
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    />
                    <path
                      fill='#34A853'
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    />
                    <path
                      fill='#FBBC05'
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    />
                    <path
                      fill='#EA4335'
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    />
                  </svg>
                  Đăng nhập với Google
                </button>
              </form>
            </div>
          </div>

          {/* Right Panel - Welcome Section */}
          <div className='w-full lg:w-1/2 relative overflow-hidden'>
            {/* Background Image with Overlay */}
            <div
              className='absolute inset-0 bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")`,
              }}
            ></div>

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80'></div>

            {/* Content */}
            <div className='relative z-10 h-full flex flex-col justify-center items-center p-8 lg:p-12 text-center'>
              <div className='max-w-md'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                  Xin chào, bạn!
                </h2>
                <p className='text-blue-100 text-lg mb-8 leading-relaxed'>
                  Bắt đầu hành trình của bạn với chúng tôi. Đăng ký ngay để khám
                  phá những trải nghiệm tuyệt vời.
                </p>

                <Link
                  to='/user/register'
                  className='inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 active:scale-95'
                >
                  ĐĂNG KÝ NGAY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
