import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
