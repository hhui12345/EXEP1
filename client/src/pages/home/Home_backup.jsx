import { Flame, Recycle, Zap, Star, ShoppingCart, Eye } from "lucide-react"

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-orange-50 via-red-50 to-yellow-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center items-center text-center min-h-[600px]">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              LiteMate
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Mồi than cao cấp làm từ mùn cưa - Đốt nhanh, cháy lâu, thân thiện môi trường
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Khám phá sản phẩm
              </button>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Tại sao chọn LiteMate?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mồi than chất lượng cao, đốt cháy hiệu quả và bảo vệ môi trường
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Flame className="w-12 h-12" />,
                title: "Đốt cháy nhanh",
                desc: "Bắt lửa trong 30 giây, tiết kiệm thời gian và công sức",
                color: "from-red-400 to-orange-500",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Cháy lâu bền",
                desc: "Duy trì nhiệt độ cao trong thời gian dài, hiệu quả tối ưu",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Recycle className="w-12 h-12" />,
                title: "Thân thiện môi trường",
                desc: "Làm từ mùn cưa tái chế, không độc hại, ít khói",
                color: "from-green-400 to-emerald-500",
              },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Sản phẩm nổi bật</h2>
            <p className="text-xl text-gray-600">Mồi than chất lượng cao được ưa chuộng nhất</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "LiteMate Classic", weight: "1kg" },
              { name: "LiteMate Pro", weight: "2kg" },
              { name: "LiteMate Family", weight: "5kg" },
              { name: "LiteMate Bulk", weight: "10kg" },
            ].map((product, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Bán chạy
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-2">Trọng lượng: {product.weight}</p>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(48 đánh giá)</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600 mb-4">{(i + 1) * 25}.000 VNĐ</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Mua ngay
                      </button>
                      <button className="border-2 border-gray-300 hover:border-orange-600 text-gray-600 hover:text-orange-600 py-2 px-4 rounded-lg transition-colors duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ứng dụng đa dạng</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">LiteMate phù hợp với mọi nhu cầu đốt lửa của bạn</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nướng BBQ",
                desc: "Hoàn hảo cho các buổi tiệc nướng ngoài trời, bắt lửa nhanh",
                image: "/assets/bbq.jpg?height=300&width=400",
              },
              {
                title: "Lò sưởi gia đình",
                desc: "Tạo không gian ấm cúng, cháy lâu và ít khói",
                image: "/assets/heater.jpg?height=400&width=400",
              },
              {
                title: "Nhà hàng & Quán ăn",
                desc: "Giải pháp chuyên nghiệp cho bếp than công nghiệp",
                image: "/assets/restaurant.jpg?height=400&width=400",
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ưu điểm vượt trội</h2>
            <p className="text-xl text-gray-600">Điều gì làm nên sự khác biệt của LiteMate</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nguyên liệu tự nhiên",
                desc: "100% mùn cưa tự nhiên, không chất phụ gia độc hại",
                image: "/assets/sawdust.jpg?height=300&width=400",
              },
              {
                title: "Công nghệ nén hiện đại",
                desc: "Quy trình sản xuất tiên tiến, đảm bảo chất lượng đồng đều",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Kiểm tra chất lượng",
                desc: "Mỗi lô hàng được kiểm tra kỹ lưỡng trước khi xuất xưởng",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">LiteMate</h2>
          <p className="text-2xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Mồi than mùn cưa - Giải pháp đốt lửa thông minh và bền vững
          </p>
          <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Đặt hàng ngay
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">LiteMate</h3>
              <p className="text-gray-400 leading-relaxed">Mồi than mùn cưa chất lượng cao cho mọi nhu cầu</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Mồi than 1kg
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Mồi than 5kg
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Mồi than 10kg
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Hướng dẫn sử dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Theo dõi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Zalo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Shopee
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 LiteMate. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
