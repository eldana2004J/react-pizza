import React, { useState } from "react";

const Categories = ({ value, onClickCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Острые",
    "Вегетарианская",
    "Острые",
    "Закрытые",
  ];
  const setActive = (index) => {
    setActiveIndex(index);
  };
  const categoriesElem = categories.map((item, index) => (
    <li
      onClick={() => onClickCategory(index)}
      className={value === index ? "active" : ""}
      key={item}
    >
      {item}
    </li>
  ));
  return (
    <div className="categories">
      <ul className="categories__list">{categoriesElem}</ul>
    </div>
  );
};

export default Categories;
