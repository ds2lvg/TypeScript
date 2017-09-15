/* function
타입스크립트는 함수에도 Type을 설정할 수 있음
Arrow function => 도 사용 가능함
*/
function sayMyName(name) {
    alert('name : ' + name);
    console.log('function sayMyname was called');
}
function addTwoNumber(a, b) {
    return a + b;
}
addTwoNumber(2, 3); // Nothing happens
alert(addTwoNumber(2, 3));
// 여러가지 함수 선언방식
// Basic
var f1 = function (i) { return i * i; };
// [Type X] Basic
var f2 = function (i) { return i * i; };
// Arrow function Basic
var f3 = function (i) { return i * i; };
// [Type X] Arrow function
var f4 = function (i) { return i * i; };
// [Type X] Arrow function abbreviation
var f5 = function (i) { return i * i; };
