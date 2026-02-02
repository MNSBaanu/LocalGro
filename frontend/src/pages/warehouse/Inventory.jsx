import { useState } from "react";
import InventoryForm from "../../components/inventory/InventoryForm";
import InventoryTable from "../../components/inventory/InventoryTable";
import { inventoryService } from "../../services/inventoryService";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      quantity: "",
      price: "",
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
      };

      setItems(inventoryService.updateItem(items, updatedItem));
    } else {
      const newItem = {
        id: Date.now(),
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
      };

      setItems(inventoryService.createItem(items, newItem));
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData(item);
  };

  const handleDelete = (id) => {
    setItems(inventoryService.deleteItem(items, id));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Inventory Management
      </h1>

      <InventoryForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing={Boolean(editingId)}
      />

      <InventoryTable
        items={items}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Inventory;
