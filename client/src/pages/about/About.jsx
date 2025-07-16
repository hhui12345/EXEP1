// import { Link } from "react-router-dom"

// function About() {
//   return (
//     <div className="mx-24 mt-5">
//       <h1 className="text-center text-green-800 text-5xl font-bold">LiteMate</h1>

//       <div className="mt-32 flex">
//         {/* Side bar */}
//         <div className="w-1/4 translate-x-5">
//           <p className="cursor-pointer hover:text-green-600 mb-3"> Giới thiệu </p>
//           <p className="cursor-pointer hover:text-green-600 mb-3"> Sứ mệnh </p>
//           <p className="cursor-pointer hover:text-green-600 mb-3"> Sản phẩm </p>
//           <p className="cursor-pointer hover:text-green-600"> Ứng dụng </p>
//         </div>

//         {/* Main content */}
//         <div className="w-3/4 -translate-x-20">
//           <h1 className="text-6xl">VỀ CHÚNG TÔI</h1>

//           <p className="mt-5 text-justify leading-relaxed">
//             LiteMate là thương hiệu hàng đầu chuyên sản xuất viên mồi lửa chất lượng cao, được tạo ra từ niềm đam mê về
//             sự tiện lợi và an toàn trong việc đốt lửa. Chúng tôi cam kết mang đến những sản phẩm viên mồi lửa đáng tin
//             cậy, dễ sử dụng và thân thiện với môi trường. Mỗi viên mồi LiteMate được chế tạo với công nghệ tiên tiến,
//             đảm bảo khả năng bắt lửa nhanh chóng và cháy bền trong mọi điều kiện thời tiết. Sứ mệnh của chúng tôi là
//             cung cấp giải pháp đốt lửa hoàn hảo cho mọi hoạt động ngoài trời, từ cắm trại, nướng BBQ đến sưởi ấm trong
//             nhà. Tại LiteMate, chúng tôi tin rằng việc đốt lửa phải đơn giản, an toàn và hiệu quả. Qua sản phẩm của
//             mình, chúng tôi mong muốn mang lại sự tiện lợi tối đa cho người dùng và góp phần tạo ra những khoảnh khắc ấm
//             áp, gắn kết. Hãy tin tưởng LiteMate - người bạn đồng hành đáng tin cậy trong mọi chuyến phiêu lưu và những
//             buổi tụ họp ấm cúng!
//           </p>
//         </div>
//       </div>

//       {/* Tính năng */}
//       <div className="flex mt-10 gap-x-9">
//         <div className="w-1/2 border rounded-lg overflow-hidden">
//           <img
//             src="/placeholder.svg?height=240&width=400"
//             alt="Viên mồi lửa LiteMate"
//             className="w-full object-cover h-60"
//           />
//         </div>

//         <div className="w-1/2 bg-green-100 h-44 border border-gray-100 rounded-xl">
//           <div className="p-5">
//             <p className="text-gray-700 leading-relaxed">
//               Viên mồi lửa LiteMate được sản xuất từ nguyên liệu tự nhiên, bắt lửa nhanh trong 3-5 giây, cháy bền lên
//               đến 10-15 phút, hoàn toàn an toàn và không độc hại cho sức khỏe.
//             </p>

//             <Link
//               to="#"
//               className="inline-block text-center bg-white px-3 py-1 w-[150px] mt-2 border rounded-lg hover:bg-green-600 hover:text-white transition-colors"
//             >
//               Tìm hiểu thêm
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="bg-green-300 p-8 text-center mt-8 border-gray-100 rounded-lg">
//         <p className="text-lg font-medium">
//           Viên mồi lửa LiteMate - Giải pháp đốt lửa nhanh chóng, an toàn và hiệu quả cho mọi hoạt động ngoài trời và
//           trong nhà.
//         </p>
//       </div>

//       <h1 className="text-3xl font-semibold mt-8">Ưu điểm vượt trội</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
//         <div className="bg-gray-100 p-5 text-center border-gray-100 rounded-lg">
//           <h3 className="font-semibold text-lg mb-3 text-green-700">Bắt lửa nhanh</h3>
//           <p className="text-sm">Chỉ cần 3-5 giây để bắt lửa, tiết kiệm thời gian và công sức</p>
//         </div>

//         <div className="bg-gray-100 p-5 text-center border-gray-100 rounded-lg">
//           <h3 className="font-semibold text-lg mb-3 text-green-700">Cháy bền</h3>
//           <p className="text-sm">Duy trì ngọn lửa ổn định trong 10-15 phút, đủ thời gian để đốt than hoặc củi</p>
//         </div>

//         <div className="bg-gray-100 p-5 text-center border-gray-100 rounded-lg">
//           <h3 className="font-semibold text-lg mb-3 text-green-700">An toàn</h3>
//           <p className="text-sm">Nguyên liệu tự nhiên, không độc hại, an toàn cho sức khỏe và môi trường</p>
//         </div>
//       </div>

//       <div className="mt-10 border overflow-hidden rounded-lg">
//         <img
//           src="/placeholder.svg?height=384&width=800"
//           alt="Ứng dụng viên mồi lửa LiteMate"
//           className="w-full h-96 object-cover"
//         />
//       </div>

//       <div className="mt-10 text-center bg-green-50 p-8 rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4 text-green-800">Liên hệ với chúng tôi</h2>
//         <p className="text-lg text-gray-700">
//           Khám phá dòng sản phẩm viên mồi lửa LiteMate chất lượng cao. Chúng tôi luôn sẵn sàng hỗ trợ bạn tìm ra giải
//           pháp đốt lửa hoàn hảo!
//         </p>

//         <div className="mt-6 flex justify-center gap-4">
//           <Link
//             to="/contact"
//             className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
//           >
//             Liên hệ ngay
//           </Link>
//           <Link
//             to="/products"
//             className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors"
//           >
//             Xem sản phẩm
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About







import { Link } from "react-router-dom"
import { Flame, Zap, Shield, Clock, Leaf, Star } from "lucide-react"

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Flame className="h-12 w-12 text-orange-300" />
              <h1 className="text-6xl font-bold tracking-tight">LiteMate</h1>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Giải pháp mồi lửa thông minh cho cuộc sống hiện đại
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Nội dung</h3>
              <nav className="space-y-3">
                {[
                  { name: "Giới thiệu", icon: Star },
                  { name: "Sứ mệnh", icon: Flame },
                  { name: "Sản phẩm", icon: Zap },
                  { name: "Ứng dụng", icon: Shield },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                  >
                    <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* About Section */}
            <section id="giới-thiệu" className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Về Chúng Tôi</h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-600 mb-6">
                  LiteMate là thương hiệu hàng đầu chuyên sản xuất viên mồi lửa chất lượng cao, được tạo ra từ niềm đam
                  mê về sự tiện lợi và an toàn trong việc đốt lửa.
                </p>
                <p>
                  Chúng tôi cam kết mang đến những sản phẩm viên mồi lửa đáng tin cậy, dễ sử dụng và thân thiện với môi
                  trường. Mỗi viên mồi LiteMate được chế tạo với công nghệ tiên tiến, đảm bảo khả năng bắt lửa nhanh
                  chóng và cháy bền trong mọi điều kiện thời tiết.
                </p>
                <p>
                  Sứ mệnh của chúng tôi là cung cấp giải pháp đốt lửa hoàn hảo cho mọi hoạt động ngoài trời, từ cắm
                  trại, nướng BBQ đến sưởi ấm trong nhà. Hãy tin tưởng LiteMate - người bạn đồng hành đáng tin cậy trong
                  mọi chuyến phiêu lưu!
                </p>
              </div>
            </section>

            {/* Product Showcase */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Viên mồi lửa LiteMate"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sản Phẩm Chất Lượng</h3>
                  <p className="text-green-200">Được tin dùng bởi hàng nghìn khách hàng</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Flame className="h-8 w-8 text-orange-300" />
                  <h3 className="text-2xl font-bold">Tại Sao Chọn LiteMate?</h3>
                </div>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Viên mồi lửa LiteMate được sản xuất từ nguyên liệu tự nhiên, bắt lửa nhanh trong 3-5 giây, cháy bền
                  lên đến 10-15 phút, hoàn toàn an toàn và không độc hại cho sức khỏe.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg"
                >
                  Khám phá ngay
                  <Zap className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* Features Grid */}
            <section id="sản-phẩm">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Ưu Điểm Vượt Trội</h2>
                <p className="text-xl text-gray-600">Những tính năng làm nên sự khác biệt của LiteMate</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Bắt Lửa Nhanh",
                    description: "Chỉ cần 3-5 giây để bắt lửa, tiết kiệm thời gian và công sức",
                    color: "from-yellow-400 to-orange-500",
                  },
                  {
                    icon: Clock,
                    title: "Cháy Bền",
                    description: "Duy trì ngọn lửa ổn định trong 10-15 phút, đủ thời gian để đốt than hoặc củi",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: Shield,
                    title: "An Toàn",
                    description: "Nguyên liệu tự nhiên, không độc hại, an toàn cho sức khỏe và môi trường",
                    color: "from-green-400 to-emerald-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Environmental Impact */}
            <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Leaf className="h-12 w-12 text-green-200" />
                <h2 className="text-3xl font-bold text-center">Thân Thiện Môi Trường</h2>
              </div>
              <p className="text-xl text-center text-green-100 max-w-3xl mx-auto leading-relaxed">
                Viên mồi lửa LiteMate - Giải pháp đốt lửa nhanh chóng, an toàn và hiệu quả cho mọi hoạt động ngoài trời
                và trong nhà, đồng thời bảo vệ môi trường xanh.
              </p>
            </section>

            {/* Application Image */}
            <section className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=1200"
                alt="Ứng dụng viên mồi lửa LiteMate"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="p-8 lg:p-12 text-white max-w-2xl">
                  <h3 className="text-3xl font-bold mb-4">Ứng Dụng Đa Dạng</h3>
                  <p className="text-xl text-gray-200 mb-6">
                    Từ cắm trại, nướng BBQ đến sưởi ấm trong nhà - LiteMate luôn sẵn sàng phục vụ
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Cắm trại</span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">BBQ</span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">Sưởi ấm</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Sẵn Sàng Trải Nghiệm?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Khám phá dòng sản phẩm viên mồi lửa LiteMate chất lượng cao. Chúng tôi luôn sẵn sàng hỗ trợ bạn tìm ra
                  giải pháp đốt lửa hoàn hảo!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Flame className="h-5 w-5" />
                    Liên hệ ngay
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Star className="h-5 w-5" />
                    Xem sản phẩm
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About





