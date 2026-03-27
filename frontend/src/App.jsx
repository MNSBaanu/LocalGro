import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Dashboard from "./pages/admin/Dashboard";
import Inventory from "./pages/warehouse/Inventory";
import Orders from "./pages/finance/Orders";
import Deliveries from "./pages/delivery/Deliveries";
import CustomerOrders from "./pages/customer/Orders";

import AdminLayout from "./layouts/AdminLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root goes to home page */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Public */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin / Warehouse */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Inventory />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Orders />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/deliveries"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Deliveries />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Customer */}
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <CustomerLayout>
                <CustomerOrders />
              </CustomerLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
