import React, { useEffect, useState } from "react";
import "./FilterItem.css";
const FilterItem = ({ list }) => {
  const [price, setPrice] = useState(0);
  const [propertyType, setPropertytype] = useState("");
  const [location, setLocation] = useState("");
  const search = () => {
    return list.filter(
      (li) =>
        li.location.toLowerCase().includes(location) ||
        li.type.toLowerCase().includes(propertyType) ||
        li.price.toLowerCase().includes(price)
    );
  };
  const handleFilterSearch = () => {};

  return (
    <div className="main-filter-div">
      <div className="sec-filter-div">
        <label htmlFor="location" className="label">
          Location
        </label>
        <div className="select-div">
          <select
            onChange={(e) => setLocation(e.target.value)}
            className="select"
          >
            <option value="Canada">Canada</option>
            <option value="Usa">Usa</option>
            <option value="New York">New York</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Banglore">Banglore</option>
          </select>
        </div>
      </div>
      <div className="line"></div>
      <div className="sec-filter-div">
        <label htmlFor="location" className="label">
          When
        </label>
        <div className="select-div">
          <input type="date" />
        </div>
      </div>
      <div className="line"></div>
      <div className="sec-filter-div">
        <label htmlFor="price" className="label">
          Price
        </label>
        <div className="select-div">
          <select onChange={(e) => setPrice(e.target.value)} className="select">
            <option value="$500-$2000">$500-$2000</option>
            <option value="$2000-$3000">$2000-$3000</option>
            <option value="$3000-$4000">$3000-$4000</option>
            <option value="$4000-$5000">$4000-$5000</option>
          </select>
        </div>
      </div>
      <div className="line"></div>
      <div className="sec-filter-div">
        <label htmlFor="type" className="label">
          Property Type
        </label>
        <div className="select-div">
          <select
            onChange={(e) => setPropertytype(e.target.value)}
            className="select"
          >
            <option value="Home & villas">Home & villas</option>
            <option value="Apartment">Apartment</option>
            <option value="Offices">Offices</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>
      <div className="line"></div>
      <button onClick={handleFilterSearch()} className="search-btn">
        Search
      </button>
    </div>
  );
};
export default FilterItem;
