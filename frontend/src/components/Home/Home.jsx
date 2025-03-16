import { useEffect, useState } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import ProductCard from "./ProductCard";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";
import toast from 'react-hot-toast';
import ToastContainer from "./ToastContainer";
import { UnfoldMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(state => state.products);
    const [hasShownError, setHasShownError] = useState(false);

    useEffect(() => {
        if (error && !hasShownError) {
            toast.error(error);
            setHasShownError(true);

            const timer = setTimeout(() => {
                dispatch(clearErrors());
                setHasShownError(false);
                window.location.reload();
            }, 5000);

            return () => clearTimeout(timer);
        }

        dispatch(getProduct());
    }, [dispatch, error, hasShownError]);

    return (
        <>
            <ToastContainer />

            <MetaData title={"Home"} />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="banner">
                        <img src="/logo.png" alt="" />
                        <p>Welcome to Ecommerce</p>
                        <h1>FIND AMAZING PRODUCTS BELOW</h1>

                        <a href="#container">
                            <Button>
                                Scroll<UnfoldMore />
                            </Button>
                        </a>
                    </div>
                    <h2 className="homeHeading">Featured Products</h2>

                    <div className="container" id="container">
                        {products && products.map(product => (
                            <ProductCard key={product._id} product={product} />

                        ))}
                    </div>
                    <div className="container">

                        <Link to="/products">
                            <Button style={{boxShadow:"1px 1px 1px 1px"}}>View more products...</Button>
                        </Link>

                    </div>

                </>
            )}
        </>
    );
};

export default Home;
