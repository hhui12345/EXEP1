"use client"

import { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, TrendingDown, Calendar, Download } from "lucide-react"
import "./Analytics.css"

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("7days")
  const [revenueData, setRevenueData] = useState([])
  const [productData, setProductData] = useState([])
  const [customerData, setCustomerData] = useState([])
  const [salesData, setSalesData] = useState([])

  useEffect(() => {
    // Mock data based on time range
    const generateData = () => {
      if (timeRange === "7days") {
        setRevenueData([
          { date: "T2", revenue: 12000000, orders: 45, customers: 32 },
          { date: "T3", revenue: 15000000, orders: 52, customers: 38 },
          { date: "T4", revenue: 18000000, orders: 61, customers: 45 },
          { date: "T5", revenue: 22000000, orders: 68, customers: 52 },
          { date: "T6", revenue: 25000000, orders: 75, customers: 58 },
          { date: "T7", revenue: 28000000, orders: 82, customers: 65 },
          { date: "CN", revenue: 20000000, orders: 58, customers: 42 },
        ])
      } else if (timeRange === "30days") {
        setRevenueData([
          { date: "Tuần 1", revenue: 85000000, orders: 320, customers: 245 },
          { date: "Tuần 2", revenue: 92000000, orders: 350, customers: 268 },
          { date: "Tuần 3", revenue: 88000000, orders: 335, customers: 252 },
          { date: "Tuần 4", revenue: 95000000, orders: 365, customers: 285 },
        ])
      } else {
        setRevenueData([
          { date: "T1", revenue: 180000000, orders: 1200, customers: 890 },
          { date: "T2", revenue: 195000000, orders: 1350, customers: 920 },
          { date: "T3", revenue: 210000000, orders: 1500, customers: 1050 },
          { date: "T4", revenue: 225000000, orders: 1650, customers: 1180 },
          { date: "T5", revenue: 240000000, orders: 1800, customers: 1320 },
          { date: "T6", revenue: 255000000, orders: 1950, customers: 1450 },
        ])
      }

      setProductData([
        { name: "iPhone", sales: 120, revenue: 3600000000, growth: 15.2 },
        { name: "Samsung", sales: 98, revenue: 2156000000, growth: 8.7 },
        { name: "MacBook", sales: 45, revenue: 2070000000, growth: -2.1 },
        { name: "iPad", sales: 67, revenue: 1273000000, growth: 12.8 },
        { name: "AirPods", sales: 234, revenue: 1638000000, growth: 25.4 },
      ])

      setCustomerData([
        { segment: "Khách hàng mới", value: 35, color: "#0088FE" },
        { segment: "Khách hàng cũ", value: 45, color: "#00C49F" },
        { segment: "Khách VIP", value: 20, color: "#FFBB28" },
      ])

      setSalesData([
        { hour: "6h", sales: 5 },
        { hour: "8h", sales: 12 },
        { hour: "10h", sales: 25 },
        { hour: "12h", sales: 45 },
        { hour: "14h", sales: 38 },
        { hour: "16h", sales: 52 },
        { hour: "18h", sales: 68 },
        { hour: "20h", sales: 42 },
        { hour: "22h", sales: 18 },
      ])
    }

    generateData()
  }, [timeRange])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const exportReport = () => {
    // Mock export function
    alert("Đang xuất báo cáo...")
  }

  return (
    <div className="analytics">
      <div className="page-header gradient-bg">
        <div className="header-content">
          <div>
            <h1>Thống kê chi tiết</h1>
            <p>Phân tích dữ liệu kinh doanh và xu hướng thị trường</p>
          </div>
          <div className="header-actions">
            <div className="time-range-selector">
              <Calendar size={20} />
              <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="7days">7 ngày qua</option>
                <option value="30days">30 ngày qua</option>
                <option value="6months">6 tháng qua</option>
              </select>
            </div>
            <button className="btn btn-secondary" onClick={exportReport}>
              <Download size={20} />
              Xuất báo cáo
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card gradient-blue">
          <div className="metric-header">
            <h3>Doanh thu trung bình</h3>
            <div className="metric-trend positive">
              <TrendingUp size={16} />
              +12.5%
            </div>
          </div>
          <div className="metric-value">{formatCurrency(22500000)}</div>
          <div className="metric-subtitle">So với kỳ trước</div>
        </div>

        <div className="metric-card gradient-green">
          <div className="metric-header">
            <h3>Tỷ lệ chuyển đổi</h3>
            <div className="metric-trend positive">
              <TrendingUp size={16} />
              +3.2%
            </div>
          </div>
          <div className="metric-value">24.8%</div>
          <div className="metric-subtitle">Từ lượt xem thành đơn hàng</div>
        </div>

        <div className="metric-card gradient-purple">
          <div className="metric-header">
            <h3>Giá trị đơn hàng TB</h3>
            <div className="metric-trend negative">
              <TrendingDown size={16} />
              -1.8%
            </div>
          </div>
          <div className="metric-value">{formatCurrency(1850000)}</div>
          <div className="metric-subtitle">Trên mỗi đơn hàng</div>
        </div>

        <div className="metric-card gradient-orange">
          <div className="metric-header">
            <h3>Khách hàng quay lại</h3>
            <div className="metric-trend positive">
              <TrendingUp size={16} />
              +8.7%
            </div>
          </div>
          <div className="metric-value">68.5%</div>
          <div className="metric-subtitle">Tỷ lệ khách hàng cũ</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        {/* Revenue Trend */}
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Xu hướng doanh thu</h3>
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
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0088FE" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00C49F" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis yAxisId="left" stroke="#666" />
              <YAxis yAxisId="right" orientation="right" stroke="#666" />
              <Tooltip
                formatter={(value, name) => [
                  name === "revenue" ? formatCurrency(value) : value,
                  name === "revenue" ? "Doanh thu" : "Đơn hàng",
                ]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                stroke="#0088FE"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#00C49F"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorOrders)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Segments */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Phân khúc khách hàng</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ segment, percent }) => `${segment} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name, props) => {
                  const segment = props.payload.segment;
                  return [`${value}`, `${segment}`]; // value - label
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Product Performance */}
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Hiệu suất sản phẩm</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis yAxisId="left" stroke="#666" />
              <YAxis yAxisId="right" orientation="right" stroke="#666" />
              <Tooltip
                formatter={(value, name) => [
                  name === "revenue" ? formatCurrency(value) : value,
                  name === "revenue" ? "Doanh thu" : "Đã bán",
                ]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Bar yAxisId="left" dataKey="sales" fill="#0088FE" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="revenue" fill="#00C49F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Hour */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Bán hàng theo giờ</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#FF8042"
                strokeWidth={3}
                dot={{ fill: "#FF8042", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="insights-section">
        <h3>Thông tin chi tiết</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon success">
              <TrendingUp size={24} />
            </div>
            <div className="insight-content">
              <h4>Tăng trưởng mạnh</h4>
              <p>Doanh thu tăng 12.5% so với kỳ trước, chủ yếu từ sản phẩm AirPods và iPhone.</p>
            </div>
          </div>
          <div className="insight-card">
            <div className="insight-icon warning">
              <TrendingDown size={24} />
            </div>
            <div className="insight-content">
              <h4>Cần chú ý</h4>
              <p>Doanh số MacBook giảm 2.1%, cần xem xét chiến lược marketing cho dòng sản phẩm này.</p>
            </div>
          </div>
          <div className="insight-card">
            <div className="insight-icon info">
              <Calendar size={24} />
            </div>
            <div className="insight-content">
              <h4>Thời gian vàng</h4>
              <p>Khung giờ 16h-20h có doanh số cao nhất, nên tập trung quảng cáo trong thời gian này.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
