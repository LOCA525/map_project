import "./style.css";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="tab1">
          <div className="logo">로고</div>
          <div className="title">스게더</div>
        </div>

        <div className="search">
          <form action="submit">
            <input placeholder="지역을 검색하렴 ^^" className="searchInput"></input>
            <button type="submit">검색!!</button>
          </form>
        </div>

        <div className="tab2">
          <div className="alarm">알림</div>
          <div className="myPage">Mypage</div>
          <div className="login">로그인</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
