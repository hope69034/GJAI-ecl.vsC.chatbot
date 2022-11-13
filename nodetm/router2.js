 

  const spawn = require("child_process").spawn;
  const outp = spawn("python", ["talkmodel.py", '기분 좋아']);
  outp.stdout.on("data", (result) => {
    console.log(result.toString());
  });


 