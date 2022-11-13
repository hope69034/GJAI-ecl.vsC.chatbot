import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

// .py 다루기
//import { spawn } from "child_process";
//import { fork } from "child_process";
//const child_process = require('child_process');


// 아바타 바꾸기
import greenihead from "../img/greenihead.png";
const botAvatar = greenihead;



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

function abc(nn) {
  //let answer = "";

  // const fork = require('child_process').fork
   //const outp = fork("python", ["talkmodel.py", "기분 좋아"]);
  
   //const spawn = require("child_process").spawn;
  //let process = spawn('bash');
  //const outp = spawn("python", ["talkmodel.py", "기분 좋아"]);
 
/*   outp.stdout.on("data", (result) => {
    console.log(result.toString());
  }); */

  return nn;
}
  /*   const spawn = require('child_process').spawn;

let inp = nn
const outp = spawn('python', ['talkmodel.py', inp]);

outp.stdout.on('data', (result)=>{
    console.log(result.toString());
});  */
 

/* let num = 0;
let listA = [];

if (num==0){
  num++
  let objA = {}
  objA['id'] = 1
  objA['message'] = '심리상담을시작합니다'
  objA['trigger'] = 2
  listA.push(objA)
} 
 */
/* if (true){

  let objB = {}
  objB['id'] = 2
  objB['user'] = true
  objB['trigger'] = 3
  listA.push(objB)

  let objC = {}
  objC['id'] = 3
  objC['message'] = abc({previousValue})
  objC['trigger'] = 2
  listA.push(objC)


  
} 
 */

/* const steps = listA
 */

const steps = [
  {
    id: "1",
    message: "상담을 시작합니다",
    trigger: "2",
  },

  {
    id: "2",
    user: true,
    trigger: "3",
  },

  {
    id: "3",
    message: ({ previousValue, steps }) => abc("{previousValue}"),
    trigger: "2",
  },
];

//   {
//     id: '4',
//     message: '맛집 골라봐~',
//     end: true,
//   },

/* const Greeni = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
); */

function Greeni() {
  return (
    <>
      <h1>greeni page</h1>

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

export default Greeni;
