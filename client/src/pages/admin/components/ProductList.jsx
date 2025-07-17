"use client"

const ProductList = ({ products, onEdit, onDelete }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const getStatusBadge = (status) => {
    return <span className={`status-badge ${status}`}>{status === "active" ? "Hoạt động" : "Ngừng bán"}</span>
  }

  const getStockStatus = (stock) => {
    if (stock === 0) return <span className="stock-status out-of-stock">Hết hàng</span>
    if (stock < 10) return <span className="stock-status low-stock">Sắp hết</span>
    return <span className="stock-status in-stock">Còn hàng</span>
  }

  return (
    <div className="product-list">
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                </td>
                <td className="product-name">{product.name}</td>
                <td>{product.category}</td>
                <td className="price">{formatPrice(product.price)}</td>
                <td>
                  <div className="stock-info">
                    <span className="stock-number">{product.stock}</span>
                    {getStockStatus(product.stock)}
                  </div>
                </td>
                <td>{getStatusBadge(product.status)}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn btn-edit" onClick={() => onEdit(product)}>
                      Sửa
                    </button>
                    <button className="btn btn-delete" onClick={() => onDelete(product.id)}>
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length === 0 && (
        <div className="empty-state">
          <p>Không có sản phẩm nào được tìm thấy</p>
        </div>
      )}
    </div>
  )
}

export default ProductList
