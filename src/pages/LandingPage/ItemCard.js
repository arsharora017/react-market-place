import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";
import { PrimaryButtonOutline } from "../../components/Button/Button";
import "./ItemCard.css";

const ItemCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const { item } = props;

  const price = `$${item.price}`;

  return (
    <div className="card">
      <div className="card__body">
        <img src={item.img} alt={item.title} className="card__image" />

        <div className="title-price-wrapper">
          <div className="card__title">{item.title}</div>

          <div className="card__price">{price}</div>
        </div>
        <div className="card__writer">{item.writer}</div>
      </div>
      <PrimaryButtonOutline
        rootClass="btn-item"
        text="Add to Cart"
        onClick={() => {
          showModalHandler();
        }}
      ></PrimaryButtonOutline>
      {showModal && <AddToCartModal item={item} onClose={hideModalHandler} />}
    </div>
  );
};

export default ItemCard;
