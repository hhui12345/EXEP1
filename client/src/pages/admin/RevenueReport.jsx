"use client"

import { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Calendar, Download, Filter, TrendingUp, DollarSign, ShoppingCart, Target } from "lucide-react"
import "./RevenueReport.css"

const RevenueReport = () => {
  const [dateRange, setDateRange] = useState("thisMonth")
  const [reportType, setReportType] = useState("overview")
  const [revenueData, setRevenueData] = useState([])
  const [categoryRevenue, setCategoryRevenue] = useState([])
  const [monthlyComparison, setMonthlyComparison] = useState([])

  useEffect(() => {
    // Mock data generation
    const generateRevenueData = () => {
      if (dateRange === "thisMonth") {
        setRevenueData([
          { date: "01/01", revenue: 45000000, target: 40000000, orders: 120 },
          { date: "05/01", revenue: 52000000, target: 45000000, orders: 135 },
          { date: "10/01", revenue: 48000000, target: 50000000, orders: 128 },
          { date: "15/01", revenue: 65000000, target: 55000000, orders: 165 },
          { date: "20/01", revenue: 58000000, target: 60000000, orders: 148 },
          { date: "25/01", revenue: 72000000, target: 65000000, orders: 185 },
          { date: "30/01", revenue: 68000000, target: 70000000, orders: 172 },
        ])
      } else if (dateRange === "lastMonth") {
        setRevenueData([
          { date: "01/12", revenue: 42000000, target: 38000000, orders: 115 },
          { date: "05/12", revenue: 48000000, target: 42000000, orders: 125 },
          { date: "10/12", revenue: 45000000, target: 47000000, orders: 118 },
          { date: "15/12", revenue: 62000000, target: 52000000, orders: 155 },
          { date: "20/12", revenue: 55000000, target: 57000000, orders: 138 },
          { date: "25/12", revenue: 78000000, target: 62000000, orders: 195 },
          { date: "30/12", revenue: 85000000, target: 67000000, orders: 210 },
        ])
      } else {
        setRevenueData([
          { date: "T1", revenue: 180000000, target: 170000000, orders: 1200 },
          { date: "T2", revenue: 195000000, target: 180000000, orders: 1350 },
          { date: "T3", revenue: 210000000, target: 200000000, orders: 1500 },
          { date: "T4", revenue: 225000000, target: 220000000, orders: 1650 },
          { date: "T5", revenue: 240000000, target: 235000000, orders: 1800 },
          { date: "T6", revenue: 255000000, target: 250000000, orders: 1950 },
        ])
      }

      setCategoryRevenue([
        { name: "Điện thoại", revenue: 450000000, percentage: 45, color: "#0088FE" },
        { name: "Laptop", revenue: 300000000, percentage: 30, color: "#00C49F" },
        { name: "Tablet", revenue: 150000000, percentage: 15, color: "#FFBB28" },
        { name: "Phụ kiện", revenue: 100000000, percentage: 10, color: "#FF8042" },
      ])

      setMonthlyComparison([
        { month: "T7", thisYear: 220000000, lastYear: 180000000 },
        { month: "T8", thisYear: 235000000, lastYear: 195000000 },
        { month: "T9", thisYear: 248000000, lastYear: 210000000 },
        { month: "T10", thisYear: 265000000, lastYear: 225000000 },
        { month: "T11", thisYear: 280000000, lastYear: 240000000 },
        { month: "T12", thisYear: 295000000, lastYear: 255000000 },
      ])
    }

    generateRevenueData()
  }, [dateRange])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount)
  }

  const calculateGrowth = (current, previous) => {
    return (((current - previous) / previous) * 100).toFixed(1)
  }

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0)
  const totalTarget = revenueData.reduce((sum, item) => sum + item.target, 0)
  const totalOrders = revenueData.reduce((sum, item) => sum + item.orders, 0)
  const achievementRate = ((totalRevenue / totalTarget) * 100).toFixed(1)

  const exportReport = () => {
    // Mock export function
    const reportData = {
      period: dateRange,
      totalRevenue,
      totalTarget,
      achievementRate,
      totalOrders,
      categoryBreakdown: categoryRevenue,
      dailyData: revenueData,
    }

    console.log("Exporting report:", reportData)
    alert("Đang xuất báo cáo doanh thu...")
  }

  return (
    <div className="revenue-report">
      <div className="page-header gradient-bg">
        <div className="header-content">
          <div>
            <h1>Báo cáo doanh thu</h1>
            <p>Phân tích chi tiết doanh thu và hiệu suất kinh doanh</p>
          </div>
          <div className="header-actions">
            <div className="filter-group">
              <Calendar size={20} />
              <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                <option value="thisMonth">Tháng này</option>
                <option value="lastMonth">Tháng trước</option>
                <option value="quarter">Quý này</option>
              </select>
            </div>
            <div className="filter-group">
              <Filter size={20} />
              <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                <option value="overview">Tổng quan</option>
                <option value="detailed">Chi tiết</option>
                <option value="comparison">So sánh</option>
              </select>
            </div>
            <button className="btn btn-primary" onClick={exportReport}>
              <Download size={20} />
              Xuất báo cáo
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card gradient-blue">
          <div className="summary-icon">
            <DollarSign size={32} />
          </div>
          <div className="summary-content">
            <h3>Tổng doanh thu</h3>
            <div className="summary-value">{formatCurrency(totalRevenue)}</div>
            <div className="summary-subtitle">
              Đạt {achievementRate}% mục tiêu ({formatCurrency(totalTarget)})
            </div>
          </div>
          <div className={`summary-trend ${achievementRate >= 100 ? "positive" : "negative"}`}>
            <TrendingUp size={20} />
            {achievementRate}%
          </div>
        </div>

        <div className="summary-card gradient-green">
          <div className="summary-icon">
            <ShoppingCart size={32} />
          </div>
          <div className="summary-content">
            <h3>Tổng đơn hàng</h3>
            <div className="summary-value">{totalOrders.toLocaleString()}</div>
            <div className="summary-subtitle">Trung bình {formatCurrency(totalRevenue / totalOrders)} / đơn</div>
          </div>
          <div className="summary-trend positive">
            <TrendingUp size={20} />
            +8.5%
          </div>
        </div>

        <div className="summary-card gradient-purple">
          <div className="summary-icon">
            <Target size={32} />
          </div>
          <div className="summary-content">
            <h3>Tỷ lệ hoàn thành</h3>
            <div className="summary-value">{achievementRate}%</div>
            <div className="summary-subtitle">So với mục tiêu đề ra</div>
          </div>
          <div className={`summary-trend ${achievementRate >= 100 ? "positive" : "negative"}`}>
            <TrendingUp size={20} />
            {achievementRate >= 100 ? "Vượt mục tiêu" : "Chưa đạt"}
          </div>
        </div>

        <div className="summary-card gradient-orange">
          <div className="summary-icon">
            <DollarSign size={32} />
          </div>
          <div className="summary-content">
            <h3>Tăng trưởng</h3>
            <div className="summary-value">+12.8%</div>
            <div className="summary-subtitle">So với cùng kỳ năm trước</div>
          </div>
          <div className="summary-trend positive">
            <TrendingUp size={20} />
            Tăng trưởng tốt
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Revenue vs Target */}
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Doanh thu so với mục tiêu</h3>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color blue"></span>
                Doanh thu thực tế
              </span>
              <span className="legend-item">
                <span className="legend-color orange"></span>
                Mục tiêu
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                formatter={(value, name) => [formatCurrency(value), name === "revenue" ? "Doanh thu" : "Mục tiêu"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#0088FE"
                strokeWidth={4}
                dot={{ fill: "#0088FE", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "#0088FE", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#FF8042"
                strokeWidth={3}
                strokeDasharray="8 8"
                dot={{ fill: "#FF8042", strokeWidth: 2, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Revenue */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Doanh thu theo danh mục</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={categoryRevenue}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name} ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="revenue"
              >
                {categoryRevenue.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
            </PieChart>
          </ResponsiveContainer>
          <div className="category-details">
            {categoryRevenue.map((category, index) => (
              <div key={index} className="category-item">
                <div className="category-color" style={{ backgroundColor: category.color }}></div>
                <div className="category-info">
                  <span className="category-name">{category.name}</span>
                  <span className="category-revenue">{formatCurrency(category.revenue)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Comparison */}
        <div className="chart-card large">
          <div className="chart-header">
            <h3>So sánh theo tháng (năm nay vs năm trước)</h3>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                formatter={(value, name) => [formatCurrency(value), name === "thisYear" ? "Năm nay" : "Năm trước"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                }}
              />
              <Bar dataKey="lastYear" fill="#E0E0E0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="thisYear" fill="#0088FE" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Analysis */}
      <div className="analysis-section">
        <h3>Phân tích hiệu suất</h3>
        <div className="analysis-grid">
          <div className="analysis-card">
            <h4>Điểm mạnh</h4>
            <ul>
              <li>Doanh thu tăng trưởng ổn định 12.8% so với cùng kỳ</li>
              <li>Danh mục điện thoại dẫn đầu với 45% tổng doanh thu</li>
              <li>Đạt {achievementRate}% mục tiêu đề ra</li>
            </ul>
          </div>
          <div className="analysis-card">
            <h4>Cần cải thiện</h4>
            <ul>
              <li>Danh mục phụ kiện chỉ chiếm 10% doanh thu</li>
              <li>Một số ngày chưa đạt mục tiêu doanh thu</li>
              <li>Cần đa dạng hóa nguồn thu từ các danh mục khác</li>
            </ul>
          </div>
          <div className="analysis-card">
            <h4>Khuyến nghị</h4>
            <ul>
              <li>Tăng cường marketing cho danh mục tablet và phụ kiện</li>
              <li>Tối ưu hóa chiến lược bán hàng vào cuối tháng</li>
              <li>Phát triển các gói combo để tăng giá trị đơn hàng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueReport
