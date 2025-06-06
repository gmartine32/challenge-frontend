import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { HomeProvider } from "../context/HomeContext";
import User from "../pages/user/User";
import PasswordChange from "../pages/passwordChange/PasswordChange";
import { PrivateRoute } from "../core/PrivateRoute/PrivateRoute";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<PasswordChange />} />
  
        <Route
          element={
            <PrivateRoute />
          }
        >
          <Route path="/" element={<HomeProvider><Home /></HomeProvider>} />
          <Route path="/user" element={<User/>} />
        </Route>
  
      </Routes>
    </Router>
  );
}
