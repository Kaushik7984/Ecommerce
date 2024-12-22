  
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const ProtectedRoute = ({ isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    if (isAdmin && user?.role !== "admin") {
      return <Navigate to="/account" />;
    }

    return <Outlet />;
  }

  return <Loader />

};

export default ProtectedRoute;
