// List.jsx
import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import productsData from "../../Data/products.json";

const List = () => {
  return (
    <div className="list">
      {productsData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
