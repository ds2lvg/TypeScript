/** callback
 * 넘길 수 있는 실행 가능한 코드 조각
 * 원하는 시간이나 조건에 그 코드 조각이 실행되기 원할때 사용
 */
var callback = function () {
    alert("callback in var was executed!");
};
setTimeout(callback, 1500);
//변수에 담지 않고 바로 사용 가능
setTimeout(function () {
    alert("direct callback was executed");
}, 3000);
/** popup */
console.log(prompt("what's your name? = prompt();"));
if (confirm("pop-up another one? = confirm();")) {
    alert("pop-up from alert command = alert();");
}
