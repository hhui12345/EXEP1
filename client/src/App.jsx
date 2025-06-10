import { ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-800">DearFab</h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
              Trang Chủ
            </a>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
              Sản Phẩm
            </a>
            <a href="#" className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
              Giới Thiệu
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-green-600 hover:text-green-700 transition-colors duration-200">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </button>
            <button className="p-2 text-green-600 hover:text-green-700 transition-colors duration-200">
              <User className="h-6 w-6" />
              <span className="sr-only">User Account</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-green-600 hover:text-green-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-green-600 hover:text-green-700 font-medium">
              Trang Chủ
            </a>
            <a href="#" className="block px-3 py-2 text-green-600 hover:text-green-700 font-medium">
              Sản Phẩm
            </a>
            <a href="#" className="block px-3 py-2 text-green-600 hover:text-green-700 font-medium">
              Giới Thiệu
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
