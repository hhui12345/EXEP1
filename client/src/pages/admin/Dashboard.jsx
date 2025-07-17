"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, DollarSign, Package, ShoppingCart, Users, Eye, AlertTriangle } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import "./Dashboard.css"

const Dashboard = () => {
  const [stats, setStats] = useState({})
  const [revenueData, setRevenueData] = useState([])
  const [productData, setProductData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [timePeriod, setTimePeriod] = useState("today")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    // Mock data dựa trên time period
    const generateDataByPeriod = () => {
      if (timePeriod === "today") {
        setStats({
          totalRevenue: 45000000,
          revenueGrowth: 12.5,
          totalOrders: 127,
          ordersGrowth: 8.3,
          totalProducts: 89,
          productsGrowth: -2.1,
          totalCustomers: 34,
          customersGrowth: 15.2,
          lowStockProducts: 23,
          pendingOrders: 45,
        })
      } else if (timePeriod === "week") {
        setStats({
          totalRevenue: 315000000,
          revenueGrowth: 18.7,
          totalOrders: 892,
          ordersGrowth: 12.4,
          totalProducts: 623,
          productsGrowth: 5.8,
          totalCustomers: 238,
          customersGrowth: 22.1,
          lowStockProducts: 23,
          pendingOrders: 45,
        })
      } else if (timePeriod === "month") {
        setStats({
          totalRevenue: 1350000000,
          revenueGrowth: 15.3,
          totalOrders: 3784,
          ordersGrowth: 9.7,
          totalProducts: 2456,
          productsGrowth: 3.2,
          totalCustomers: 1024,
          customersGrowth: 18.9,
          lowStockProducts: 23,
          pendingOrders: 45,
        })
      } else if (timePeriod === "quarter") {
        setStats({
          totalRevenue: 4050000000,
          revenueGrowth: 21.8,
          totalOrders: 11352,
          ordersGrowth: 14.6,
          totalProducts: 7368,
          productsGrowth: 8.4,
          totalCustomers: 3072,
          customersGrowth: 25.7,
          lowStockProducts: 23,
          pendingOrders: 45,
        })
      }

      // Cập nhật dữ liệu biểu đồ theo thời gian
      if (timePeriod === "today") {
        setRevenueData([
          { time: "6h", revenue: 2000000, orders: 8 },
          { time: "9h", revenue: 5500000, orders: 18 },
          { time: "12h", revenue: 12000000, orders: 35 },
          { time: "15h", revenue: 18500000, orders: 52 },
          { time: "18h", revenue: 28000000, orders: 78 },
          { time: "21h", revenue: 38000000, orders: 105 },
          { time: "24h", revenue: 45000000, orders: 127 },
        ])
      } else if (timePeriod === "week") {
        setRevenueData([
          { time: "T2", revenue: 35000000, orders: 98 },
          { time: "T3", revenue: 42000000, orders: 115 },
          { time: "T4", revenue: 48000000, orders: 132 },
          { time: "T5", revenue: 55000000, orders: 148 },
          { time: "T6", revenue: 62000000, orders: 165 },
          { time: "T7", revenue: 58000000, orders: 142 },
          { time: "CN", revenue: 45000000, orders: 92 },
        ])
      } else {
        setRevenueData([
          { time: "T1", revenue: 180000000, orders: 1200 },
          { time: "T2", revenue: 195000000, orders: 1350 },
          { time: "T3", revenue: 210000000, orders: 1500 },
          { time: "T4", revenue: 225000000, orders: 1650 },
          { time: "T5", revenue: 240000000, orders: 1800 },
          { time: "T6", revenue: 255000000, orders: 1950 },
        ])
      }
    }

    // Simulate loading delay
    setTimeout(() => {
      generateDataByPeriod()
      setIsLoading(false)
    }, 500)

    // Các dữ liệu khác không thay đổi theo thời gian
    setProductData([
      { name: "iPhone", sold: 120, revenue: 3000000000 },
      { name: "Samsung", sold: 98, revenue: 2200000000 },
      { name: "MacBook", sold: 45, revenue: 2025000000 },
      { name: "iPad", sold: 67, revenue: 1340000000 },
      { name: "AirPods", sold: 234, revenue: 702000000 },
    ])

    setCategoryData([
      { name: "Điện thoại", value: 45, color: "#0088FE" },
      { name: "Laptop", value: 25, color: "#00C49F" },
      { name: "Tablet", value: 15, color: "#FFBB28" },
      { name: "Phụ kiện", value: 15, color: "#FF8042" },
    ])
  }, [timePeriod])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat("vi-VN").format(num)
  }

  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value)
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate refresh delay
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const getTimePeriodLabel = () => {
    switch (timePeriod) {
      case "today":
        return "hôm nay"
      case "week":
        return "tuần này"
      case "month":
        return "tháng này"
      case "quarter":
        return "quý này"
      default:
        return "hôm nay"
    }
  }

  const getComparisonLabel = () => {
    switch (timePeriod) {
      case "today":
        return "so với hôm qua"
      case "week":
        return "so với tuần trước"
      case "month":
        return "so với tháng trước"
      case "quarter":
        return "so với quý trước"
      default:
        return "so với hôm qua"
    }
  }

  const StatCard = ({ title, value, growth, icon: Icon, color }) => (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon ${color}`}>
          <Icon size={24} />
        </div>
        <div className={`growth ${growth >= 0 ? "positive" : "negative"}`}>
          {growth >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {Math.abs(growth)}%
        </div>
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  )

  return (
    <div className="dashboard">
      {/* Business Overview Header */}
      <div className="business-overview">
        <div className="overview-header">
          <div className="header-content">
            <h1>Tổng quan hoạt động kinh doanh</h1>
            <p>Theo dõi hiệu suất và xu hướng phát triển của doanh nghiệp</p>
          </div>
          <div className="overview-actions">
            <div className="time-period">
              <select value={timePeriod} onChange={handleTimePeriodChange}>
                <option value="today">Hôm nay</option>
                <option value="week">7 ngày qua</option>
                <option value="month">30 ngày qua</option>
                <option value="quarter">Quý này</option>
              </select>
            </div>
            <button className="refresh-btn" onClick={handleRefresh} disabled={isLoading}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={isLoading ? "rotating" : ""}
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              {isLoading ? "Đang tải..." : "Làm mới"}
            </button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="kpi-section">
          <div className="kpi-grid">
            <div className="kpi-card primary">
              <div className="kpi-icon">
                <DollarSign size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-label">Doanh thu {getTimePeriodLabel()}</div>
                <div className="kpi-value">{formatCurrency(stats.totalRevenue || 0)}</div>
                <div className={`kpi-change ${stats.revenueGrowth >= 0 ? "positive" : "negative"}`}>
                  {stats.revenueGrowth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <span>
                    +{Math.abs(stats.revenueGrowth || 0)}% {getComparisonLabel()}
                  </span>
                </div>
              </div>
            </div>

            <div className="kpi-card success">
              <div className="kpi-icon">
                <ShoppingCart size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-label">Đơn hàng {getTimePeriodLabel()}</div>
                <div className="kpi-value">{formatNumber(stats.totalOrders || 0)}</div>
                <div className={`kpi-change ${stats.ordersGrowth >= 0 ? "positive" : "negative"}`}>
                  {stats.ordersGrowth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <span>
                    +{Math.abs(stats.ordersGrowth || 0)}% {getComparisonLabel()}
                  </span>
                </div>
              </div>
            </div>

            <div className="kpi-card warning">
              <div className="kpi-icon">
                <Users size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-label">Khách hàng {timePeriod === "today" ? "mới" : ""}</div>
                <div className="kpi-value">{formatNumber(stats.totalCustomers || 0)}</div>
                <div className={`kpi-change ${stats.customersGrowth >= 0 ? "positive" : "negative"}`}>
                  {stats.customersGrowth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <span>
                    +{Math.abs(stats.customersGrowth || 0)}% {getComparisonLabel()}
                  </span>
                </div>
              </div>
            </div>

            <div className="kpi-card info">
              <div className="kpi-icon">
                <Package size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-label">Sản phẩm bán {timePeriod === "today" ? "chạy" : ""}</div>
                <div className="kpi-value">{formatNumber(stats.totalProducts || 0)}</div>
                <div className={`kpi-change ${stats.productsGrowth >= 0 ? "positive" : "negative"}`}>
                  {stats.productsGrowth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  <span>
                    {stats.productsGrowth >= 0 ? "+" : ""}
                    {stats.productsGrowth || 0}% {getComparisonLabel()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Health Metrics */}
        <div className="health-metrics">
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-title">Tỷ lệ chuyển đổi</span>
                <span className="metric-value">24.8%</span>
              </div>
              <div className="metric-bar">
                <div className="metric-progress" style={{ width: "74.8%" }}></div>
              </div>
              <span className="metric-subtitle">Từ lượt xem thành đơn hàng</span>
            </div>

            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-title">Giá trị đơn hàng TB</span>
                <span className="metric-value">{formatCurrency(1850000)}</span>
              </div>
              <div className="metric-bar">
                <div className="metric-progress" style={{ width: "68.5%" }}></div>
              </div>
              <span className="metric-subtitle">Trung bình mỗi giao dịch</span>
            </div>

            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-title">Khách hàng quay lại</span>
                <span className="metric-value">68.5%</span>
              </div>
              <div className="metric-bar">
                <div className="metric-progress" style={{ width: "85.5%" }}></div>
              </div>
              <span className="metric-subtitle">Tỷ lệ mua lại trong 30 ngày</span>
            </div>

            <div className="metric-item">
              <div className="metric-header">
                <span className="metric-title">Đánh giá trung bình</span>
                <span className="metric-value">4.7/5</span>
              </div>
              <div className="metric-bar">
                <div className="metric-progress" style={{ width: "94%" }}></div>
              </div>
              <span className="metric-subtitle">Từ 1,247 đánh giá khách hàng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards
      <div className="stats-grid">
        <StatCard
          title="Tổng doanh thu"
          value={formatCurrency(stats.totalRevenue)}
          growth={stats.revenueGrowth}
          icon={DollarSign}
          color="blue"
        />
        <StatCard
          title="Đơn hàng"
          value={formatNumber(stats.totalOrders)}
          growth={stats.ordersGrowth}
          icon={ShoppingCart}
          color="green"
        />
        <StatCard
          title="Sản phẩm"
          value={formatNumber(stats.totalProducts)}
          growth={stats.productsGrowth}
          icon={Package}
          color="purple"
        />
        <StatCard
          title="Khách hàng"
          value={formatNumber(stats.totalCustomers)}
          growth={stats.customersGrowth}
          icon={Users}
          color="orange"
        />
      </div> */}

      {/* Charts Section */}
      <div className="charts-section">
        {/* Revenue Chart */}
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Doanh thu theo tháng</h3>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color blue"></span>
                Doanh thu
              </span>
              <span className="legend-item">
                <span className="legend-color green"></span>
                Đơn hàng
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" tickFormatter={(value) => `${value / 1_000_000}`}/>
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(value, name) => [
                  name === "revenue" ? formatCurrency(value) : formatNumber(value),
                  name === "revenue" ? "Doanh thu" : "Đơn hàng",
                ]}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#0088FE"
                strokeWidth={3}
                dot={{ fill: "#0088FE", strokeWidth: 2, r: 4 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#00C49F"
                strokeWidth={3}
                dot={{ fill: "#00C49F", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Phân bố danh mục</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product Performance */}
      <div className="chart-card large">
        <div className="chart-header">
          <h3>Hiệu suất sản phẩm</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value / 1_000_000}`}/>
            <Tooltip
              formatter={(value, name) => [
                name === "revenue" ? formatCurrency(value) : formatNumber(value),
                name === "revenue" ? "Doanh thu" : "Đã bán",
              ]}
            />
            <Bar yAxisId="left" dataKey="sold" fill="#0088FE" name="sold" />
            <Bar yAxisId="right" dataKey="revenue" fill="#00C49F" name="revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions & Alerts */}
      <div className="bottom-section">
        <div className="quick-actions">
          <h3>Thao tác nhanh</h3>
          <div className="action-buttons">
            <button className="action-btn primary">
              <Package size={20} />
              Thêm sản phẩm
            </button>
            <button className="action-btn secondary">
              <ShoppingCart size={20} />
              Xem đơn hàng
            </button>
            <button className="action-btn tertiary">
              <Users size={20} />
              Quản lý khách hàng
            </button>
          </div>
        </div>

        <div className="alerts">
          <h3>Cảnh báo</h3>
          <div className="alert-list">
            <div className="alert-item warning">
              <AlertTriangle size={20} />
              <div>
                <p>
                  <strong>{stats.lowStockProducts} sản phẩm</strong> sắp hết hàng
                </p>
                <span>Cần nhập thêm hàng</span>
              </div>
            </div>
            <div className="alert-item info">
              <Eye size={20} />
              <div>
                <p>
                  <strong>{stats.pendingOrders} đơn hàng</strong> chờ xử lý
                </p>
                <span>Cần xác nhận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
