'use client';
import { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { toast } from 'react-toastify';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 0,
      name: 'LiteMate Classic',
      price: 25000,
      quantity: 1,
      image: '../../../public/assets/product.png',
    },
    {
      id: 1,
      name: 'LiteMate Pro',
      price: 50000,
      quantity: 1,
      image: '../../../public/assets/product.png',
    },
    {
      id: 2,
      name: 'LiteMate Family',
      price: 75000,
      quantity: 1,
      image: '../../../public/assets/product.png',
    },
  ]);
  const [shippingMethod, setShippingMethod] = useState('pickup');
  const [selectedItems, setSelectedItems] = useState([0, 1, 2]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
    note: '',
  });
  const [showPayment, setShowPayment] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');
  const [discountError, setDiscountError] = useState('');

  const increaseQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    setSelectedItems((prev) => prev.filter((id) => id !== itemId));
  };

  const handleInputChange = (field, value) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleItemSelection = (itemId, isSelected) => {
    if (isSelected) {
      setSelectedItems((prev) => [...prev, itemId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== itemId));
    }
  };

  const resetForm = () => {
    setCustomerInfo({
      name: '',
      address: '',
      phone: '',
      note: '',
    });
    setSelectedItems([]);
    setShowPayment(false);
    setShippingMethod('pickup');
    setErrors({
      name: '',
      address: '',
      phone: '',
    });
    setDiscountCode('');
    setAppliedDiscount(0);
    setDiscountMessage('');
    setDiscountError('');
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-+()]+$/;
    return (
      phoneRegex.test(phone) && phone.replace(/[\s\-+()]/g, '').length >= 10
    );
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      address: '',
      phone: '',
    };

    if (!customerInfo.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên của bạn';
    }

    if (!customerInfo.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ của bạn';
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại của bạn';
    } else if (!validatePhone(customerInfo.phone)) {
      newErrors.phone = 'Vui lòng nhập số hợp lệ';
    }

    setErrors(newErrors);
    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== '');
  };

  // Handle discount code application
  const handleApplyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    // Clear previous messages
    setDiscountMessage('');
    setDiscountError('');

    if (!code) {
      setDiscountError('Vui lòng nhập mã giảm giá');
      return;
    }

    // Check discount codes
    if (code === 'EXE101') {
      setAppliedDiscount(100000);
      setDiscountMessage('Áp dụng mã giảm giá thành công! Giảm 100,000 VND');
      setDiscountError('');
    } else if (code === 'LITEMATE13') {
      setAppliedDiscount(200000);
      setDiscountMessage('Áp dụng mã giảm giá thành công! Giảm 200,000 VND');
      setDiscountError('');
    } else {
      setAppliedDiscount(0);
      setDiscountMessage('');
      setDiscountError(`Không tìm thấy mã giảm giá này: ${code}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedItems.length === 0) {
      alert('Vui lòng chọn ít nhất một sản phẩm để đặt hàng');
      return;
    }

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    if (shippingMethod === 'delivery') {
      setShowPayment(true);
    } else {
      toast.success('Đơn hàng của bạn đã được đặt thành công!');
      setTimeout(() => {
        resetForm();
      }, 200);
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = cartItems.find((item) => item.id === itemId);
      return item ? total + item.price * item.quantity : total;
    }, 0);
  };

  const totalPrice = calculateTotal();
  const finalPrice = Math.max(0, totalPrice - appliedDiscount);
  const formattedTotalPrice = new Intl.NumberFormat('vi-VN').format(totalPrice);
  const formattedFinalPrice = new Intl.NumberFormat('vi-VN').format(finalPrice);
  const formattedDiscount = new Intl.NumberFormat('vi-VN').format(
    appliedDiscount
  );

  return (
    <div className='container mx-auto px-4 py-8 max-w-[1400px]'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold text-gray-800'>Giỏ Hàng Của Bạn</h1>
        <a href='/products' className='text-green-600 hover:underline'>
          Tiếp Tục Mua Sắm
        </a>
      </div>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Cart Items */}
        <div className='lg:w-2/3'>
          <div className='grid grid-cols-12 gap-4 font-medium text-gray-600 mb-4 md:grid'>
            <div className='col-span-4'>Tất Cả</div>
            <div className='col-span-2'>Giá</div>
            <div className='col-span-2'>Số Lượng</div>
            <div className='col-span-3'>Tổng tiền</div>
          </div>
          {cartItems.map((item) => {
            const formattedPrice = new Intl.NumberFormat('vi-VN').format(
              item.price
            );
            const itemTotal = selectedItems.includes(item.id)
              ? item.price * item.quantity
              : 0;
            const formattedItemTotal = new Intl.NumberFormat('vi-VN').format(
              itemTotal
            );
            return (
              <div key={item.id} className='border-t border-gray-200 py-4'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-4 items-center'>
                  <div className='md:col-span-4 flex items-center gap-4'>
                    <div className='w-24 h-24 flex-shrink-0'>
                      <img
                        src={item.image || '/placeholder.svg'}
                        alt={item.name}
                        width={96}
                        height={96}
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <div>
                      <h3 className='font-medium'>{item.name}</h3>
                    </div>
                  </div>
                  <div className='md:col-span-2'>
                    <div className='md:hidden font-medium mb-1'>
                      Kích thước & Giá:
                    </div>
                    <p>{formattedPrice} VND</p>
                  </div>
                  <div className='md:col-span-2'>
                    <div className='md:hidden font-medium mb-1'>Số Lượng:</div>
                    <div class='relative flex items-center max-w-[8rem]'>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity <= 1}
                        aria-label='Giảm số lượng'
                        className='flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none cursor-pointer'
                      >
                        <Minus className='h-4 w-4' />
                      </button>

                      <input
                        className='bg-gray-50 border-x-0 border-gray-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder={item.quantity}
                        disabled
                      />

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label='Tăng số lượng'
                        className='flex items-center justify-center bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none cursor-pointer'
                      >
                        <Plus className='h-4 w-4' />
                      </button>
                    </div>
                  </div>

                  <div className='md:col-span-3'>
                    <div className='md:hidden font-medium mb-1'>Tổng:</div>
                    <div className='grid grid-cols-[1fr_auto_auto] items-center gap-3'>
                      <p
                        className={`font-medium ${
                          selectedItems.includes(item.id)
                            ? 'text-black'
                            : 'text-gray-400'
                        }`}
                      >
                        {selectedItems.includes(item.id)
                          ? `${formattedItemTotal} VND`
                          : '0 VND'}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className='text-red-500 hover:text-red-700 p-1 flex items-center justify-center w-6 h-6 cursor-pointer'
                        aria-label='Xóa sản phẩm'
                      >
                        <Trash2 className='h-4 w-4' />
                      </button>
                      <input
                        type='checkbox'
                        checked={selectedItems.includes(item.id)}
                        onChange={(e) =>
                          handleItemSelection(item.id, e.target.checked)
                        }
                        className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 cursor-pointer'
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className='lg:w-1/3'>
          <div className='bg-white border border-gray-200 rounded-lg shadow-sm p-6'>
            {showPayment && shippingMethod === 'delivery' ? (
              <div className='text-center'>
                <h2 className='text-2xl font-bold mb-4'>Thanh Toán QR Code</h2>
                <div className='mb-4'>
                  <img
                    src='/assets/QRpay.jpg'
                    alt='QR Code thanh toán'
                    width={200}
                    height={200}
                    className='mx-auto'
                  />
                </div>
                <p className='text-sm text-gray-600 mb-4'>
                  Quét mã QR để thanh toán {formattedFinalPrice} VND
                </p>
                <button
                  onClick={() => setShowPayment(false)}
                  className='w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-medium transition-colors cursor-pointer'
                >
                  Quay lại
                </button>
              </div>
            ) : (
              <>
                <h2 className='text-2xl text-green-600 font-bold mb-4'>
                  Thông Tin Đặt Hàng
                </h2>
                <h3 className='text-xl font-bold mb-4'>Thông Tin Nhận Hàng</h3>
                <div className='mb-4 p-3 bg-green-50 border border-green-200 rounded-md'>
                  <p className='text-sm text-green-700'>
                    Đã chọn {selectedItems.length} sản phẩm
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Họ và tên
                    </label>
                    <input
                      type='text'
                      id='name'
                      value={customerInfo.name}
                      onChange={(e) =>
                        handleInputChange('name', e.target.value)
                      }
                      className={`block w-full p-2 text-gray-900 border rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='address'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Địa chỉ
                    </label>
                    <input
                      type='text'
                      id='address'
                      value={customerInfo.address}
                      onChange={(e) =>
                        handleInputChange('address', e.target.value)
                      }
                      className={`block w-full p-2 text-gray-900 border rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.address && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div className='mb-3'>
                    <label
                      htmlFor='phone'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Số điện thoại
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      value={customerInfo.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      className={`block w-full p-2 text-gray-900 border rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='note'
                      className='block mb-2 text-sm font-medium text-gray-900'
                    >
                      Ghi chú đơn hàng
                    </label>
                    <textarea
                      id='note'
                      rows={2}
                      value={customerInfo.note}
                      onChange={(e) =>
                        handleInputChange('note', e.target.value)
                      }
                      className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      placeholder='Nhập ghi chú của bạn...'
                    />
                  </div>

                  {/* Discount Code Section */}
                  <div className='space-y-3 border-t border-gray-200 pt-4 mb-4'>
                    <h3 className='text-xl font-bold mb-4'>Mã Giảm Giá</h3>
                    <div className='flex gap-2'>
                      <input
                        type='text'
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        placeholder='Nhập mã giảm giá'
                        className='flex-1 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500'
                      />
                      <button
                        type='button'
                        onClick={handleApplyDiscount}
                        className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors'
                      >
                        Áp Dụng
                      </button>
                    </div>
                    {discountMessage && (
                      <p className='text-sm text-green-600 bg-green-50 p-2 rounded-md border border-green-200'>
                        {discountMessage}
                      </p>
                    )}
                    {discountError && (
                      <p className='text-sm text-red-600 bg-red-50 p-2 rounded-md border border-red-200'>
                        {discountError}
                      </p>
                    )}
                  </div>

                  <div className='space-y-3 pt-4 border-t border-gray-200'>
                    <h3 className='text-xl font-bold mb-4'>
                      Phương Thức Thanh Toán
                    </h3>
                    <div className='mb-6 space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <input
                          type='radio'
                          id='pickup'
                          name='shipping'
                          value='pickup'
                          checked={shippingMethod === 'pickup'}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className='w-4 h-4 text-blue-600'
                        />
                        <label htmlFor='pickup' className='text-sm'>
                          Thanh toán khi nhận hàng (COD)
                        </label>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <input
                          type='radio'
                          id='delivery'
                          name='shipping'
                          value='delivery'
                          checked={shippingMethod === 'delivery'}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className='w-4 h-4 text-blue-600'
                        />
                        <label htmlFor='delivery' className='text-sm'>
                          Thanh toán online
                        </label>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <span>Tổng phụ TTC:</span>
                      <span>{formattedTotalPrice} VND</span>
                    </div>
                    {appliedDiscount > 0 && (
                      <div className='flex justify-between text-green-600'>
                        <span>Giảm giá:</span>
                        <span>-{formattedDiscount} VND</span>
                      </div>
                    )}
                    <div className='flex justify-between'>
                      <span>Vận chuyển:</span>
                      <span>Miễn phí</span>
                    </div>
                    <div className='flex justify-between font-bold text-lg pt-2 border-t border-gray-200'>
                      <span>Tổng cộng:</span>
                      <span>{formattedFinalPrice} VND</span>
                    </div>
                  </div>
                  <button
                    type='submit'
                    disabled={selectedItems.length === 0}
                    className={`w-full mt-6 py-3 px-4 rounded-md font-medium transition-colors cursor-pointer ${
                      selectedItems.length === 0
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {selectedItems.length === 0
                      ? 'Vui lòng chọn sản phẩm'
                      : shippingMethod === 'pickup'
                      ? 'Đặt Hàng'
                      : `Thanh Toán ${formattedFinalPrice} VND`}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
