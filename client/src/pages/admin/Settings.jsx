"use client"

import { useState } from "react"
import { Save, Upload, Bell, Shield, Palette, Globe, Database, Mail, Download } from "lucide-react"
import "./Settings.css"

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [settings, setSettings] = useState({
    general: {
      siteName: "Cửa hàng điện tử ABC",
      siteDescription: "Chuyên cung cấp các sản phẩm công nghệ chất lượng cao",
      currency: "VND",
      timezone: "Asia/Ho_Chi_Minh",
      language: "vi",
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      lowStockAlert: true,
      newOrderAlert: true,
      dailyReport: true,
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5,
    },
    appearance: {
      theme: "light",
      primaryColor: "#007bff",
      secondaryColor: "#6c757d",
      logoUrl: "",
    },
  })

  const handleSettingChange = (category, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }))
  }

  const saveSettings = () => {
    // Mock save function
    console.log("Saving settings:", settings)
    alert("Cài đặt đã được lưu thành công!")
  }

  const tabs = [
    { id: "general", label: "Tổng quan", icon: Globe },
    { id: "notifications", label: "Thông báo", icon: Bell },
    { id: "security", label: "Bảo mật", icon: Shield },
    { id: "appearance", label: "Giao diện", icon: Palette },
    { id: "backup", label: "Sao lưu", icon: Database },
  ]

  return (
    <div className="settings">
      <div className="page-header gradient-bg">
        <div className="header-content">
          <div>
            <h1>Cài đặt hệ thống</h1>
            <p>Quản lý cấu hình và tùy chỉnh hệ thống</p>
          </div>
          <button className="btn btn-primary" onClick={saveSettings}>
            <Save size={20} />
            Lưu cài đặt
          </button>
        </div>
      </div>

      <div className="settings-container">
        {/* Sidebar */}
        <div className="settings-sidebar">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                className={`settings-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent size={20} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="settings-content">
          {activeTab === "general" && (
            <div className="settings-section">
              <h3>Cài đặt tổng quan</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Tên cửa hàng</label>
                  <input
                    type="text"
                    value={settings.general.siteName}
                    onChange={(e) => handleSettingChange("general", "siteName", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả</label>
                  <textarea
                    value={settings.general.siteDescription}
                    onChange={(e) => handleSettingChange("general", "siteDescription", e.target.value)}
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label>Đơn vị tiền tệ</label>
                  <select
                    value={settings.general.currency}
                    onChange={(e) => handleSettingChange("general", "currency", e.target.value)}
                  >
                    <option value="VND">VND - Việt Nam Đồng</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Múi giờ</label>
                  <select
                    value={settings.general.timezone}
                    onChange={(e) => handleSettingChange("general", "timezone", e.target.value)}
                  >
                    <option value="Asia/Ho_Chi_Minh">Việt Nam (GMT+7)</option>
                    <option value="Asia/Bangkok">Bangkok (GMT+7)</option>
                    <option value="Asia/Singapore">Singapore (GMT+8)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Ngôn ngữ</label>
                  <select
                    value={settings.general.language}
                    onChange={(e) => handleSettingChange("general", "language", e.target.value)}
                  >
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings-section">
              <h3>Cài đặt thông báo</h3>
              <div className="toggle-grid">
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Thông báo email</h4>
                    <p>Nhận thông báo qua email</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.emailNotifications}
                      onChange={(e) => handleSettingChange("notifications", "emailNotifications", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Thông báo SMS</h4>
                    <p>Nhận thông báo qua tin nhắn</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.smsNotifications}
                      onChange={(e) => handleSettingChange("notifications", "smsNotifications", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Thông báo đẩy</h4>
                    <p>Nhận thông báo trên trình duyệt</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.pushNotifications}
                      onChange={(e) => handleSettingChange("notifications", "pushNotifications", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Cảnh báo hết hàng</h4>
                    <p>Thông báo khi sản phẩm sắp hết</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.lowStockAlert}
                      onChange={(e) => handleSettingChange("notifications", "lowStockAlert", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Đơn hàng mới</h4>
                    <p>Thông báo khi có đơn hàng mới</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.newOrderAlert}
                      onChange={(e) => handleSettingChange("notifications", "newOrderAlert", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Báo cáo hàng ngày</h4>
                    <p>Nhận báo cáo tổng kết hàng ngày</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.notifications.dailyReport}
                      onChange={(e) => handleSettingChange("notifications", "dailyReport", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="settings-section">
              <h3>Cài đặt bảo mật</h3>
              <div className="security-grid">
                <div className="security-item">
                  <div className="security-info">
                    <h4>Xác thực 2 bước</h4>
                    <p>Tăng cường bảo mật với xác thực 2 bước</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactorAuth}
                      onChange={(e) => handleSettingChange("security", "twoFactorAuth", e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="form-group">
                  <label>Thời gian hết hạn phiên (phút)</label>
                  <input
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => handleSettingChange("security", "sessionTimeout", Number.parseInt(e.target.value))}
                    min="5"
                    max="120"
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian hết hạn mật khẩu (ngày)</label>
                  <input
                    type="number"
                    value={settings.security.passwordExpiry}
                    onChange={(e) => handleSettingChange("security", "passwordExpiry", Number.parseInt(e.target.value))}
                    min="30"
                    max="365"
                  />
                </div>
                <div className="form-group">
                  <label>Số lần đăng nhập sai tối đa</label>
                  <input
                    type="number"
                    value={settings.security.loginAttempts}
                    onChange={(e) => handleSettingChange("security", "loginAttempts", Number.parseInt(e.target.value))}
                    min="3"
                    max="10"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="settings-section">
              <h3>Cài đặt giao diện</h3>
              <div className="appearance-grid">
                <div className="form-group">
                  <label>Chủ đề</label>
                  <select
                    value={settings.appearance.theme}
                    onChange={(e) => handleSettingChange("appearance", "theme", e.target.value)}
                  >
                    <option value="light">Sáng</option>
                    <option value="dark">Tối</option>
                    <option value="auto">Tự động</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Màu chính</label>
                  <input
                    type="color"
                    value={settings.appearance.primaryColor}
                    onChange={(e) => handleSettingChange("appearance", "primaryColor", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Màu phụ</label>
                  <input
                    type="color"
                    value={settings.appearance.secondaryColor}
                    onChange={(e) => handleSettingChange("appearance", "secondaryColor", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Logo</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        // Mock file upload
                        if (e.target.files[0]) {
                          handleSettingChange("appearance", "logoUrl", URL.createObjectURL(e.target.files[0]))
                        }
                      }}
                    />
                    <Upload size={20} />
                    <span>Chọn file logo</span>
                  </div>
                  {settings.appearance.logoUrl && (
                    <div className="logo-preview">
                      <img src={settings.appearance.logoUrl || "/placeholder.svg"} alt="Logo preview" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "backup" && (
            <div className="settings-section">
              <h3>Sao lưu và khôi phục</h3>
              <div className="backup-grid">
                <div className="backup-card">
                  <div className="backup-icon">
                    <Database size={32} />
                  </div>
                  <div className="backup-content">
                    <h4>Sao lưu dữ liệu</h4>
                    <p>Tạo bản sao lưu toàn bộ dữ liệu hệ thống</p>
                    <button className="btn btn-primary">
                      <Download size={16} />
                      Tạo bản sao lưu
                    </button>
                  </div>
                </div>
                <div className="backup-card">
                  <div className="backup-icon">
                    <Upload size={32} />
                  </div>
                  <div className="backup-content">
                    <h4>Khôi phục dữ liệu</h4>
                    <p>Khôi phục dữ liệu từ file sao lưu</p>
                    <button className="btn btn-secondary">
                      <Upload size={16} />
                      Chọn file khôi phục
                    </button>
                  </div>
                </div>
                <div className="backup-card">
                  <div className="backup-icon">
                    <Mail size={32} />
                  </div>
                  <div className="backup-content">
                    <h4>Sao lưu tự động</h4>
                    <p>Thiết lập sao lưu tự động hàng ngày</p>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="backup-history">
                <h4>Lịch sử sao lưu</h4>
                <div className="backup-list">
                  <div className="backup-item">
                    <div className="backup-info">
                      <span className="backup-name">backup_2024_01_15.sql</span>
                      <span className="backup-date">15/01/2024 - 10:30</span>
                    </div>
                    <div className="backup-actions">
                      <button className="btn-small btn-primary">Tải xuống</button>
                      <button className="btn-small btn-danger">Xóa</button>
                    </div>
                  </div>
                  <div className="backup-item">
                    <div className="backup-info">
                      <span className="backup-name">backup_2024_01_14.sql</span>
                      <span className="backup-date">14/01/2024 - 10:30</span>
                    </div>
                    <div className="backup-actions">
                      <button className="btn-small btn-primary">Tải xuống</button>
                      <button className="btn-small btn-danger">Xóa</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
