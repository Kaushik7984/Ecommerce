import React, { Fragment, useEffect, useState } from "react";

import "./Home.css";
import MetaData from "../layout/MetaData";
import ProductCard from "./ProductCard";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import toast from 'react-hot-toast';
import ToastContainer from "./ToastContainer";
import { Details, ExpandMore, Mouse, UnfoldMore } from "@material-ui/icons";
import { Button } from "@material-ui/core";

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
        <Fragment>
            <ToastContainer />

            <MetaData title={"Home"} />
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
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
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
