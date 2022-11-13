const axios = require('axios');

const express = require('express');
const router = express.Router();

router.get('/plus', function (request, response) {       //  /plus라우터 기능정의및등록
  /* /plus객체가가진 req res
  c 가보낸정보 req에잇다
  res > html 을 c 에게 응답 */
  console.log(request.query.num1);
  let inp = request.query.num1

  const spawn = require("child_process").spawn;
  const outp = spawn("python", ["talkmodel.py", inp]);
  outp.stdout.on("data", (result) => {
    console.log(result.toString());
    
    /* response.json('<p>some html</p>'+result.toString()) */
    response.send('<p>some html</p>'+result.toString())
  });
});
module.exports = router; //라우터를외부에서사용할수있게



/* const spawn = require("child_process").spawn; */
/* 
let inp = "1";
const outp = spawn("python", ["talkmodel.py", inp]);

outp.stdout.on("data", (result) => {
  console.log(outp.toString());
});

function Tmodel() {
  return (
    <>
      Tmodel page
      <input></input>
    </>
  );
}
export default Tmodel;
 */

/* const spawn = require("child_process").spawn;
const outp = spawn("python", ["talkmodel.py", '기분 좋아']);
outp.stdout.on("data", (result) => {
  console.log(outp.toString());
}); */



/* import { spawn } from "child_process"; */




    //return result.toString()
    /* document.getElementById('result').innerHTML=result.toString() */



  //200은정상응답이란뜻                    html로응답
/*   response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  response.write('<html>')
  response.write('<body>')
  response.write('<h1>응답성공</h1>')
  response.write('결과값' + (parseInt(request.query.num1)))
  response.write('결과값문자' + ((request.query.num1)))
  response.write('결과값변수' + inp)
  //response.write('아웃풋' + oup)
  response.write(
    '<p id="result"></p>'
    )

  response.write('</body>')
  response.write('</html>')
  response.end(); */




