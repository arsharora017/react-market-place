import React from "react";
import "./CategorySection.css";
import ItemCard from "./ItemCard";

const CategorySection = (props) => {
  const { category } = props;

  const getItemCards = () => {
    const itemCards = [];
    for (let i = 0; i < category.items?.length; i++) {
      itemCards.push(
        <div key={category.items[i].id} className="item-card-wrapper">
          <ItemCard item={category.items[i]} />
        </div>
      );
    }
    return itemCards;
  };

  return (
    <div className="items-section-wrapper">
      <h3>{category.categoryName}</h3>
      <div className="grid-items">{getItemCards()}</div>
    </div>
  );
};

export default CategorySection;
