/* function
타입스크립트는 함수에도 Type을 설정할 수 있음
Arrow function => 도 사용 가능함
*/
function sayMyName(name: string) {
    alert('name : ' + name);
    console.log('function sayMyname was called');
}

function addTwoNumber(a: number, b: number) {
    return a + b;
}
addTwoNumber(2, 3); // Nothing happens
alert( addTwoNumber(2,3) );

// 여러가지 함수 선언방식
// Basic
var f1 = function(i: number): number {return i * i }
// [Type X] Basic
var f2 = function(i: number) {return i * i }
// Arrow function Basic
var f3 = (i: number): number => {return i * i }
// [Type X] Arrow function
var f4 = (i: number) => {return i * i }
// [Type X] Arrow function abbreviation
var f5 = (i: number) => i * i;
