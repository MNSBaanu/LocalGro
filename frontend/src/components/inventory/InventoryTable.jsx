function InventoryTable({ items, onEdit, onDelete }) {
  const getStockStatus = (quantity, minStock) => {
    if (quantity <= minStock) {
      return { status: "Low Stock", color: "text-red-700 bg-red-50 border border-red-200" };
    } else if (quantity <= minStock * 1.5) {
      return { status: "Medium", color: "text-yellow-700 bg-yellow-50 border border-yellow-200" };
    } else {
      return { status: "In Stock", color: "text-gray-700 bg-gray-100 border border-gray-200" };
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric",
    });
  };

  if (items.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        <p className="text-gray-400 text-sm">No items found. Try adjusting your filters or add a new item.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Supplier</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => {
              const stockStatus = getStockStatus(item.quantity, item.minStock);
              return (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{formatDate(item.lastUpdated)}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 text-gray-700">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">{item.quantity} units</p>
                    <p className="text-xs text-gray-400">Min: {item.minStock}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">LKR {item.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Total: LKR {(item.quantity * item.price).toLocaleString()}</p>
                  </td>
                  <td className="px-5 py-4 text-gray-700">{item.supplier}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-md ${stockStatus.color}`}>
                      {stockStatus.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 space-x-3">
                    <button onClick={() => onEdit(item)} className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors">Edit</button>
                    <button onClick={() => onDelete(item.id)} className="text-xs font-semibold text-red-500 hover:text-red-700 transition-colors">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;
