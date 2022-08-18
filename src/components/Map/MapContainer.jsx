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
    /////////////
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    // var marker = new kakao.maps.Marker({
    //   position: markerPosition,
    //   image: markerImage, // 마커이미지 설정
    // });
    // marker.setMap(map);
    ////////////
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
        image: markerImage, // 마커이미지 설정
      }); // 마커에 클릭이벤트를 등록
      marker.setMap(map);

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
