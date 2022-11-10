// 1. child-process모듈의 spawn 취득
/* const spawn = require('child_process').spawn;
 */
// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
/* const result = spawn('python', ['talkmodel.py']);
 */

// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
/* result.stdout.on('data', function(data) {
    console.log(data.toString());
}); */

// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
/* result.stderr.on('data', function(data) {
    console.log(data.toString());
}); */


const spawn = require('child_process').spawn;

let inp = '1';
const outp = spawn('python', ['talkmodel.py', inp]);

outp.stdout.on('data', (result)=>{
    console.log(result.toString());
});



function Makecb() {
  return (
      <>
     Makecb page
<input></input>
      </>
  )
}
export default Makecb