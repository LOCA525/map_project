import "./style.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      {item.place_name}
      <br></br>
      {item.road_address_name}
      <br></br>
      {item.address_name}
      <br></br>
      {item.phone}
    </div>
  );
};

export default SearchItem;
{
  /* <img src='https://picsum.photos/250/250'/> */
}
