import React from "react";
import { Link } from "react-router-dom";

const About = function () {
  return (
    <div className="page">
      <h1>This is ABOUT page</h1>
      <Link to="/">Go to Home </Link>
    </div>
  );
};

export default About;
