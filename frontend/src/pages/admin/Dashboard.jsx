import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  const getDashboardContent = () => {
    switch (user?.role) {
      case "admin":
        return {
          title: "Admin Dashboard",
          stats: [
            { label: "Total Orders", value: "156", color: "bg-blue-500" },
            { label: "Active Deliveries", value: "23", color: "bg-green-500" },
            { label: "Inventory Items", value: "89", color: "bg-yellow-500" },
            { label: "Revenue Today", value: "$2,340", color: "bg-purple-500" },
          ],
        };
      case "warehouse":
        return {
          title: "Warehouse Dashboard",
          stats: [
            { label: "Items in Stock", value: "89", color: "bg-green-500" },
            { label: "Low Stock Items", value: "12", color: "bg-red-500" },
            { label: "Orders to Pack", value: "34", color: "bg-blue-500" },
            { label: "Items Shipped", value: "67", color: "bg-purple-500" },
          ],
        };
      case "delivery":
        return {
          title: "Delivery Dashboard",
          stats: [
            { label: "Pending Deliveries", value: "23", color: "bg-orange-500" },
            { label: "Completed Today", value: "15", color: "bg-green-500" },
            { label: "In Transit", value: "8", color: "bg-blue-500" },
            { label: "Failed Deliveries", value: "2", color: "bg-red-500" },
          ],
        };
      case "finance":
        return {
          title: "Finance Dashboard",
          stats: [
            { label: "Today's Revenue", value: "$2,340", color: "bg-green-500" },
            { label: "Pending Payments", value: "$890", color: "bg-yellow-500" },
            { label: "Monthly Target", value: "$50,000", color: "bg-blue-500" },
            { label: "Profit Margin", value: "23%", color: "bg-purple-500" },
          ],
        };
      case "customer":
        return {
          title: "Customer Dashboard",
          stats: [
            { label: "Active Orders", value: "3", color: "bg-blue-500" },
            { label: "Delivered Orders", value: "12", color: "bg-green-500" },
            { label: "Favorite Items", value: "8", color: "bg-purple-500" },
            { label: "Total Spent", value: "$456", color: "bg-yellow-500" },
          ],
        };
      default:
        return {
          title: "Dashboard",
          stats: [],
        };
    }
  };

  const { title, stats } = getDashboardContent();

  return (
    <div>
      <div className="mb-8 animate-reveal">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{title}</h1>
        <p className="text-slate-600 mt-2 text-lg">Welcome back, <span className="text-brand-700 font-semibold">{user?.name}</span>!</p>
        <div className="h-1.5 w-20 bg-brand-500 mt-4 rounded-full shadow-sm shadow-brand-500/20"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card p-6 animate-reveal"
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            <div className="flex items-center">
              <div className={`${stat.color} rounded-xl p-3 mr-4 shadow-lg shadow-${stat.color.split('-')[1]}-200/50`}>
                <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-8 animate-reveal animation-delay-500">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {user?.role === "admin" && (
            <>
              <button className="p-6 bg-white/50 border border-white/40 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 text-left transition-all group shadow-sm hover:shadow-md hover:translate-y-[-4px] duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <span className="text-xl">📦</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">Manage Inventory</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">Add or update products</p>
              </button>
              <button className="p-6 bg-white/50 border border-white/40 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 text-left transition-all group shadow-sm hover:shadow-md hover:translate-y-[-4px] duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <span className="text-xl">🛒</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">View Orders</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">Process customer orders</p>
              </button>
              <button className="p-6 bg-white/50 border border-white/40 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 text-left transition-all group shadow-sm hover:shadow-md hover:translate-y-[-4px] duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <span className="text-xl">🚚</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">Track Deliveries</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">Monitor delivery status</p>
              </button>
            </>
          )}
          {user?.role === "customer" && (
            <>
              <button className="p-6 bg-white/50 border border-white/40 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 text-left transition-all group shadow-sm hover:shadow-md hover:translate-y-[-4px] duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-700">Browse Products</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">Find fresh local produce</p>
              </button>
              <button className="p-6 bg-white/50 border border-white/40 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 text-left transition-all group shadow-sm hover:shadow-md hover:translate-y-[-4px] duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <span className="text-xl">📍</span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-700">Track Orders</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">Check your order status</p>
              </button>
              <button className="p-6 bg-white/50 border border-white/40 rounded-2xl hover:bg-brand-50/50 hover:border-brand-200 text-left transition-all group shadow-sm hover:shadow-md hover:translate-y-[-4px] duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <span className="text-xl">📜</span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-700">Order History</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-1">View past purchases</p>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
