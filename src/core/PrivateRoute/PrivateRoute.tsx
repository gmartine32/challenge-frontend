import { Navigate } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout/PrivateLayout";
import { useAuthStore } from "../../store/AuthStore";

export const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <PrivateLayout /> : <Navigate to="/login" replace/>;
}
