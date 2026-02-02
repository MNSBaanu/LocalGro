function InventoryTable({ items, onEdit, onDelete }) {
  return (
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
                  onClick={() => onEdit(item)}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
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
  );
}

export default InventoryTable;
