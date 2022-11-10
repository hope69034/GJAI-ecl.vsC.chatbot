import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// 아바타 바꾸기
import greenihead from '../img/greenihead.png'
const botAvatar = greenihead

//채팅창 css
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#009688',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#009688',
  botFontColor: '#fff',
  userBubbleColor: '#2196f3',
  userFontColor: '#fff',
};

function abc(){
  return 'abc'
}

let listA = [];
if (true){
  let objA = {}
  objA['id'] = 1
  objA['message'] = '안녕하세요 AI 비서 그리니입니다'
  objA['trigger'] = abc()
  listA.push(objA)
}
const steps = listA


// const steps = [

  

//   {
//     id: '1',
//     message: '배달 시킬래? 맛집 추천해 줄까?',
//     trigger: '2',
    
//   },
//   {
//     id: '2',
//     options: [
//       { value: 1, label: '배달 시킬래~', trigger: '3' },
//       { value: 2, label: '맛집 추천해줘!', trigger: '4' },
//     ],
//   },

//   {
//     id: '3',
//     message: '또 배달이야? 맛있겠다... 배민 연결!!!',
//     end: true,
//   },

//   {
//     id: '4',
//     message: '맛집 골라봐~',
//     end: true,
//   },
// ];

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
    className='chatbot'  //클래스네임(CSS를위한)
    steps={steps}       //인풋아웃풋대본
    botAvatar={botAvatar}
    />;


  </ThemeProvider>
  </>
  )
}

export default Greeni;