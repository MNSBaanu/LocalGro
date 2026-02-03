function Orders() {
  const orders = [
    {
      id: "ORD-1001",
      customer: "Nimal Perera",
      items: 3,
      total: 2550,
      status: "Pending",
    },
    {
      id: "ORD-1002",
      customer: "Saman Kumara",
      items: 5,
      total: 4250,
      status: "Packed",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Orders Management</h1>

      <div className="bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Order ID</th>
              <th className="text-left p-3">Customer</th>
              <th className="text-left p-3">Items</th>
              <th className="text-left p-3">Total (LKR)</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.items}</td>
                <td className="p-3">{order.total}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded text-sm ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
