function InventoryTable({ items, onEdit, onDelete }) {
  const getStockStatus = (quantity, minStock) => {
    if (quantity <= minStock) {
      return { status: "Low Stock", color: "text-red-600 bg-red-100" };
    } else if (quantity <= minStock * 1.5) {
      return { status: "Medium", color: "text-yellow-600 bg-yellow-100" };
    } else {
      return { status: "In Stock", color: "text-brand-700 bg-brand-50" };
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center border border-slate-200">
        <div className="text-slate-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">No items found</h3>
        <p className="text-slate-600">Try adjusting your search or filters, or add a new item.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Item Details
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Supplier
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {items.map((item) => {
              const stockStatus = getStockStatus(item.quantity, item.minStock);
              return (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">Updated: {formatDate(item.lastUpdated)}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">{item.quantity} units</div>
                    <div className="text-xs text-slate-500">Min: {item.minStock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">LKR {item.price.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">Total: LKR {(item.quantity * item.price).toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                    {item.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-md ${stockStatus.color}`}>
                      {stockStatus.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="text-red-600 hover:text-red-800 transition-colors font-medium"
                    >
                      Delete
                    </button>
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
