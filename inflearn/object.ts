// 타입스크립트 객체 생성 = 자바스크립트 객체 생성과 동일
var personObject = {
    firstName : "John",
    lastName : "Smith"
}
// 객체의 멤버 추가
personObject["salary"] = 14000;
// for in 문을 이용해 객체 안(in)의 멤버(member) 조회 가능
for (var member in personObject) {
    // 객체 personObject가 memeber 속성을 보유(hasOwnProperty) 하고 있으면
    if (personObject.hasOwnProperty(member)) {
        console.log("the member '" + member + "' of personObject is '" + personObject[member] +"'");
    }
}
/*
하나의 오브젝트에 iteration (for … in) 을 쓰는 경우, 
그 오브젝트 자체에 속한 속성이 아닌 값이 도출될 수도 있어서. (ex.프로토타입 체인에 있는 속성들)
hasOwnProperty을 사용해서 해당 오브젝트에 속해있는 속성들만 가져올 수 있게 제약을 건다.
*/
