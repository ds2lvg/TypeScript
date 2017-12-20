var Person = function(p_name,p_age, p_gender, p_address) {    
    // this.name(public)과 name(private)은 이름만 같을뿐이지 전혀 다른 변수다
    var name = p_name;
    var age = p_age;
    var gender = p_gender;
    var address = p_address;
    
    // 구조체
    this.writePersonInfo = function(){
        var str = "<br> 이름 : " + name;
        str += "<br> 나이 : " + p_age;
        str += "<br> 성별 : " + p_gender;
        str += "<br> 주소 : " + p_address;
        document.write(str);
    }
    // setter
    this.setName = function(p_name){
        name = p_name;
    }
    // getter
    this.getName = function(p_name){
        return name;
    }
    this.play = function(){
        document.write("<br>" + name + "님께서 놀고 있습니다");
    }
}
// 교재 이름?