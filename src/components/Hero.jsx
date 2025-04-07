import React, { useState } from 'react';

const activeOrders = [
  { orderId: 201, customerName: "Charlie", amount: "$50", status: "Delivered" },
  { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
  { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
  { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
  { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
  { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
  { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
  { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
  { orderId: 209, customerName: "Olivia", amount: "$110", status: "Delivered" },
  { orderId: 210, customerName: "Paul", amount: "$135", status: "Cancelled" },
  { orderId: 211, customerName: "Quincy", amount: "$100", status: "Shipped" },
  { orderId: 212, customerName: "Rachel", amount: "$65", status: "Delivered" },
  { orderId: 213, customerName: "Steve", amount: "$180", status: "Pending" },
  { orderId: 214, customerName: "Tom", amount: "$50", status: "Delivered" },
  { orderId: 215, customerName: "Uma", amount: "$70", status: "Shipped" },
  { orderId: 216, customerName: "Vera", amount: "$40", status: "Delivered" },
  { orderId: 217, customerName: "Will", amount: "$85", status: "In Transit" },
  { orderId: 218, customerName: "Xander", amount: "$95", status: "Cancelled" },
];

const pastOrders = [
  { orderId: 219, customerName: "Yara", amount: "$75", status: "Shipped" },
  { orderId: 220, customerName: "Zoe", amount: "$110", status: "Delivered" },
  { orderId: 221, customerName: "Alex", amount: "$50", status: "Pending" },
  { orderId: 222, customerName: "Beth", amount: "$125", status: "In Transit" },
  { orderId: 223, customerName: "Carl", amount: "$135", status: "Delivered" },
  { orderId: 224, customerName: "Dana", amount: "$60", status: "Shipped" },
  { orderId: 225, customerName: "Eve", amount: "$150", status: "Cancelled" },
  { orderId: 226, customerName: "Fay", amount: "$75", status: "Delivered" },
  { orderId: 227, customerName: "Gil", amount: "$60", status: "In Transit" },
  { orderId: 228, customerName: "Holly", amount: "$90", status: "Pending" },
];

const statusColors = {
  Delivered: "text-green-600",
  Preparing: "text-yellow-500",
  Cancelled: "text-red-500",
  Shipped: "text-blue-500",
  Pending: "text-orange-500",
  "In Transit": "text-purple-500",
};

const Hero = () => {
  const [tab, setTab] = useState('active');
  const orders = tab === 'active' ? activeOrders : pastOrders;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="text-2xl font-bold mb-4 text-center text-pink-600">My Orders</div>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setTab('active')}
          className={`px-4 py-2 rounded-full text-sm font-medium mx-2 ${
            tab === 'active'
              ? 'bg-pink-600 text-white'
              : 'bg-white text-pink-600 border border-pink-600'
          }`}
        >
          Active Orders
        </button>
        <button
          onClick={() => setTab('past')}
          className={`px-4 py-2 rounded-full text-sm font-medium mx-2 ${
            tab === 'past'
              ? 'bg-pink-600 text-white'
              : 'bg-white text-pink-600 border border-pink-600'
          }`}
        >
          Past Orders
        </button>
      </div>

      {/* Order Cards */}
      <div className="flex flex-col items-center space-y-4">
        {orders.length === 0 ? (
          <div className="text-center text-gray-500">No orders found.</div>
        ) : (
          orders.map((order) => (
            <div
              key={order.orderId}
              className="w-full  max-w-xl bg-white rounded-xl p-4 py-3 shadow-sm border border-gray-200 flex items-center space-x-4"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="order"
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{order.customerName}</h3>
                  <span className={`text-sm font-medium ${statusColors[order.status] || 'text-gray-600'}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Order #{order.orderId} — {order.amount}</p>
                <button className='flex justify-end mt-3 bg-red-600 text-white p-2 text-center rounded-lg'> Selecte item to reorder</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hero;
