"use client"

import { useState, useEffect } from "react"
import { CheckCircle, AlertCircle, XCircle, Info, X } from "lucide-react"
import "./Toast.css"

const Toast = ({ message, type = "info", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Wait for animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} />
      case "error":
        return <XCircle size={20} />
      case "warning":
        return <AlertCircle size={20} />
      default:
        return <Info size={20} />
    }
  }

  return (
    <div className={`toast toast-${type} ${isVisible ? "toast-show" : "toast-hide"}`}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={() => setIsVisible(false)}>
        <X size={16} />
      </button>
    </div>
  )
}

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now()
    const toast = { id, message, type, duration }
    setToasts((prev) => [...prev, toast])
  }

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const ToastContainer = () => (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )

  return { addToast, ToastContainer }
}

export default Toast
