import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

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

const steps = [
  {
    id: '1',
    message: '안녕',
    end: true,
  },
];

/* const Greeni = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
); */

function Greeni() {

  return (
  <ThemeProvider theme={theme}>
    <ChatBot className='chatbot' steps={steps} />;
  </ThemeProvider>
  )
}

export default Greeni;