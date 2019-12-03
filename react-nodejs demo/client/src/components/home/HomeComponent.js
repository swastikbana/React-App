import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome to Home..Take me to <Link to="/about"> About</Link>
    </div>
  );
};

export default Home;
