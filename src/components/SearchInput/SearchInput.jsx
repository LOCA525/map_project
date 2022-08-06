import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { changePlace } from "../../store";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(changePlace(searchValue));
    setSearchValue("");
  };
  return (
    <div className="search">
      <form action="submit" onSubmit={onSubmit}>
        <input placeholder="지역을 검색하렴 ^^" className="searchInput" value={searchValue} onChange={onChange} />
        <button type="submit">검색!!!!!!</button>
      </form>
    </div>
  );
};

export default SearchInput;
