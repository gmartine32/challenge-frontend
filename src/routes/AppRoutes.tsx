import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { useAuth } from "../context/AuthContext";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            isAuthenticated ? (
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </Router>
  );
}
