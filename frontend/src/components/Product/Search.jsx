import { useState,    } from "react";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
   <>
      <MetaData title="Search A Product" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
