"use client"

import { useState, useEffect } from "react"
import { Search, Eye, Package, Truck, CheckCircle, XCircle, Clock } from "lucide-react"
import "./OrderManagement.css"

const OrderManagement = () => {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showOrderDetail, setShowOrderDetail] = useState(false)

  const orderStatuses = [
    { value: "", label: "Tất cả trạng thái" },
    { value: "pending", label: "Chờ xử lý" },
    { value: "confirmed", label: "Đã xác nhận" },
    { value: "shipping", label: "Đang giao" },
    { value: "delivered", label: "Đã giao" },
    { value: "cancelled", label: "Đã hủy" },
  ]

  useEffect(() => {
    // Mock data
    const mockOrders = [
      {
        id: "ORD001",
        customerName: "Nguyễn Văn A",
        customerPhone: "0123456789",
        customerEmail: "nguyenvana@email.com",
        items: [
          { name: "iPhone 15 Pro", quantity: 1, price: 29990000 },
          { name: "AirPods Pro", quantity: 1, price: 6990000 },
        ],
        total: 36980000,
        status: "pending",
        orderDate: "2024-01-15T10:30:00",
        address: "123 Đường ABC, Quận 1, TP.HCM",
      },
      {
        id: "ORD002",
        customerName: "Trần Thị B",
        customerPhone: "0987654321",
        customerEmail: "tranthib@email.com",
        items: [{ name: "MacBook Pro M3", quantity: 1, price: 45990000 }],
        total: 45990000,
        status: "confirmed",
        orderDate: "2024-01-14T14:20:00",
        address: "456 Đường XYZ, Quận 3, TP.HCM",
      },
      {
        id: "ORD003",
        customerName: "Lê Văn C",
        customerPhone: "0369852147",
        customerEmail: "levanc@email.com",
        items: [{ name: "Samsung Galaxy S24", quantity: 2, price: 22990000 }],
        total: 45980000,
        status: "shipping",
        orderDate: "2024-01-13T09:15:00",
        address: "789 Đường DEF, Quận 7, TP.HCM",
      },
    ]
    setOrders(mockOrders)
    setFilteredOrders(mockOrders)
  }, [])

  useEffect(() => {
    let filtered = orders.filter(
      (order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerPhone.includes(searchTerm),
    )

    if (statusFilter) {
      filtered = filtered.filter((order) => order.status === statusFilter)
    }

    setFilteredOrders(filtered)
  }, [orders, searchTerm, statusFilter])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("vi-VN")
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock size={16} />
      case "confirmed":
        return <CheckCircle size={16} />
      case "shipping":
        return <Truck size={16} />
      case "delivered":
        return <Package size={16} />
      case "cancelled":
        return <XCircle size={16} />
      default:
        return <Clock size={16} />
    }
  }

  const getStatusLabel = (status) => {
    const statusObj = orderStatuses.find((s) => s.value === status)
    return statusObj ? statusObj.label : status
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const OrderDetailModal = ({ order, isOpen, onClose }) => {
    if (!isOpen || !order) return null

    return (
      <div className="modal-overlay">
        <div className="modal-content large">
          <div className="modal-header">
            <h2>Chi tiết đơn hàng {order.id}</h2>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="order-detail">
            <div className="detail-section">
              <h3>Thông tin khách hàng</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Tên khách hàng:</label>
                  <span>{order.customerName}</span>
                </div>
                <div className="info-item">
                  <label>Số điện thoại:</label>
                  <span>{order.customerPhone}</span>
                </div>
                <div className="info-item">
                  <label>Email:</label>
                  <span>{order.customerEmail}</span>
                </div>
                <div className="info-item">
                  <label>Địa chỉ:</label>
                  <span>{order.address}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Sản phẩm đặt hàng</h3>
              <table className="order-items-table">
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{formatCurrency(item.price)}</td>
                      <td>{formatCurrency(item.price * item.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <strong>Tổng cộng:</strong>
                    </td>
                    <td>
                      <strong>{formatCurrency(order.total)}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="detail-section">
              <h3>Cập nhật trạng thái</h3>
              <div className="status-update">
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="status-select"
                >
                  {orderStatuses.slice(1).map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
                <button className="btn btn-primary">Cập nhật</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="order-management">
      <div className="page-header">
        <div>
          <h1>Quản lý đơn hàng</h1>
          <p>Theo dõi và xử lý đơn hàng</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <Clock size={24} />
          <div>
            <span className="stat-number">{orders.filter((o) => o.status === "pending").length}</span>
            <span className="stat-label">Chờ xử lý</span>
          </div>
        </div>
        <div className="stat-item success">
          <CheckCircle size={24} />
          <div>
            <span className="stat-number">{orders.filter((o) => o.status === "confirmed").length}</span>
            <span className="stat-label">Đã xác nhận</span>
          </div>
        </div>
        <div className="stat-item warning">
          <Truck size={24} />
          <div>
            <span className="stat-number">{orders.filter((o) => o.status === "shipping").length}</span>
            <span className="stat-label">Đang giao</span>
          </div>
        </div>
        <div className="stat-item info">
          <Package size={24} />
          <div>
            <span className="stat-number">{orders.filter((o) => o.status === "delivered").length}</span>
            <span className="stat-label">Đã giao</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm đơn hàng, khách hàng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="status-filter">
          {orderStatuses.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      {/* Orders Table */}
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Khách hàng</th>
              <th>Ngày đặt</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>
                  <div className="customer-info">
                    <div className="customer-name">{order.customerName}</div>
                    <div className="customer-phone">{order.customerPhone}</div>
                  </div>
                </td>
                <td>{formatDate(order.orderDate)}</td>
                <td className="price">{formatCurrency(order.total)}</td>
                <td>
                  <span className={`status-badge ${order.status}`}>
                    {getStatusIcon(order.status)}
                    {getStatusLabel(order.status)}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-icon view"
                    onClick={() => {
                      setSelectedOrder(order)
                      setShowOrderDetail(true)
                    }}
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Detail Modal */}
      <OrderDetailModal
        order={selectedOrder}
        isOpen={showOrderDetail}
        onClose={() => {
          setShowOrderDetail(false)
          setSelectedOrder(null)
        }}
      />
    </div>
  )
}

export default OrderManagement
