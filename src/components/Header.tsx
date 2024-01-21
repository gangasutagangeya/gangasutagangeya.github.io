import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="flex flex-row sticky top-0 pl-5 py-5 text-white bg-green-800">
      <div className="basis-1/2">Sreedhar Reddy Ortho Hospital</div>
      <div className="basis-1/2 flex">
        <div>Home</div>
        <div>Meet Dr.Sreedhar Reddy</div>
        <div>Our Specialities</div>
        <div>Gallery</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Header;
