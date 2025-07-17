"use client"

import { useState } from "react"
import { Home, Package, ShoppingCart, Users, BarChart3, Settings, Menu, X, DollarSign } from "lucide-react"
import "./AdminLayout.css"

const AdminLayout = ({ children, currentPage, onPageChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "Quản lý sản phẩm", icon: Package },
    { id: "orders", label: "Đơn hàng", icon: ShoppingCart },
    { id: "customers", label: "Khách hàng", icon: Users },
    { id: "analytics", label: "Thống kê", icon: BarChart3 },
    { id: "revenue", label: "Doanh thu", icon: DollarSign },
    { id: "settings", label: "Cài đặt", icon: Settings },
  ]

  const handleMenuClick = (pageId) => {
    onPageChange(pageId)
    setSidebarOpen(false)
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                onClick={() => handleMenuClick(item.id)}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="top-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <h1>Hệ thống quản lý bán hàng</h1>
        </header>

        <main className="content">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
    </div>
  )
}

export default AdminLayout
