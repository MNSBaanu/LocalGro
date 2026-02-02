export const inventoryService = {
  createItem(items, newItem) {
    return [...items, newItem];
  },

  updateItem(items, updatedItem) {
    return items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  },

  deleteItem(items, id) {
    return items.filter((item) => item.id !== id);
  },
};
