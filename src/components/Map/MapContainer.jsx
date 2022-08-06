import { useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { changeData } from "../../store";

const MapContainer = () => {
  const dispatch = useDispatch();
  const { kakao } = window;
  const place = useSelector((state) => {
    return state.place;
  });

  useEffect(() => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("myMap");

    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(place, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        dispatch(changeData(data)); // 날아온 데이터 값을 스토어(리덕스툴킷) 안에 보관
        console.log("데이터", data); //검색 후 데이터 날라옴

        map.setBounds(bounds);
      }
    }
    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      }); // 마커에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
        infowindow.open(map, marker);
      });
    }
  }, [place]);

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
