/** Interface
 * interface = object 에 대한 타입만 지정해놓은 것
 */

//여러 개의 함수와 변수들이 구조적으로 어떻게 결합되어야 하는지 설계(약속)
 interface Person {
     name : string;
     age? : number; // ? = optional member
     move() : void;
 }

 var man : Person = {
    name: "Jongmin",
     move: function() {}
 }

 var woman : Person = {
     name: "Sulhyun",
     age:22,
     move: () => {}
 }

 // 하나의 함수가 가져야 할 구조에 대한 설계(약속)
interface SerchFunc {
    // string 타입의 매개 변수 2개를 만들고 return 타입은 boolean으로 하시오
    (source: string, substring: string): boolean;
}

var mySearch : SerchFunc;
mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1;
}

