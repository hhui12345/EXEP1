"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Edit, Trash2, Users, Mail, Phone, MapPin, Filter, Download } from "lucide-react"
import "./CustomerManagement.css"

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([])
  const [filteredCustomers, setFilteredCustomers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  useEffect(() => {
    // Mock data
    const mockCustomers = [
      {
        id: 1,
        name: "Nguyễn Văn A",
        email: "nguyenvana@email.com",
        phone: "0123456789",
        address: "123 Đường ABC, Quận 1, TP.HCM",
        totalOrders: 15,
        totalSpent: 45000000,
        status: "active",
        joinDate: "2023-01-15",
        lastOrder: "2024-01-10",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Trần Thị B",
        email: "tranthib@email.com",
        phone: "0987654321",
        address: "456 Đường XYZ, Quận 3, TP.HCM",
        totalOrders: 8,
        totalSpent: 22000000,
        status: "active",
        joinDate: "2023-03-20",
        lastOrder: "2024-01-08",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Lê Văn C",
        email: "levanc@email.com",
        phone: "0369852147",
        address: "789 Đường DEF, Quận 7, TP.HCM",
        totalOrders: 3,
        totalSpent: 8500000,
        status: "inactive",
        joinDate: "2023-08-10",
        lastOrder: "2023-12-15",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    ]
    setCustomers(mockCustomers)
    setFilteredCustomers(mockCustomers)
  }, [])

  useEffect(() => {
    let filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm),
    )

    if (statusFilter) {
      filtered = filtered.filter((customer) => customer.status === statusFilter)
    }

    setFilteredCustomers(filtered)
    setCurrentPage(1)
  }, [customers, searchTerm, statusFilter])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN")
  }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)

  const CustomerModal = ({ isOpen, onClose, customer, onSave }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      status: "active",
    })

    useEffect(() => {
      if (customer) {
        setFormData(customer)
      } else {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          status: "active",
        })
      }
    }, [customer])

    const handleSubmit = (e) => {
      e.preventDefault()
      const customerData = {
        ...formData,
        id: customer ? customer.id : Date.now(),
        totalOrders: customer ? customer.totalOrders : 0,
        totalSpent: customer ? customer.totalSpent : 0,
        joinDate: customer ? customer.joinDate : new Date().toISOString().split("T")[0],
        lastOrder: customer ? customer.lastOrder : null,
        avatar: "/placeholder.svg?height=50&width=50",
      }
      onSave(customerData)
      onClose()
    }

    if (!isOpen) return null

    return (
      <div className="modal-overlay">
        <div className="modal-content animate-modal">
          <div className="modal-header">
            <h2>{customer ? "Sửa thông tin khách hàng" : "Thêm khách hàng mới"}</h2>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
          <form onSubmit={handleSubmit} className="customer-form">
            <div className="form-group">
              <label>Tên khách hàng</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label>Trạng thái</label>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                <option value="active">Hoạt động</option>
                <option value="inactive">Không hoạt động</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="button" onClick={onClose} className="btn btn-cancel">
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                {customer ? "Cập nhật" : "Thêm mới"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  const exportToExcel = () => {
    // Mock export function
    const csvContent = [
      ["Tên", "Email", "Điện thoại", "Địa chỉ", "Tổng đơn hàng", "Tổng chi tiêu", "Trạng thái"],
      ...filteredCustomers.map((customer) => [
        customer.name,
        customer.email,
        customer.phone,
        customer.address,
        customer.totalOrders,
        customer.totalSpent,
        customer.status === "active" ? "Hoạt động" : "Không hoạt động",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", "customers.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="customer-management">
      <div className="page-header gradient-bg">
        <div className="header-content">
          <div>
            <h1>Quản lý khách hàng</h1>
            <p>Quản lý thông tin và theo dõi hoạt động khách hàng</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary" onClick={exportToExcel}>
              <Download size={20} />
              Xuất Excel
            </button>
            <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
              <Plus size={20} />
              Thêm khách hàng
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card gradient-blue">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Tổng khách hàng</h3>
            <p className="stat-number">{customers.length}</p>
          </div>
        </div>
        <div className="stat-card gradient-green">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Khách hàng hoạt động</h3>
            <p className="stat-number">{customers.filter((c) => c.status === "active").length}</p>
          </div>
        </div>
        <div className="stat-card gradient-purple">
          <div className="stat-icon">
            <Mail size={24} />
          </div>
          <div className="stat-content">
            <h3>Tổng đơn hàng</h3>
            <p className="stat-number">{customers.reduce((sum, c) => sum + c.totalOrders, 0)}</p>
          </div>
        </div>
        <div className="stat-card gradient-orange">
          <div className="stat-icon">
            <Phone size={24} />
          </div>
          <div className="stat-content">
            <h3>Tổng doanh thu</h3>
            <p className="stat-number">{formatCurrency(customers.reduce((sum, c) => sum + c.totalSpent, 0))}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm khách hàng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <Filter size={20} />
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Tất cả trạng thái</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Không hoạt động</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div className="table-container modern-table">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Khách hàng</th>
              <th>Liên hệ</th>
              <th>Địa chỉ</th>
              <th>Đơn hàng</th>
              <th>Chi tiêu</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id} className="table-row">
                <td>
                  <div className="customer-info">
                    <img src={customer.avatar || "/placeholder.svg"} alt={customer.name} className="customer-avatar" />
                    <div>
                      <div className="customer-name">{customer.name}</div>
                      <div className="customer-date">Tham gia: {formatDate(customer.joinDate)}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contact-info">
                    <div className="contact-item">
                      <Mail size={14} />
                      {customer.email}
                    </div>
                    <div className="contact-item">
                      <Phone size={14} />
                      {customer.phone}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="address-info">
                    <MapPin size={14} />
                    {customer.address}
                  </div>
                </td>
                <td>
                  <div className="order-stats">
                    <span className="order-count">{customer.totalOrders}</span>
                    <span className="last-order">
                      {customer.lastOrder ? `Cuối: ${formatDate(customer.lastOrder)}` : "Chưa có đơn hàng"}
                    </span>
                  </div>
                </td>
                <td className="price">{formatCurrency(customer.totalSpent)}</td>
                <td>
                  <span className={`status-badge modern ${customer.status}`}>
                    {customer.status === "active" ? "Hoạt động" : "Không hoạt động"}
                  </span>
                </td>
                <td>
                  <div className="actions">
                    <button
                      className="btn-icon edit"
                      onClick={() => {
                        setSelectedCustomer(customer)
                        setShowEditModal(true)
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => {
                        if (window.confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
                          setCustomers(customers.filter((c) => c.id !== customer.id))
                        }
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Trước
        </button>
        <div className="pagination-info">
          Trang {currentPage} / {totalPages} ({filteredCustomers.length} khách hàng)
        </div>
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Sau
        </button>
      </div>

      {/* Modals */}
      <CustomerModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={(customerData) => {
          setCustomers([...customers, customerData])
        }}
      />

      <CustomerModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false)
          setSelectedCustomer(null)
        }}
        customer={selectedCustomer}
        onSave={(customerData) => {
          setCustomers(customers.map((c) => (c.id === customerData.id ? customerData : c)))
        }}
      />
    </div>
  )
}

export default CustomerManagement
