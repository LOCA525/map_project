import Nav from "../components/Nav/Nav";
import "./style.css";
import MapContainer from "../components/Map/MapContainer";
import SearchList from "../components/SearchList/SearchList";

const MainPage = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <SearchList />
        <MapContainer />
      </div>
    </div>
  );
};

export default MainPage;
