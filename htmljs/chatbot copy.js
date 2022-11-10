var p = document.getElementsByTagName('p');
var body = document.getElementsByTagName('body');
var box = document.getElementsByClassName("box");
var repeat = document.getElementById("dog_saying");
var n = 0;


function check_text() {
    var value = document.getElementById("message").value;
    console.log(value);


    if (value == ""){
        p[0].innerHTML = "나랑 놀고 싶지 않은거야...?"
    }


    else if (value == "뭐 하면서 놀고 싶어?") {
        p[0].innerHTML = "너가 원하는 거 아무거나!"
    }


    else if (value == "어떤 놀이를 할 수 있는데?") {
        if(n==0) {
            n++;
            p[0].innerHTML="알고 싶어? 그러면 다시 입력해 봐~";
        }
        else if(n==1) {
            n++;
            p[0].innerHTML="힝 속았지>.@ 한 번만 더 입력해 봐!";
        }
        else {
            p[0].innerHTML="(1)원반던지기 (2)노즈워크 (3)터그놀이";
        }
    }


    else if (value == "원반던지기 할래!") {
        p[0].innerHTML = "그래! 내가 원반을 가져올게~"
    }


    else if (value == "노즈워크 할까?") {
        p[0].innerHTML = "우와 신난다!!"
    }


    else if (value == "터그놀이는 어때?") {
        p[0].innerHTML = "너가 터그를 준비해줘!!"
    }


    else if (value == "다른 놀이는 없어?") {
        p[0].innerHTML = "너가 원하는 걸 말해봐!"
    }


    else if (value == "불 꺼줘") {
        body[0].style.backgroundColor ="black";
    }


    else if (value == "깜깜해.. 다시 불 켜줘!") {
        body[0].style.backgroundColor ="antiquewhite";
    }
    else if (value == "대화창 색을 바꿔볼까?") {
        box[0].style.backgroundColor ="darkgray";
    }
    else if (value == "원래대로 바꾸자!") {
        box[0].style.backgroundColor ="ivory";
    }
    else {
        alert("아직 개발 중 입니다 :) 다시 입력해주세요.");
    }
}