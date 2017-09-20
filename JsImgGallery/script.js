// Json파일에서 이미지 리스트 받아와서 뿌려주는것까지

// HttpRequest 객체 생성
var req = new XMLHttpRequest();

// open("HttpRequest메소드", "경로")
req.open("GET", "./json/image_list.json");

// readyState가 변할 때마다 호출되는 콜백 함수
req.onreadystatechange = function() {
    // 모든 데이터가 정상적으로 수신되었다면
    if(this.readyState == 4) {
       //console.log(this.response);
        var data = JSON.parse(this.response);
        for(var i = 0; i <data.length; i++) {
            // Json응답 갯수만큼 div 생성   
            var div = document.createElement("div");
            // div에 클래스 설정
            div.setAttribute("class","image");

            // 이미지 클릭했을때 CSS효과가 toggle 되는거 구현
            div.onclick = function(){
                // class에서 image-selected가 있다면 
                if(this.getAttribute("class").indexOf("image-selected") == -1){
                    this.setAttribute("class", "image image-selected");
                }else {
                    this.setAttribute("class", "image");
                }
                // IE 미지원 this.classList.toggle("image-selected");
                
            }
            // 마우스 오버시
            div.onmouseover = function(){
                //setTimeout 안에 this가 div를 가리키도록 외부에 적어줌
                var element = this;
                // mouseout 될때 duration을 초기화 하기 위해 this.timeId에 담음 
                this.timeId = setTimeout( function(){
                    element.setAttribute("class", "image image-magnified");
                },300);
            }
            div.onmouseout = function(){
                // mouseout되면 커지는데 걸리는 시간(duration)을 초기화해 잔상없앰
                clearTimeout(this.timeId)
                // 여기 this는 setTimeout 안에 있지 않기 때문에 div를 가리킴
                this.setAttribute("class", "image");
            }

            var img = document.createElement("img");
            // 각각 이미지 주소는 json에 적혀있음
            img.src = data[i];
            // div뒤(안)에 img태그 삽입
            div.appendChild(img)
            // body 태그 안에 방금 만든 div 태그 삽입
            document.body.appendChild(div);
       }
       
    }
}
req.send();


function selectAll(btn){
    var images = document.getElementsByClassName("image");
    for(var i = 0; i< images.length; i++) {
        // "Unselect All" 버튼 클릭시 이미지 전체 선택 해제 
        if (btn.value == "Unselect All") {
            images[i].setAttribute("class", "image");
            // IE 미지원 images[i].classList.remove("image-selected");
        
        // "Select All"버튼클릭시 이미지 전체 선택
        } else {
            images[i].setAttribute("class", "image image-selected");
            // IE 미지원 images[i].classList.add("image-selected");
        }
    }
    // 버튼안에 글씨 토글변경
    if (btn.value == "Unselect All") {
        btn.value = "select All";
    } else {
        btn.value = "Unselect All";
    }
}


function slideShow(btn){
    var images = document.getElementsByClassName("image");
    var index = 0;
    images[0].setAttribute("class", "image image-magnified");
    //images[0].classList.add("image-magnified");
    
    var intervalID = setInterval( function() {
        images[index].setAttribute("class", "image");
        //images[index].classList.add("image-magnified");
        index++;
        if(index < images.length) {
            images[index].setAttribute("class", "image image-magnified");
            //images[index].classList.remove("image-magnified");
        } else {
            clearInterval(intervalID);
        }

    }, 1000);

}