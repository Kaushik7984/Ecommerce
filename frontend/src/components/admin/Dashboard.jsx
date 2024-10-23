import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Typography } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import {getAdminProduct} from "../../actions/productAction"
import {getAllOrders} from "../../actions/orderAction"
import {getAllUsers} from "../../actions/userAction"


// Import necessary parts from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components you want to use
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { useSelector, useDispatch } from "react-redux";


const Dashboard = () => {
  const dispatch = useDispatch();
  
  // Safely destructure state and provide fallback empty arrays in case the data is not ready yet
  const { products = [] } = useSelector((state) => state.products);
  const { orders = [] } = useSelector((state) => state.allOrders);
  const { users = [] } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  // Handle cases where orders or products may be undefined
  const totalRevenue = orders?.reduce((acc, order) => acc + order.totalPrice, 0);

  const lineState = {
    labels: ["January", "February", "March", "April", "May", "June","July"],
    datasets: [
      {
        label: "Sales Over Time",
        fill: true,
        backgroundColor: "#ADD8E6",
        borderColor: "#0077b6",
        data: [12000, 19000, 25000, 30000, 42000, 55000,566000],
      },
    ],
  };

  const barState = {
    labels: ["Products", "Orders", "Users"],
    datasets: [
      {
        label: "Statistics",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        data: [products.length, orders.length, users.length], // Ensure these arrays exist before accessing .length
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>
        <div className="dashboardSummary">
          <div className="dashboardCard">
            <p>Total Revenue</p>
            <h3>₹{totalRevenue?.toLocaleString()}</h3>
          </div>
          <div className="dashboardCard">
            <p>Total Products</p>
            <h3>{products.length}</h3>
          </div>
          <div className="dashboardCard">
            <p>Total Orders</p>
            <h3>{orders.length}</h3>
          </div>
          <div className="dashboardCard">
            <p>Total Users</p>
            <h3>{users.length}</h3>
          </div>
        </div>

        <div className="chartArea">
          <div className="chartCard">
            <Typography component="h2">Sales Trend</Typography>
            <Line data={lineState} />
          </div>
          <div className="chartCard">
            <Typography component="h2">Overall Statistics</Typography>
            <Bar data={barState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
