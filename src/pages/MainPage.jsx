import Nav from "../components/Nav/Nav";
import "./style.css";
import MapContainer from "../components/Map/MapContainer";
import SearchList from "../components/SearchList/SearchList";

const MainPage = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <SearchList />
        <MapContainer />
      </div>
    </>
  );
};

export default MainPage;
