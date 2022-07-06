import React from "react";
import "../App.css";

const Navbar = ({ filterItem, uniqueList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueList.map((currElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currElement)}
              >
                {currElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
