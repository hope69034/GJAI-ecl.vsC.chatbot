
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


const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.redirect('http://127.0.0.1:5501/nodetm/public/00.Main.html')
});

module.exports = router; //라우터를외부에서사용할수있게