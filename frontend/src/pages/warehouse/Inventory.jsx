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

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
    };

    setItems([...items, newItem]);
    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      price: item.price,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setItems(
      items.map((item) =>
        item.id === editingId
          ? { ...item, ...formData, quantity: Number(formData.quantity), price: Number(formData.price) }
          : item
      )
    );

    setEditingId(null);
    resetForm();
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Inventory Management</h1>

      {/* Add / Edit Form */}
      <form
        onSubmit={editingId ? handleUpdate : handleAddItem}
        className="bg-white p-6 rounded shadow mb-8 grid grid-cols-4 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price (LKR)"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="col-span-4 bg-green-700 text-white py-2 rounded hover:bg-green-600"
        >
          {editingId ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* Inventory Table */}
      <div className="bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Quantity</th>
              <th className="text-left p-3">Price (LKR)</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
