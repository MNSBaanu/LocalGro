function InventoryForm({
  formData,
  onChange,
  onSubmit,
  isEditing,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded shadow mb-8 grid grid-cols-4 gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={onChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={onChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={onChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price (LKR)"
        value={formData.price}
        onChange={onChange}
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="col-span-4 bg-green-700 text-white py-2 rounded hover:bg-green-600"
      >
        {isEditing ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
}

export default InventoryForm;
