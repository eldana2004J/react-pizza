import React from "react";
import PizzaItem from "./PizzaItem";
const PizzaList = ({ data }) => {
  const pizzaElem = data.map((item) => {
    return <PizzaItem key={item.id} {...item} />;
  });
 
  return (
    <>
      <ul className="pizza__list">{pizzaElem}</ul>
    </>
  );
};

export default PizzaList;
