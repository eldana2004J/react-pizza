import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";

import PizzaList from "../components/pizza/PizzaList";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort";

import { setCategoryId } from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

import { SearchContext } from "../App";
const HomePage = () => {
  const isSearch = useRef(false);
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const [pizzas, setPizzas] = useState([]);
  const { searchValue } = useContext(SearchContext);
  // const [categoryId, setCategoryId] = useState(0);

  const fetchPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const Api = `https://63ff0b5ec5c800a7238a4ae1.mockapi.io/react-pizza?${category}${search}`;
    try {
      await axios.get(Api).then((resp) => {
        console.log(resp);
        const data = resp.data;
        setPizzas(data);
      });
    } catch (error) {
      alert("Ошибка при получении пицц");
    }
  };

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, searchValue]);
  return (
    <div className="container pizza">
      <div className="categories__box-sort">
        <Categories
          value={categoryId}
          onClickCategory={(index) => onChangeCategory(index)}
        />
        <Sort />
      </div>
      <PizzaList data={pizzas} />
    </div>
  );
};

export default HomePage;
