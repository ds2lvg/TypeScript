/** Interface
 * interface = object 에 대한 타입만 지정해놓은 것
 */
var man = {
    name: "Jongmin",
    move: function () { }
};
var woman = {
    name: "Sulhyun",
    age: 22,
    move: function () { }
};
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
