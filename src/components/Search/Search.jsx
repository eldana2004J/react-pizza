import React from "react";
import { useContext, useState } from "react";
import { SearchContext } from "../../App";
import { debounce } from "lodash";
const Search = () => {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 700),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <>
      <div>
        <input
          ref={inputRef}
          placeholder="Поиск пиццы"
          type="text"
          value={value}
          onChange={onChangeInput}
        />
        {value && <span onClick={onClickClear}>x</span>}
      </div>
    </>
  );
};

export default Search;
