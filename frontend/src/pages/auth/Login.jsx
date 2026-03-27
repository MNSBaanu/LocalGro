import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("customer");

  const userRoles = [
    { value: "admin", label: "Admin", name: "Admin User" },
    { value: "warehouse", label: "Warehouse Manager", name: "Warehouse User" },
    { value: "delivery", label: "Delivery Personnel", name: "Delivery User" },
    { value: "finance", label: "Finance Manager", name: "Finance User" },
    { value: "customer", label: "Customer", name: "Customer User" },
    { value: "guest", label: "Guest", name: "Guest User" },
  ];

  const handleLogin = () => {
    const selectedUser = userRoles.find(role => role.value === selectedRole);

    if (selectedRole === "guest") {
      navigate("/home");
      return;
    }

    login({ name: selectedUser.name, role: selectedRole });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 flex-col justify-between p-12">
        <div>
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-gray-900 text-sm mb-8">L</div>
          <h2 className="text-4xl font-bold text-white font-display leading-tight">
            Fruits & Vegetables<br />Supply Chain
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Manage your entire supply chain from farm to customer. Track inventory, orders, and deliveries in one place.
          </p>
        </div>
        <p className="text-gray-600 text-xs">LocalGro SCM v1.0 &mdash; Kandy, Sri Lanka</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 font-display">Sign in</h1>
            <p className="text-gray-500 text-sm mt-1">Select your role to access the system</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Role
              </label>
              <div className="relative">
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none text-sm text-gray-900 font-medium"
                >
                  {userRoles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-sm font-semibold"
            >
              {selectedRole === "guest" ? "Browse as Guest →" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
