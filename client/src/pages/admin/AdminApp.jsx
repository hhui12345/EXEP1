"use client"

import { useState } from "react"
import AdminLayout from "../../layout/AdminLayout"
import Dashboard from "./Dashboard"
import ProductManagement from "./ProductManagement"
import OrderManagement from "./OrderManagement"
import CustomerManagement from "./CustomerManagement"
import Analytics from "./Analytics"
import RevenueReport from "./RevenueReport"
import Settings from "./Settings"
import { useToast } from "../../components/toast/Toast"

const AdminApp = () => {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const { addToast, ToastContainer } = useToast()

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "products":
        return <ProductManagement />
      case "orders":
        return <OrderManagement />
      case "customers":
        return <CustomerManagement />
      case "analytics":
        return <Analytics />
      case "revenue":
        return <RevenueReport />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <>
      <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderCurrentPage()}
      </AdminLayout>
      <ToastContainer />
    </>
  )
}

export default AdminApp
