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
  ];

  const handleLogin = () => {
    const selectedUser = userRoles.find(role => role.value === selectedRole);
    
    login({
      name: selectedUser.name,
      role: selectedRole,
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">LocalGro SCM</h1>
          <p className="text-slate-600">Supply Chain Management System</p>
          <p className="text-sm text-slate-500 mt-2">Select your role to continue</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Login as:
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {userRoles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleLogin}
            className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium shadow-md"
          >
            Login to System
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-500 text-center">
          LocalGro Supply Chain Management System v1.0
        </div>
      </div>
    </div>
  );
}

export default Login;
