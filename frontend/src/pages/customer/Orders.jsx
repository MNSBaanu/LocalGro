import { useState } from "react";

function CustomerOrders() {
  const products = [
    { id: 1, name: "Dried Jackfruit Pack", price: 850 },
    { id: 2, name: "Raw Jackfruit", price: 300 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);

  const total = selectedProduct.price * quantity;

  const handlePlaceOrder = () => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      product: selectedProduct.name,
      quantity,
      total,
      status: "Pending",
    };

    setOrders([...orders, newOrder]);
    setQuantity(1);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Place Order</h1>

      {/* Order Form */}
      <div className="bg-white p-6 rounded shadow mb-8 grid grid-cols-3 gap-4">
        <select
          value={selectedProduct.id}
          onChange={(e) =>
            setSelectedProduct(
              products.find((p) => p.id === Number(e.target.value))
            )
          }
          className="border p-2 rounded"
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} (LKR {product.price})
            </option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 rounded"
        />

        <div className="flex items-center font-semibold">
          Total: LKR {total}
        </div>

        <button
          onClick={handlePlaceOrder}
          className="col-span-3 bg-green-700 text-white py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </div>

      {/* Orders List */}
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      <div className="bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Order ID</th>
              <th className="text-left p-3">Product</th>
              <th className="text-left p-3">Quantity</th>
              <th className="text-left p-3">Total</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.quantity}</td>
                <td className="p-3">{order.total}</td>
                <td className="p-3">
                  <span className="px-3 py-1 rounded text-sm bg-yellow-100 text-yellow-800">
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No orders placed yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerOrders;
