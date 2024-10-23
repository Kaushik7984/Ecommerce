import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import ProductIcon from "@mui/icons-material/Category";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <Link to="/admin/dashboard">
        <p><DashboardIcon /> Dashboard</p>
      </Link>
      <Link to="/admin/products">
        <p><ProductIcon /> Products</p>
      </Link>
      <Link to="/admin/orders">
        <p><ShoppingCartIcon /> Orders</p>
      </Link>
      <Link to="/admin/users">
        <p><PeopleIcon /> Users</p>
      </Link>
    </div>
  );
};

export default Sidebar;
