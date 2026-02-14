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
      <aside className="w-72 glass-dark text-white flex flex-col m-4 mr-0 rounded-3xl overflow-hidden animate-reveal-scale">
        <div className="p-8 border-b border-white/5">
          <div className="w-10 h-10 bg-brand-500 rounded-xl mb-4 flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-500/20">L</div>
          <h1 className="text-2xl font-bold text-white tracking-tight font-display">LocalGro</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-1 font-bold">SCM Platform</p>
        </div>

        {/* User Info */}
        {user && (
          <div className="px-6 py-6 text-sm border-b border-white/5 bg-white/[0.02]">
            <p className="font-bold text-white text-base">{user.name}</p>
            <p className="text-brand-400 capitalize text-xs mt-1 font-bold tracking-wider">{user.role} Account</p>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 mt-4">
          {user &&
            sidebarMenu[user.role]?.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-3.5 rounded-2xl transition-all duration-300 animate-reveal ${isActive
                      ? "bg-brand-600 text-white shadow-xl shadow-brand-900/40 font-bold scale-[1.02]"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center">
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all ${isActive ? 'bg-white scale-100' : 'bg-transparent scale-0'}`}></span>
                    {item.label}
                  </span>
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
