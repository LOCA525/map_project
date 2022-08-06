import SearchInput from "../SearchInput/SearchInput";
import "./style.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="tab1">
        <div className="logo">로고</div>
        <div className="title">스게더</div>
      </div>

      <SearchInput />

      <div className="tab2">
        <div className="alarm">알림</div>
        <div className="myPage">Mypage</div>
        <div className="login">로그인</div>
      </div>
    </div>
  );
};

export default Nav;
