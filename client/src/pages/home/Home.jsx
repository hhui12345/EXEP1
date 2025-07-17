import { Leaf, Recycle, Palette, Star, ShoppingCart, Eye } from "lucide-react"

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 flex flex-col justify-center items-center text-center min-h-[600px]">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Vải ơi!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Tranh ghép vải làm từ vải tái chế - Nghệ thuật bền vững cho ngôi nhà của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Khám phá sản phẩm
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Tại sao chọn DearFab?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi mang đến những tác phẩm nghệ thuật độc đáo, thân thiện với môi trường
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Thân thiện môi trường",
                desc: "100% vải tái chế, góp phần bảo vệ hành tinh xanh",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: "Thiết kế độc đáo",
                desc: "Mỗi tác phẩm là một câu chuyện riêng, không trùng lặp",
                color: "from-blue-400 to-teal-500",
              },
              {
                icon: <Recycle className="w-12 h-12" />,
                title: "Bền vững lâu dài",
                desc: "Chất lượng cao, bền màu theo thời gian",
                color: "from-purple-400 to-pink-500",
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Sản phẩm nổi bật</h2>
            <p className="text-xl text-gray-600">Những tác phẩm được yêu thích nhất</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`Tranh Vải Tái Chế #${i + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Bán chạy
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Tranh Vải Tái Chế #{i + 1}</h3>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(24 đánh giá)</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-600 mb-4">400.000 VNĐ</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Mua ngay
                      </button>
                      <button className="border-2 border-gray-300 hover:border-emerald-600 text-gray-600 hover:text-emerald-600 py-2 px-4 rounded-lg transition-colors duration-300">
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

      {/* Green Lifestyle Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nâng tầm phong cách sống xanh</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tạo nên không gian sống hiện đại, thân thiện với môi trường
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Phong cách hiện đại",
                desc: "Thiết kế tinh tế, phù hợp với xu hướng nội thất đương đại",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                title: "Chất lượng cao cấp",
                desc: "Màu sắc sống động, bền đẹp theo thời gian, không phai màu",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                title: "Trang trí đa năng",
                desc: "Phù hợp với mọi không gian từ phòng khách đến văn phòng",
                image: "/placeholder.svg?height=400&width=400",
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

      {/* Highlight Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Tính năng vượt trội</h2>
            <p className="text-xl text-gray-600">Điều gì làm nên sự khác biệt của DearFab</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Thủ công tinh xảo",
                desc: "Từng đường kim mũi chỉ được thực hiện tỉ mỉ bởi nghệ nhân có kinh nghiệm",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Nguyên liệu bền vững",
                desc: "Sử dụng 100% vải tái chế chất lượng cao, an toàn cho sức khỏe",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Ứng dụng đa dạng",
                desc: "Từ trang trí nhà cửa đến quà tặng ý nghĩa cho người thân",
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
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">DearFab</h2>
          <p className="text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Nghệ thuật vải tái chế - Tạo nên không gian sống bền vững
          </p>
          <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Bắt đầu mua sắm
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">DearFab</h3>
              <p className="text-gray-400 leading-relaxed">Nghệ thuật vải tái chế cho một tương lai bền vững</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Tranh vải
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Trang trí
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Quà tặng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Hướng dẫn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Bảo hành
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Theo dõi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 DearFab. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
