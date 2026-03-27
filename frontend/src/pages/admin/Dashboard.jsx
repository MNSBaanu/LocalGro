import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  const getDashboardContent = () => {
    switch (user?.role) {
      case "admin":
        return {
          title: "Admin Dashboard",
          stats: [
            { label: "Total Orders", value: "156" },
            { label: "Active Deliveries", value: "23" },
            { label: "Inventory Items", value: "89" },
            { label: "Revenue Today", value: "LKR 2,340" },
          ],
        };
      case "warehouse":
        return {
          title: "Warehouse Dashboard",
          stats: [
            { label: "Items in Stock", value: "89" },
            { label: "Low Stock Items", value: "12" },
            { label: "Orders to Pack", value: "34" },
            { label: "Items Shipped", value: "67" },
          ],
        };
      case "delivery":
        return {
          title: "Delivery Dashboard",
          stats: [
            { label: "Pending Deliveries", value: "23" },
            { label: "Completed Today", value: "15" },
            { label: "In Transit", value: "8" },
            { label: "Failed Deliveries", value: "2" },
          ],
        };
      case "finance":
        return {
          title: "Finance Dashboard",
          stats: [
            { label: "Today's Revenue", value: "LKR 2,340" },
            { label: "Pending Payments", value: "LKR 890" },
            { label: "Monthly Target", value: "LKR 50,000" },
            { label: "Profit Margin", value: "23%" },
          ],
        };
      case "customer":
        return {
          title: "My Dashboard",
          stats: [
            { label: "Active Orders", value: "3" },
            { label: "Delivered Orders", value: "12" },
            { label: "Favourite Items", value: "8" },
            { label: "Total Spent", value: "LKR 4,560" },
          ],
        };
      default:
        return { title: "Dashboard", stats: [] };
    }
  };

  const { title, stats } = getDashboardContent();

  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Overview</p>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, {user?.name}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {user?.role === "admin" && (
            <>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-left transition-all">
                <p className="font-semibold text-gray-900 text-sm">Manage Inventory</p>
                <p className="text-xs text-gray-500 mt-0.5">Add or update products</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-left transition-all">
                <p className="font-semibold text-gray-900 text-sm">View Orders</p>
                <p className="text-xs text-gray-500 mt-0.5">Process customer orders</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-left transition-all">
                <p className="font-semibold text-gray-900 text-sm">Track Deliveries</p>
                <p className="text-xs text-gray-500 mt-0.5">Monitor delivery status</p>
              </button>
            </>
          )}
          {user?.role === "customer" && (
            <>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-left transition-all">
                <p className="font-semibold text-gray-900 text-sm">Browse Products</p>
                <p className="text-xs text-gray-500 mt-0.5">Find fresh local produce</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-left transition-all">
                <p className="font-semibold text-gray-900 text-sm">Track Orders</p>
                <p className="text-xs text-gray-500 mt-0.5">Check your order status</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-left transition-all">
                <p className="font-semibold text-gray-900 text-sm">Order History</p>
                <p className="text-xs text-gray-500 mt-0.5">View past purchases</p>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
