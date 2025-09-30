import { Flame, Recycle, Zap, Star, ShoppingCart, Eye } from "lucide-react"
import { products } from "../../data/products"

export default function Home() {
  return (
    <div className='font-sans text-gray-900 bg-white'>
      {/* Hero Section */}
      <section className='relative min-h-[600px] bg-gradient-to-br from-orange-50 via-red-50 to-yellow-100 overflow-hidden'>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className='relative container mx-auto px-4 py-20 flex flex-col justify-center items-center text-center min-h-[600px]'>
          <div className='max-w-4xl'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
              LiteMate
            </h1>
            <p className='text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed'>
              Mồi than cao cấp làm từ mùn cưa - Đốt nhanh, cháy lâu, thân thiện
              môi trường
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
                Khám phá sản phẩm
              </button>
              <button className='border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300'>
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent'></div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4 text-gray-900'>
              Tại sao chọn LiteMate?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Mồi than chất lượng cao, đốt cháy hiệu quả và bảo vệ môi trường
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: <Flame className='w-12 h-12' />,
                title: 'Đốt cháy nhanh',
                desc: 'Bắt lửa trong 30 giây, tiết kiệm thời gian và công sức',
                color: 'from-red-400 to-orange-500',
              },
              {
                icon: <Zap className='w-12 h-12' />,
                title: 'Cháy lâu bền',
                desc: 'Duy trì nhiệt độ cao trong thời gian dài, hiệu quả tối ưu',
                color: 'from-yellow-400 to-orange-500',
              },
              {
                icon: <Recycle className='w-12 h-12' />,
                title: 'Thân thiện môi trường',
                desc: 'Làm từ mùn cưa tái chế, không độc hại, ít khói',
                color: 'from-green-400 to-emerald-500',
              },
            ].map((feature, i) => (
              <div key={i} className='group'>
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className='text-2xl font-bold mb-4 text-center text-gray-900'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 text-center leading-relaxed'>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-orange-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4 text-gray-900'>
              Sản phẩm nổi bật
            </h2>
            <p className='text-xl text-gray-600'>
              Mồi than chất lượng cao được ưa chuộng nhất
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || `/placeholder.svg?height=300&width=300`}
                      alt={product.name}
                      className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                    {product.tag && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {product.tag}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-2">Trọng lượng: {product.weight}</p>
                    <div className="flex items-center mb-3">
                      {[...Array(product.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({product.reviews} đánh giá)</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600 mb-4">
                      {product.price.toLocaleString("vi-VN")} VNĐ
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Mua ngay
                      </button>
                      <Link
                        to='products/detail/:id'
                        className='border-2 border-gray-300 hover:border-orange-600 text-gray-600 hover:text-orange-600 py-2 px-4 rounded-lg transition-colors duration-300'
                      >
                        <Eye className='w-4 h-4' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ứng dụng thực tế</h2>
            <p className="text-xl text-gray-600">Phù hợp cho nhiều nhu cầu sử dụng khác nhau</p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                title: "Gia đình",
                desc: "Dễ dàng nhóm than cho bữa tiệc nướng tại gia",
                img: "/assets/usecase-1.jpg",
              },
              {
                title: "Nhà hàng",
                desc: "Tiết kiệm thời gian, tăng hiệu quả cho bếp nướng",
                img: "/assets/usecase-2.jpg",
              },
              {
                title: "Dã ngoại",
                desc: "Tiện lợi mang theo, đốt nhanh chóng ngoài trời",
                img: "/assets/usecase-3.jpg",
              },
            ].map((usecase, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={usecase.img || `/placeholder.svg?height=200&width=400`}
                  alt={usecase.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{usecase.title}</h3>
                  <p className="text-gray-600">{usecase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Trải nghiệm LiteMate ngay hôm nay!</h2>
          <p className="text-xl mb-8">Mồi than cao cấp cho mọi bữa tiệc nướng hoàn hảo</p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg">
            Mua ngay
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">LiteMate</h3>
            <p className="text-gray-400">
              Mồi than cao cấp làm từ mùn cưa - Đốt nhanh, cháy lâu, thân thiện môi trường
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Trang chủ</a></li>
              <li><a href="#" className="hover:text-white">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-white">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-white">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-white">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <p>📍 Hà Nội, Việt Nam</p>
            <p>📞 0123 456 789</p>
            <p>📧 support@litemate.vn</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          © 2025 LiteMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
