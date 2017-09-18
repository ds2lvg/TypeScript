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
        // 버튼클릭시 이미지 전체 선택
        if (btn.value == "Unselect All") {
            images[i].setAttribute("class", "image");
            // IE 미지원 images[i].classList.remove("image-selected");
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

