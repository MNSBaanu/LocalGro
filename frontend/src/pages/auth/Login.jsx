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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[120px]"></div>

      <div className="max-w-md w-full glass p-10 rounded-3xl shadow-2xl relative z-10 border border-white/60">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-brand-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-brand-200 rotate-3">
            <span className="text-4xl text-white font-bold">L</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2 font-display tracking-tight">LocalGro</h1>
          <p className="text-slate-500 font-medium">Next-Gen Supply Chain Solutions</p>
        </div>

        <div className="space-y-4">
          <div className="mb-8">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">
              Access Role
            </label>
            <div className="relative">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-4 bg-white/50 border border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none transition-all font-semibold text-slate-700 shadow-sm"
              >
                {userRoles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full px-6 py-4 bg-brand-600 text-white rounded-2xl hover:bg-brand-700 transition-all font-bold shadow-xl shadow-brand-200/50 hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            Authenticate & Enter
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
