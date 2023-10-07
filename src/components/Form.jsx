import React, { useState } from "react";
import { Result } from "./Result";
import data from "../csvjson.json";

const RestaurantForm = () => {
  const [cuisineType, setCuisineType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [prefCuisine, setPrefCuine] = useState([]);
  const [prefPrice, setPrefPrice] = useState([]);
  const [prefLocationCuisine, setPrefLocationCuisine] = useState([]);

  const handleLocation = () => {
    setPrefLocationCuisine(
      data
        .filter((cuis) => cuis.location === location)
        .sort((a, b) => b.delivery_review_number - a.delivery_review_number)[0]
    );
  };


  const handleCuisine = () => {
    setPrefCuine(data.filter((cuis) => cuis.Cuisine.toLowerCase() === cuisineType.toLowerCase()));
  };

  const handlePrice = () => {
    setPrefPrice(data.find((cuis) => cuis.price < price))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLocation();
    handleCuisine();
    handlePrice();
  };

  const inputStyle ={
    padding:'10px'
  }

  const inputCont={
    width:'40%' , display:'flex', justifyContent:'space-between'
  }

  return (
    <>
      <div>
        <h1>Grubhub</h1>
        <form onSubmit={handleSubmit}>
          <div style={inputCont}>
            <label htmlFor="cuisineType">Cuisine Type:</label>
            <input
            style={inputStyle}
              type="text"
              id="cuisineType"
              value={cuisineType}
              onChange={(e) => setCuisineType(e.target.value)}
              required
            />
          </div>
          <div style={inputCont}>
            <label htmlFor="location">Preferred Location:</label>
            <input
            style={inputStyle}
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div style={inputCont}>
            <label htmlFor="price">Price Range:</label>
            <input
            style={inputStyle}
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <Result
          cuisine={prefCuisine}
        //   location={prefLocationCuisine}
          price={prefPrice}
          prefCuisine={prefLocationCuisine}
        />
      </div>
    </>
  );
};

export default RestaurantForm;
