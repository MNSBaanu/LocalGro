import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      name: "Customer User",
      role: "customer",
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-green-700 text-white rounded"
      >
        Login as Customer
      </button>
    </div>
  );
}

export default Login;
