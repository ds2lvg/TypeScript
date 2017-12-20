var Test = function() {
    var num1 = 1; // private
    var num2 = 2; // private

    var plus = function(){
        return num1 + num2;
    }
    
    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        alert("Test의 속한 메서드 plus()는 "+plus()); // 내부에서만 접근이 가능함
        alert(param2);
    }
}

var Test2 = function() {
    this.test = "1";
    this.alertStr = function(){
        alert("나는 테스트2의 alertStr입니다 \n t.test는 "+t.test);
    }
}

// json 방식
var obj = {
    test : "1",
    test1 : "2"
};

obj["test"] = "1"; // = obj.test = "1";
alert(obj["test"]);
obj.test1 = "2";
alert(obj["test1"]);
// list : name[index]
// map : key : value


/*
// JS는 무조건 오버라이딩(오버로딩 개념이 없음!)
function Test3(p1, p2, p3) {
    alert("난 p1, p2, p3");
}

function Test3(p1) {
    alert("난 p1만");
}

// 오버라이딩이기때문에 아래 코드랑 같음
// var Test3 = function (p1, p2, p3) {
//     alert("난 p1, p2, p3");
// }
// Test3 = function (p1) {
//     alert("난 p1만");
// }

//Test3(1,2,3); // 재정의가 되므로 Test3(p1)만 실행됨

//밖에서 쓰는 this는 bom의 루트인 window 객체
// this.alert("asdf");

*/