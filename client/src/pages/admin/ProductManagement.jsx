"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Edit, Trash2, Package, AlertCircle } from "lucide-react"
import "./ProductManagement.css"

const ProductManagement = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ["Tất cả", "Điện thoại", "Laptop", "Tablet", "Phụ kiện"]

  useEffect(() => {
    // Mock data
    const mockProducts = [
      {
        id: 1,
        name: "iPhone 15 Pro",
        category: "Điện thoại",
        price: 29990000,
        stock: 25,
        minStock: 10,
        sold: 120,
        status: "active",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Điện thoại",
        price: 22990000,
        stock: 5,
        minStock: 10,
        sold: 98,
        status: "low_stock",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "MacBook Pro M3",
        category: "Laptop",
        price: 45990000,
        stock: 15,
        minStock: 5,
        sold: 45,
        status: "active",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "iPad Air",
        category: "Tablet",
        price: 18990000,
        stock: 0,
        minStock: 8,
        sold: 67,
        status: "out_of_stock",
        image: "/placeholder.svg?height=100&width=100",
      },
    ]
    setProducts(mockProducts)
    setFilteredProducts(mockProducts)
  }, [])

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (selectedCategory && selectedCategory !== "Tất cả") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const getStockStatus = (stock, minStock) => {
    if (stock === 0) return { status: "out_of_stock", label: "Hết hàng", class: "danger" }
    if (stock <= minStock) return { status: "low_stock", label: "Sắp hết", class: "warning" }
    return { status: "in_stock", label: "Còn hàng", class: "success" }
  }

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      setProducts(products.filter((p) => p.id !== productId))
    }
  }

  const ProductModal = ({ isOpen, onClose, product, onSave }) => {
    const [formData, setFormData] = useState({
      name: "",
      category: "",
      price: "",
      stock: "",
      minStock: "",
      image: "",
    })

    useEffect(() => {
      if (product) {
        setFormData(product)
      } else {
        setFormData({
          name: "",
          category: "",
          price: "",
          stock: "",
          minStock: "",
          image: "",
        })
      }
    }, [product])

    const handleSubmit = (e) => {
      e.preventDefault()
      const productData = {
        ...formData,
        price: Number.parseFloat(formData.price),
        stock: Number.parseInt(formData.stock),
        minStock: Number.parseInt(formData.minStock),
        id: product ? product.id : Date.now(),
        sold: product ? product.sold : 0,
      }
      onSave(productData)
      onClose()
    }

    if (!isOpen) return null

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{product ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}</h2>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Danh mục</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Chọn danh mục</option>
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Giá (VNĐ)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tồn kho</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Tồn kho tối thiểu</label>
              <input
                type="number"
                value={formData.minStock}
                onChange={(e) => setFormData({ ...formData, minStock: e.target.value })}
                required
              />
            </div>
            <div className="form-actions">
              <button type="button" onClick={onClose} className="btn btn-cancel">
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                {product ? "Cập nhật" : "Thêm mới"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="product-management">
      <div className="page-header">
        <div>
          <h1>Quản lý sản phẩm</h1>
          <p>Quản lý kho hàng và sản phẩm</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={20} />
          Thêm sản phẩm
        </button>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <Package size={24} />
          <div>
            <span className="stat-number">{products.length}</span>
            <span className="stat-label">Tổng sản phẩm</span>
          </div>
        </div>
        <div className="stat-item success">
          <Package size={24} />
          <div>
            <span className="stat-number">{products.filter((p) => p.stock > p.minStock).length}</span>
            <span className="stat-label">Còn hàng</span>
          </div>
        </div>
        <div className="stat-item warning">
          <AlertCircle size={24} />
          <div>
            <span className="stat-number">{products.filter((p) => p.stock <= p.minStock && p.stock > 0).length}</span>
            <span className="stat-label">Sắp hết</span>
          </div>
        </div>
        <div className="stat-item danger">
          <AlertCircle size={24} />
          <div>
            <span className="stat-number">{products.filter((p) => p.stock === 0).length}</span>
            <span className="stat-label">Hết hàng</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat === "Tất cả" ? "" : cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th>Đã bán</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => {
              const stockStatus = getStockStatus(product.stock, product.minStock)
              return (
                <tr key={product.id}>
                  <td>
                    <div className="product-info">
                      <img src={product.image || "/placeholder.svg"} alt={product.name} />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td className="price">{formatCurrency(product.price)}</td>
                  <td>
                    <div className="stock-info">
                      <span className="stock-number">{product.stock}</span>
                      <span className={`stock-status ${stockStatus.class}`}>{stockStatus.label}</span>
                    </div>
                  </td>
                  <td>{product.sold}</td>
                  <td>
                    <span className={`status-badge ${stockStatus.class}`}>{stockStatus.label}</span>
                  </td>
                  <td>
                    <div className="actions">
                      <button
                        className="btn-icon edit"
                        onClick={() => {
                          setSelectedProduct(product)
                          setShowEditModal(true)
                        }}
                      >
                        <Edit size={16} />
                      </button>
                      <button className="btn-icon delete" onClick={() => handleDeleteProduct(product.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <ProductModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={(productData) => {
          setProducts([...products, productData])
        }}
      />

      <ProductModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false)
          setSelectedProduct(null)
        }}
        product={selectedProduct}
        onSave={(productData) => {
          setProducts(products.map((p) => (p.id === productData.id ? productData : p)))
        }}
      />
    </div>
  )
}

export default ProductManagement
