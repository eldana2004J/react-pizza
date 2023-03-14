import "./App.css";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";

import "./scss/style.scss";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const SearchContext = createContext();
function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </>
  );
}

export default App;
