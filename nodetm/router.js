/* else{%>         
  나 : <%=userInput%> <br><br>
  그리니 : <%=greeniOutput%>  <br><br>
  타입인풋 : <%=typeof(userInput)%> 
  <%}%> */









/*      나 :# <%=userInput%> <br>
   그리니 : <%=greeniOutput%>    */

/*    <% if(<%=userInput%> == "undefined"){ %>
    상담사 그리니입니다. 무슨 고민이 있으세요?
    <%}  else {%>
  
나 : <%=userInput%> <br><br>
그리니 : <%=greeniOutput%>   
   
<%} %> */




const axios = require('axios');

const express = require('express');
const router = express.Router();

/* router.get('/',  function (req, res) {
res.redirect('http://127.0.0.1:5501/nodetm/public/00.Main.html')
}  */

router.get('/Greeni', function (req, res) {    
  let userInput = req.query.userInput
  const spawn = require("child_process").spawn;
  const outp = spawn("python", ["talkmodel.py", userInput]);
  console.log('greeni라우터진입: 나 : '+ userInput + ', 타입: ' + typeof(userInput))
  outp.stdout.on("data", (result) => {
    console.log('그리니 : '+result.toString());
    res.render("greeniTalk", {
      //email: request.session.email
      /* user: request.session.user, */
      userInput: userInput,
      greeniOutput: result.toString(),
    });
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




