import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import Login from "./pages/LoginPage/LoginPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx/ProtectedRoute.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
