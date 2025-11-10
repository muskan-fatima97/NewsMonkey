import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "./App.css";

function App() {
  const [category, setCategory] = useState("home"); 
  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  return (
    <div>
      <NavBar onCategoryChange={handleCategoryChange} />
      <News category={category} />
    </div>
  );
}

export default App;
