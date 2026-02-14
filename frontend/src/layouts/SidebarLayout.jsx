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
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-68 glass-dark text-white flex flex-col m-4 mr-0 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-700/50">
          <h1 className="text-2xl font-bold text-brand-400 tracking-tight">LocalGro</h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">Supply Chain</p>
        </div>

        {/* User Info */}
        {user && (
          <div className="px-4 py-4 text-sm border-b border-white/5 bg-white/5 backdrop-blur-sm">
            <p className="font-semibold text-white">{user.name}</p>
            <p className="text-slate-400 capitalize text-xs mt-1">{user.role}</p>
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
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-900/50 font-semibold"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>


        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors text-slate-200 hover:text-white"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default SidebarLayout;
