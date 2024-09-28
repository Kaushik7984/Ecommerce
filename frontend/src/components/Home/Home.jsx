import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from "../layout/MetaData";
import ProductCard from "./ProductCard";


const product = {
    name: "Blue tShirt",
    images: [{ url: "data:image/jpeg;base64,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" }],
    price: "₹2000",
    _id: "kaushik"

}
const Home = () => {

    return (
        <Fragment>
            <MetaData title={"Home"} />
            <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>

                <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>
            <h2 className="homeHeading">Featured Products</h2>

            <div className="container" id="container">
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
                <ProductCard  product={product}/> 
            </div>
        </Fragment>
    );
};

export default Home;
