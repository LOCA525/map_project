import { useEffect } from "react";

import "./style.css";

const MapContainer = () => {
  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "100%",
        height: "calc(100vh-80px)",
      }}
    ></div>
  );
};
export default MapContainer;
