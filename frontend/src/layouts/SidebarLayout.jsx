function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-green-600">
          LocalGro
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-green-600">
            Dashboard
          </button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-green-600">
            Inventory
          </button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-green-600">
            Orders
          </button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-green-600">
            Deliveries
          </button>
        </nav>

        <div className="p-4 border-t border-green-600">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-green-600">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}

export default SidebarLayout;
