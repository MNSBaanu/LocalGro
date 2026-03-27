function InventoryForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  isEditing,
}) {
  const categories = [
    "Fresh Fruits",
    "Dried Fruits",
    "Vegetables",
    "Leafy Greens",
    "Root Vegetables",
    "Herbs & Spices",
    "Processed",
    "Other"
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
        {isEditing ? "Edit Inventory Item" : "Add New Inventory Item"}
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Item Name *</label>
            <input type="text" name="name" placeholder="Enter item name" value={formData.name} onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Category *</label>
            <select name="category" value={formData.category} onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" required>
              <option value="">Select category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Supplier *</label>
            <input type="text" name="supplier" placeholder="Enter supplier name" value={formData.supplier} onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Quantity *</label>
            <input type="number" name="quantity" placeholder="0" value={formData.quantity} onChange={onChange} min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Price (LKR) *</label>
            <input type="number" name="price" placeholder="0.00" value={formData.price} onChange={onChange} min="0" step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Min Stock Level *</label>
            <input type="number" name="minStock" placeholder="0" value={formData.minStock} onChange={onChange} min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" required />
          </div>
        </div>
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
          {isEditing && (
            <button type="button" onClick={onCancel}
              className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors">
              Cancel
            </button>
          )}
          <button type="submit"
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-black text-sm font-semibold transition-colors">
            {isEditing ? "Update Item" : "Add Item"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default InventoryForm;
