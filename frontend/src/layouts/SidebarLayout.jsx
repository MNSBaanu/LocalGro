import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { sidebarMenu } from "../components/sidebarMenu";

function SidebarLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col border-r border-gray-800">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="w-8 h-8 bg-white rounded-lg mb-3 flex items-center justify-center font-bold text-gray-900 text-sm">L</div>
          <h1 className="text-lg font-bold text-white font-display">LocalGro</h1>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">Fruits & Vegetables SCM</p>
        </div>

        {/* User Info */}
        {user && (
          <div className="px-6 py-4 border-b border-gray-800">
            <p className="font-semibold text-white text-sm">{user.name}</p>
            <p className="text-gray-500 capitalize text-xs mt-0.5">{user.role}</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {user &&
            sidebarMenu[user.role]?.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-white text-gray-900 font-semibold"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default SidebarLayout;
