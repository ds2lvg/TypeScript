// 조건문 문법은 자바스크립트랑 동일
/* if */
var kor = 60;
var eng = 80;
if (kor > 70 && eng > 70) {
    alert("you're an excellent student");
}
else {
    alert("you should study more");
}
/* switch */
var score = 'C';
switch (score) {
    case 'A':
        console.log("you got an A");
        break;
    case 'B':
        console.log("you got an B");
        break;
    case 'C':
        console.log("you got an C");
        break;
    case 'D':
        console.log("you got an D");
        break;
    default:
        console.log("You didn't get any score");
        break;
}
