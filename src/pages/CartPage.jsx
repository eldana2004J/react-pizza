import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const CartPage = () => {
  const [pizzaDelet, setPizzaDelet] = useState();
  const [pizzaCount, setPizzaCount] = useState(0);
  const pizzaPlus = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const pizzaMinus = () => {
    setPizzaCount(pizzaCount - 1);
  };
  const [pizza, setPizza] = useState([
    {
      id: 1,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
      title: "Сырная",
      types: [0],
      sizes: [26, 40],
      price: 245,
      category: 1,
      rating: 6,
    },
  ]);

  const pizzaElem = pizza.map((item) => (
    <li className="cart__item">
      <div className="cart__wrapper">
        {" "}
        <img className="cart__item-img" src={item.imageUrl} alt="#" />
        <div>
          <h2 className="">{item.title}</h2>
          <p className="cart__item-p">тонкое тесто,26см</p>
        </div>
      </div>

      <div className="cart__wrapper">
        {" "}
        <button className="cart__plus" onClick={pizzaPlus}>
          +{" "}
        </button>
        {pizzaCount}
        <button className="cart__plus" onClick={pizzaMinus}>
          -
        </button>
      </div>
      <div className="cart__box">
        {" "}
        <h3>{item.price}₽</h3>
        <button className="cart__del">
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37339 8.74791 0.959458C8.33398 0.545528 7.66277 0.545528 7.24884 0.959458L5.00024 3.20806L2.75164 0.959458C2.33771 0.545528 1.66651 0.545528 1.25258 0.959458C0.838648 1.37339 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z"
              fill="#D0D0D0"
            />
          </svg>
        </button>
      </div>
    </li>
  ));

  return (
    <>
      <div className="container">
        <div className="cart">
          <div className="cart__top">
            <h2 className="cart__title">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z"
                  stroke="#3F3F3F"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z"
                  stroke="#3F3F3F"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825"
                  stroke="#3F3F3F"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Корзина
            </h2>
            <div className="cart__top2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="cart__s">Очистиь карзину</span>
            </div>
          </div>

          <ul></ul>
        </div>
        <div>{pizzaElem}</div>
        <div className="cart__b">
          <span className="cart__pizza">Всего пицц: 3 шт.</span>
          <span className="cart__pop">
            Сумма заказа:<p className="cart__w">900₽</p>
          </span>
        </div>
        <div>
          <button className="cart__btn">
            <Link className="cart__btn-l" to="/">
              Вернуться назад
            </Link>
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default CartPage;
