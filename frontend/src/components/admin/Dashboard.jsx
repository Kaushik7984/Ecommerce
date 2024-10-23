import React, { useEffect, useMemo } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Typography } from "@mui/material";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";

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
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products = [] } = useSelector((state) => state.products);
  const { orders = [] } = useSelector((state) => state.allOrders);
  const { users = [] } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  const totalRevenue = orders?.reduce((acc, order) => acc + order.totalPrice, 0);

  const inStock = products.filter(product => product.stock > 0).length;
  const outOfStock = products.filter(product => product.stock === 0).length;

  const dummySales = [50000, 100000, 80000, 70000, 150000, 250000, 342562, 205686, 355368];

  const realMonthlySales = useMemo(() => {
    const sales = new Array(12).fill(0);
    orders.forEach(order => {
      const date = new Date(order.createdAt);
      const month = date.getMonth();
      sales[month] += order.totalPrice;
    });
    return sales.slice(9);
  }, [orders]);

  const monthlySales = [...dummySales, ...realMonthlySales];

  const lineState = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Sales Over Time",
        fill: true,
        backgroundColor: "#ADD8E6",
        borderColor: "#0077b6",
        data: monthlySales,
      },
    ],
  };

  const barState = {
    labels: ["Products", "Orders", "Users"],
    datasets: [
      {
        label: "Statistics",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        data: [products.length, orders.length, users.length],
      },
    ],
  };

  const stockState = {
    labels: ["In Stock", "Out of Stock"],
    datasets: [
      {
        label: "Stock Status",
        backgroundColor: ["#00A6B4", "#6800B4"],
        data: [inStock, outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <div className="name">Dashboard</div>
        <div className="dashboardSummary">
          <div className="dashboardCard redCard">
            <div className="cardIcon">
              <AttachMoneyIcon style={{ fontSize: 40 }} />
            </div>
            <div className="cardContent">
              <p>REVENUE</p>
              <h3>₹{totalRevenue?.toLocaleString()}</h3>
            </div>
          </div>


          <Link to="/admin/orders" className="dashboardCard orangeCard">

            <div className="cardIcon">
              <ShoppingCartIcon style={{ fontSize: 40 }} />
            </div>
            <div className="cardContent">
              <p>SALES</p>
              <h3>{orders.length}</h3>
            </div>
          </Link>

          <Link to="/admin/products" className="dashboardCard blueCard">

            <div className="cardIcon">
              <CategoryIcon style={{ fontSize: 40 }} />
            </div>
            <div className="cardContent">
              <p>PRODUCTS</p>
              <h3>{products.length}</h3>
            </div>

          </Link>

          <Link to="/admin/users" className="dashboardCard greenCard">

            <div className="cardIcon">
              <PeopleIcon style={{ fontSize: 40 }} />
            </div>
            <div className="cardContent">
              <p>Users</p>
              <h3>{users.length}</h3>
            </div>

          </Link>


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

        <div className="chartArea">
          <div className="chartCard">
            <Typography component="h2">Product Stock Status</Typography>
            <Doughnut data={stockState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
