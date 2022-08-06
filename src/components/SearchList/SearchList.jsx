import { useSelector } from "react-redux";
import SearchItem from "../SearchItem/SearchItem";
import "./style.css";

const SearchList = () => {
  const data = useSelector((state) => {
    return state.data;
  });
  console.log("data", data);
  return (
    <div className="searchBox">
      {data.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchList;
