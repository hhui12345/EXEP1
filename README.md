ecommerce-app/
├── client/                 # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Hình ảnh, icon, logo
│   │   ├── components/     # Các component giao diện như ProductCard, Navbar, Footer
│   │   ├── pages/          # Các trang chính như Home, ProductDetail, Cart, Login
│   │   ├── services/       # Gọi API (axios)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Backend (Node.js + Express + MySQL)
│   ├── controllers/        # Xử lý logic nghiệp vụ (productController.js, userController.js)
│   ├── models/             # Kết nối DB và truy vấn (productModel.js, userModel.js)
│   ├── routes/             # Các route như /api/products, /api/users
│   ├── db.js               # Kết nối MySQL
│   ├── server.js           # Điểm khởi động backend
│   └── .env                # Thông tin DB (bảo mật)
│
└── README.md               # Hướng dẫn dự án
