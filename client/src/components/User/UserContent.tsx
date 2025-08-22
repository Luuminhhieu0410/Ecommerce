import React from "react";

type Order = {
  id: string;
  date: string;
  total: string;
  paymentStatus: string;
  shippingStatus: string;
};

type Props = {
  username: string;
  address: string;
  phone: string;
  orders: Order[];  
};

const UserContent = ({ username, address, phone, orders }: Props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Wrapper grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">TRANG TÀI KHOẢN</h2>
          <p className="mb-2">
            Xin chào, <span className="font-bold">{username}</span>!
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 cursor-pointer hover:text-black">
              Thông tin tài khoản
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-black">
              Số địa chỉ (0)
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline">Đăng xuất</button>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3 border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">TÀI KHOẢN</h2>
          <p>
            Tên tài khoản: <span className="font-bold">{username}</span>
          </p>
          <p className="mt-1">🏠 Địa chỉ: {address || "Chưa có địa chỉ"}</p>
          <p className="mt-1">📱 Điện thoại: {phone || "Chưa có số điện thoại"}</p>

          <h3 className="mt-6 text-lg font-semibold">ĐƠN HÀNG CỦA BẠN</h3>
          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border text-left">Mã đơn hàng</th>
                  <th className="p-2 border text-left">Ngày đặt</th>
                  <th className="p-2 border text-left">Thành tiền</th>
                  <th className="p-2 border text-left">TT thanh toán</th>
                  <th className="p-2 border text-left">TT vận chuyển</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center p-4 text-gray-500">
                      Không có đơn hàng nào.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="p-2 border">{order.id}</td>
                      <td className="p-2 border">{order.date}</td>
                      <td className="p-2 border">{order.total}</td>
                      <td className="p-2 border">{order.paymentStatus}</td>
                      <td className="p-2 border">{order.shippingStatus}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
