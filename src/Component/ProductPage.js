import React from "react";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom";
const ProductPage = ({ data, setFavourite }) => {
  const user = localStorage.getItem("uname");
  const navigate = useNavigate();
  const handleChangeFavourite = () => {
    if (!user) {
      navigate("/login");
    }
  };
  return (
    <div className="main-productpage" key={data.id}>
      <div className="sec-product-div" key={data.id}>
        <div key={data.id}>
          <img className="img" src={data.cover} alt={data.name} />
          <div className="fav-div" key={data.id}>
            <p>{data.price}/month</p>
            <div className="sec-fav-div">
              <label htmlFor="fav">Favourite</label>
              <input type="radio" onChange={handleChangeFavourite} />
            </div>
          </div>
          <p className="type">{data.type}</p>
          <h1> {data.name}</h1>
          <p>{data.location} </p>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
