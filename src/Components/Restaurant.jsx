import React, { useState } from "react";
import MenuAPI from "./MenuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList=[
  ...new Set(
    MenuAPI.map((currentElement)=>{
    return currentElement.category
  })),"All"
]

const Restaurant = () => {
  const [menuData, setMenuData] = useState(MenuAPI);
  const filterItem = (category) => {
    if(category === 'All') {
      setMenuData(MenuAPI)
      return
    }
    const updatedList = MenuAPI.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} uniqueList={uniqueList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
