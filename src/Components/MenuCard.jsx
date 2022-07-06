import React from "react";
import "../App.css";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--container">
        {menuData.map((currElement) => {
          const { id, name, read, description, image } = currElement;
          return (
            <div key={id} className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <h2 className="card-author subtle">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">
                    <a href={read} target="_blank" rel="noreferrer">
                      Read
                    </a>
                  </div>
                </div>
                <img src={image} alt={name} className="card-media" />
                <button className="card-tag subtle">Order Now</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
