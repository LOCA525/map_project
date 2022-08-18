import "./style.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div
        className="placeName"
        onClick={() => {
          window.open(item.place_url);
        }}
      >
        {item.place_name}
      </div>
      <div className="roadAddress"> {item.road_address_name}</div>
      <div className="address"> {item.address_name}</div>
      <div className="phone"> {item.phone}</div>
    </div>
  );
};

export default SearchItem;
{
  /* <img src='https://picsum.photos/250/250'/> */
}
