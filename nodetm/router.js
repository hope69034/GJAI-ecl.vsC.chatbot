const express = require('express');
const router = express.Router();

router.get('/Greeni', function (req, res) {    
  let userInput = req.query.userInput
  const spawn = require("child_process").spawn;
  const outp = spawn("python", ["talkmodel.py", userInput]);
  console.log('greeni라우터진입: 나 : '+ userInput + ', 타입: ' + typeof(userInput))
  outp.stdout.on("data", (result) => {
    console.log('그리니 : '+result.toString());
    res.render("greeniTalk", {
      userInput: userInput,
      greeniOutput: result.toString(),
    });
  });
});

module.exports = router;