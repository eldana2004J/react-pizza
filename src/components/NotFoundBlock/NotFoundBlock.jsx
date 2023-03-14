import React from "react";
import imgPerson from "../../assets/img/vector.png";

export default function NotFoundBlock() {
  return (
    <>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={imgPerson} alt="person-cart" />
    </>
  );
}
