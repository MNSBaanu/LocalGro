import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      name: "Admin User",
      role: "admin",
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-green-700 text-white rounded"
      >
        Login as Admin
      </button>
    </div>
  );
}

export default Login;
