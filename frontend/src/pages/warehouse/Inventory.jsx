import { useState, useMemo } from "react";
import InventoryForm from "../../components/inventory/InventoryForm";
import InventoryTable from "../../components/inventory/InventoryTable";
import { inventoryService } from "../../services/inventoryService";

function Inventory() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Banana",
      category: "Fresh Fruits",
      quantity: 300,
      price: 80,
      minStock: 50,
      supplier: "Green Valley Farm",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Mango",
      category: "Fresh Fruits",
      quantity: 12,
      price: 250,
      minStock: 30,
      supplier: "Tropical Harvest Co.",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Carrot",
      category: "Vegetables",
      quantity: 180,
      price: 120,
      minStock: 40,
      supplier: "Hill Country Farms",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 4,
      name: "Tomato",
      category: "Vegetables",
      quantity: 8,
      price: 150,
      minStock: 50,
      supplier: "Organic Farms",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 5,
      name: "Dried Mango Slices",
      category: "Dried Fruits",
      quantity: 95,
      price: 650,
      minStock: 20,
      supplier: "SunDry Products",
      lastUpdated: new Date().toISOString(),
    },
    {
      id: 6,
      name: "Pineapple",
      category: "Fresh Fruits",
      quantity: 60,
      price: 200,
      minStock: 15,
      supplier: "Tropical Harvest Co.",
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
          className="px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-sm font-semibold"
        >
          + Add New Item
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Items</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{stats.totalItems}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">LKR {stats.totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Low Stock</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{stats.lowStockItems}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Categories</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{stats.categories}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search</label>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
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
                className="mr-2 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span className="text-sm text-gray-700">Low Stock Only</span>
            </label>
          </div>
          <div className="flex items-end justify-end">
            <span className="text-xs text-gray-500">{filteredItems.length} of {items.length} items</span>
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
