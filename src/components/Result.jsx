import React, { useEffect, useState } from "react";


export const Result = ({ prefCuisine,price,cuisine }) => {

const styleText ={
    display:'flex', justifyContent:'space-between'
    
}

  return (
    <div>
      <h1>Recommendation Model</h1>
      <div>
        {/* Pref Location */}
        <div>
          <h2>Cuisine :</h2>
          <div style={{display:'flex', width:'80%' , justifyContent:'space-between'}}>
            <div style={{fontSize:'20px'}} id="location">
              <h3>Prefered Price for 1 :</h3>
              <h6>Based on Your prefered Location</h6>
              <div>
                <div>
                  <h4 style={styleText}>Average Price for 1 :<span>{prefCuisine?.price}</span> </h4>
                  
                </div>
                <div>
                  <h4 style={styleText}>Popular Cuisine : <span>{prefCuisine?.Cuisine}</span></h4>
                </div>
                <div>
                  <h4 style={styleText}>Most Popular Restaurant : <span>{prefCuisine?.Restaurant_Name}</span></h4>
                </div>
                <div>
                  <h4 style={styleText}>Serves : <span>{prefCuisine?.Restaurant_Name}</span></h4>
                </div>
              </div>
            </div>
            <div id="price" style={{fontSize:'20px'}}>
              <h3>Prefered Price for 1 : </h3>
              <h6>Reccomendations</h6>
              <div>
                <h4 style={styleText}>Reccomended Price : <span>{price?.price}</span></h4>
              </div>
              <div>
                <h4 style={styleText}>Reccomended Location : <span>{price?.location}</span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
