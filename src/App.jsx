import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RestaurantForm from "./components/Form";
import data from "./csvjson.json";

function App() {

  return (
    <>
      <RestaurantForm />
    </>
  );
}

export default App;
