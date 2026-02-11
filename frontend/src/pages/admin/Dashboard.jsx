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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600 mt-2">Welcome back, {user?.name}!</p>
        <p className="text-sm text-slate-500 mt-1">Supply Chain Overview & Analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className={`${stat.color} rounded-lg p-3 mr-4`}>
                <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {user?.role === "admin" && (
            <>
              <button className="p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-left transition-all">
                <h3 className="font-medium text-slate-900">Manage Inventory</h3>
                <p className="text-sm text-slate-600 mt-1">Add or update products</p>
              </button>
              <button className="p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-left transition-all">
                <h3 className="font-medium text-slate-900">View Orders</h3>
                <p className="text-sm text-slate-600 mt-1">Process customer orders</p>
              </button>
              <button className="p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-left transition-all">
                <h3 className="font-medium text-slate-900">Track Deliveries</h3>
                <p className="text-sm text-slate-600 mt-1">Monitor delivery status</p>
              </button>
            </>
          )}
          {user?.role === "customer" && (
            <>
              <button className="p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-left transition-all">
                <h3 className="font-medium text-slate-900">Browse Products</h3>
                <p className="text-sm text-slate-600 mt-1">Find fresh local produce</p>
              </button>
              <button className="p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-left transition-all">
                <h3 className="font-medium text-slate-900">Track Orders</h3>
                <p className="text-sm text-slate-600 mt-1">Check your order status</p>
              </button>
              <button className="p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 text-left transition-all">
                <h3 className="font-medium text-slate-900">Order History</h3>
                <p className="text-sm text-slate-600 mt-1">View past purchases</p>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
