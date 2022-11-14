// es7 react~설치
// rafce 엔터 리액트 에로우펑션 컴포넌트
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div>
      Header lane
      <Link to="./"><button>Main</button></Link> 
      <Link to="./Greeni"><button>Greeni</button></Link>
    </div>
  );
};

export default Header;
