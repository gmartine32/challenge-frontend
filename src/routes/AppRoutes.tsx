import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { useAuth } from "../context/AuthContext";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";
import { HomeProvider } from "../context/HomeContext";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
  
        <Route
          element={
            isAuthenticated ? (
              <PrivateLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route path="/" element={<HomeProvider><Home /></HomeProvider>} />
        </Route>
  
      </Routes>
    </Router>
  );
}
