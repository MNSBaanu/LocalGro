import { useState, useMemo } from "react";
import InventoryForm from "../../components/inventory/InventoryForm";
import InventoryTable from "../../components/inventory/InventoryTable";
import { inventoryService } from "../../services/inventoryService";

function Inventory() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dried Jackfruit Pack",
      category: "Dried Fruits",
      quantity: 120,
      price: 850,
      minStock: 20,
      supplier: "Local Farm Co.",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Raw Jackfruit",
      category: "Fresh Fruits",
      quantity: 45,
      price: 300,
      minStock: 10,
      supplier: "Green Valley Farm",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Coconut Oil",
      category: "Oils",
      quantity: 8,
      price: 1200,
      minStock: 15,
      supplier: "Pure Coconut Ltd",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Organic Rice",
      category: "Grains",
      quantity: 200,
      price: 180,
      minStock: 50,
      supplier: "Organic Farms",
      lastUpdated: new Date().toISOString(),
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    minStock: "",
    supplier: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showLowStock, setShowLowStock] = useState(false);

  // Calculate inventory stats
  const stats = useMemo(() => {
    const totalItems = items.length;
    const totalValue = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const lowStockItems = items.filter(item => item.quantity <= item.minStock).length;
    const categories = [...new Set(items.map(item => item.category))].length;

    return { totalItems, totalValue, lowStockItems, categories };
  }, [items]);

  // Filter items based on search and filters
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !categoryFilter || item.category === categoryFilter;
      const matchesLowStock = !showLowStock || item.quantity <= item.minStock;

      return matchesSearch && matchesCategory && matchesLowStock;
    });
  }, [items, searchTerm, categoryFilter, showLowStock]);

  // Get unique categories for filter
  const categories = useMemo(() => {
    return [...new Set(items.map(item => item.category))].sort();
  }, [items]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      quantity: "",
      price: "",
      minStock: "",
      supplier: "",
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updatedItem = {
        id: editingId,
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        minStock: Number(formData.minStock),
        lastUpdated: new Date().toISOString(),
      };

      setItems(inventoryService.updateItem(items, updatedItem));
    } else {
      const newItem = {
        id: Date.now(),
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        minStock: Number(formData.minStock),
        lastUpdated: new Date().toISOString(),
      };

      setItems(inventoryService.createItem(items, newItem));
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      category: item.category,
      quantity: item.quantity.toString(),
      price: item.price.toString(),
      minStock: item.minStock.toString(),
      supplier: item.supplier,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(inventoryService.deleteItem(items, id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Inventory Management</h1>
          <p className="text-slate-600 mt-1">Manage your supply chain inventory</p>
        </div>
        <button
          onClick={resetForm}
          className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors shadow-md"
        >
          + Add New Item
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-lg p-3 mr-4">
              <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Total Items</p>
              <p className="text-2xl font-bold text-slate-900">{stats.totalItems}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-lg p-3 mr-4">
              <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Total Value</p>
              <p className="text-2xl font-bold text-slate-900">LKR {stats.totalValue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
          <div className="flex items-center">
            <div className="bg-red-500 rounded-lg p-3 mr-4">
              <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Low Stock</p>
              <p className="text-2xl font-bold text-slate-900">{stats.lowStockItems}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
          <div className="flex items-center">
            <div className="bg-purple-500 rounded-lg p-3 mr-4">
              <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Categories</p>
              <p className="text-2xl font-bold text-slate-900">{stats.categories}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Search & Filter</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showLowStock}
                onChange={(e) => setShowLowStock(e.target.checked)}
                className="mr-2 w-4 h-4 text-slate-800 rounded focus:ring-slate-500"
              />
              <span className="text-sm font-medium text-slate-700">Show Low Stock Only</span>
            </label>
          </div>

          <div className="flex items-end">
            <span className="text-sm text-slate-600 font-medium">
              Showing {filteredItems.length} of {items.length} items
            </span>
          </div>
        </div>
      </div>

      <InventoryForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
        isEditing={Boolean(editingId)}
      />

      <InventoryTable
        items={filteredItems}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Inventory;
