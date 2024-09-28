import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
// import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";



const Home = () => {

    return (
        <Fragment>
            <MetaData title={"Home"}/>
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
               {/* <ProductCard />  */}
            </div>
        </Fragment>
    );
};

export default Home;
