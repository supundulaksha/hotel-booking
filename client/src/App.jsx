import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>
  );
};

export default App;
