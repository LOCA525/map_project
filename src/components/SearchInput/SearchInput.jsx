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
    dispatch(changePlace(searchValue + "꽃집"));
    setSearchValue("");
  };
  return (
    <div className="search">
      <form action="submit" onSubmit={onSubmit}>
        <div className="selectBox">
          <select name="searchSelect" className="select">
            <option value="지역">지역</option>
            <option value="키워드">키워드</option>
          </select>
        </div>

        <input
          placeholder="장소, 버스, 지하철, 도로검색"
          className="searchInput"
          value={searchValue}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default SearchInput;
