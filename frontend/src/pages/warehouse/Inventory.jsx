import { useState } from "react";

function Inventory() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dried Jackfruit Pack",
      category: "Food",
      quantity: 120,
      price: 850,
    },
    {
      id: 2,
      name: "Raw Jackfruit",
      category: "Raw",
      quantity: 45,
      price: 300,
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Inventory Management</h1>

      {/* Inventory Table */}
      <div className="bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Quantity</th>
              <th className="text-left p-3">Price (LKR)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
