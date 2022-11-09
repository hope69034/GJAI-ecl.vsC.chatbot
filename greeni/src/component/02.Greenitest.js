/*  문제접
주고받는방법

*/

import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

//test
import Test01 from "./03.Test01";

// 아바타 바꾸기
import greenihead from "../img/greenihead.png";
const botAvatar = greenihead;

// 게임 구현
/* 1. 유저가 인풋으로  게임이름을 말했을 때 게임 발동방법
 */

//문제점

//채팅창 css
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#009688",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#009688",
  botFontColor: "#fff",
  userBubbleColor: "#2196f3",
  userFontColor: "#fff",
};

 

const steps = [
  {
    id: "1",
    message: "게임을 시작합니다.",
    trigger: "2",
  },

  {
    id: '2',
    component: (
      <div> <Test01></Test01></div>
    ),
    end: true,
  },

 

  /*  {
    id: '4',
    user: true,
    trigger: '5',
  }, */
];

/* const Greeni = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
); */

/*   if ( {previousValue} == '가위바위보' ) {
   console.log()
}  */

function Greenitest() {
  return (
    <>
      <h1>greeni test page</h1>

      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="그리니" //채팅창 타이틀
          className="chatbot" //클래스네임(CSS를위한)
          steps={steps} //인풋아웃풋대본
          botAvatar={botAvatar}
        />
        ;
      </ThemeProvider>
    </>
  );
}

export default Greenitest;
