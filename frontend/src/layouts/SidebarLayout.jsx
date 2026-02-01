import { Link } from "react-router-dom";

function SidebarLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-green-600">
          LocalGro
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-green-600"
          >
            Dashboard
          </Link>

          <Link
            to="/inventory"
            className="block px-4 py-2 rounded hover:bg-green-600"
          >
            Inventory
          </Link>

          <Link
            to="/orders"
            className="block px-4 py-2 rounded hover:bg-green-600"
          >
            Orders
          </Link>

          <Link
            to="/deliveries"
            className="block px-4 py-2 rounded hover:bg-green-600"
          >
            Deliveries
          </Link>
        </nav>

        <div className="p-4 border-t border-green-600">
          <Link
            to="/login"
            className="block px-4 py-2 rounded hover:bg-green-600"
          >
            Logout
          </Link>
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
