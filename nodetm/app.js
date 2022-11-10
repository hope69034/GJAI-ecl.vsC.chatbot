//[기본]app변수로 express구동 [기본]
const express = require('express');
const app = express();
//[기본]라우터경로
const router=require('./tm.js');
//[기본]바디파서
 

 
// 아직 안씀

/* const sessionrouter=require('./router/sessionrouter.js');
app.use(sessionrouter);
app.use(express.static('./public')) */
    

//[기본]라우터구동
app.use(router);  //미들웨어로 라우터를 등록해주기
//[기본]포트설정 127.0.0.1.3001
app.listen(3001);  // 현재 서버파일의 port번호설정


