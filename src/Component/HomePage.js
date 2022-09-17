import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import "./HomePage.css";
import FilterItem from "./FilterItem";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
const datas = require("../asset/data.json");
const HomePage = () => {
  const [list, setList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    if (searchResult.length > 0) {
      setList(searchResult.slice(0, 6));
    }

    setList(datas.slice(0, 6));
  }, [searchResult]);
  return (
    <div className="main-homepage">
      <Header />
      <div className="sec-div">
        <h1>Search Properties on Rent </h1>
        <Search list={list} setSearchResult={setSearchResult} />
      </div>
      <FilterItem  list={list} />
      {searchResult.length !== 0 ? (
        <div className="product-div">
          {searchResult.map((data) => {
            return <ProductPage data={data} />;
          })}
        </div>
      ) : (
        <div className="product-div">
          {list.map((data) => {
            return <ProductPage data={data} />;
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};
export default HomePage;
