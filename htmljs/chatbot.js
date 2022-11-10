var p = document.getElementsByTagName('p');
var body = document.getElementsByTagName('body');
var box = document.getElementsByClassName("box");
var repeat = document.getElementById("dog_saying");
var n = 0;


function aa(inp){
    const spawn = require('child_process').spawn;
    let userinput = inp
    const result_02 = spawn('python', ['talkmodel.py', userinput]);
    result_02.stdout.on('data', (result)=>{
        console.log(result.toString());
    });
}


function check_text() {
    var value = document.getElementById("message").value;
    aa('aa')
    /* 
    const spawn = require("child_process").spawn;
    const result_02 = spawn("python", ["talkmodel.py", '1']);
     */
   /*  result_02.stdout.on('data', (result)=>{
   
        console.log(result.toString());
       
    }); */

    console.log(123)
    console.log(value)
}

/* const spawn = require("child_process").spawn;
const result_02 = spawn("python", ["talkmodel.py", value]);

result_02.stdout.on('data', (result)=>{

    console.log(result.toString());
   
}); */