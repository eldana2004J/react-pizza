import React, { useState } from "react";

const PizzaItem = ({ category, id, imageUrl, price, sizes, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);
  const type = ["тонкое", "традиционное"];

  const setActive = (index) => {
    setActiveIndex(index);
  };
  const activeSizeClick = (index) => {
    setActiveSizeIndex(index);
  };
  const pizzaPlus = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const typesElem = type.map((item, index) => (
    <li
      onClick={() => setActive(index)}
      className={`${activeIndex === index ? "active" : ""} pizza__item-size`}
      key={item}
    >
      {item}
    </li>
  ));
  const sizesElem = sizes.map((item, index) => (
    <li
      onClick={() => {
        activeSizeClick(index);
      }}
      className={`${
        activeSizeIndex === index ? "active" : ""
      } pizza__item-size`}
      key={item}
    >
      {item} см
    </li>
  ));
  return (
    <li className="pizza__item">
      <img className="pizza__img" src={imageUrl} alt="" />{" "}
      <h2 className="pizza__h2">{title}</h2>
      <div className="pizza__wrapper">
        <div className="pizza__bckg">
          <ul className="pizza__list-size">{typesElem}</ul>
          <ul className="pizza__list-size"> {sizesElem}</ul>
        </div>
        <div className="pizza__inner">
          <p>от {price} ₽</p>

          <button className="pizza__btn" onClick={pizzaPlus}>
            <span className="pizza__plus">+</span> Добавить {pizzaCount}
          </button>
        </div>
      </div>
    </li>
  );
};

export default PizzaItem;
