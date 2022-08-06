import "./style.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      {item.address_name}
      {item.place_name}
    </div>
  );
};

export default SearchItem;
