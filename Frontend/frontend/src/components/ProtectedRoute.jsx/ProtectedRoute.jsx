import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const authToken = localStorage.getItem("auth");

  if (!authToken) {
    alert("Your session is no longer active. Please log in again.");
    return <Navigate to="/login" />;
  }

  return children;
}
