//ajax_1.js

const d1 = document.querySelector("#d1");
const v1 = document.querySelector("#v1");
const result = document.querySelector("#result");

d1.addEventListener("click", function(){
    console.log("click");
    let v = v1.value;
    //1. ajax로 요청하는 객체 생성
    let xhttp = new XMLHttpRequest();

    //2. 요청정보
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/"+v);

    //3.요청발생
    xhttp.send();

    //4.응답 결과 처리
    xhttp.onreadystatechange = function(){
        //this는 xhttp 객체
        // console.log(this.status);
        // console.log(this.readyState);
        // console.log("------------------------");

        if(this.readyState==4 && this.status==200){
            //console.log(this.responseText);
            let response = this.responseText.trim();
            response = JSON.parse(response);

            let hh = document.createElement("h3");
            let ui = document.createTextNode(response.userId);
            hh.appendChild(ui);
            result.append(hh);
            console.log(response.userId);

            hh = document.createElement("h3");
            let id = document.createTextNode(response.id);
            hh.appendChild(id);
            result.append(hh);
            console.log(response.id);

            hh = document.createElement("h3");
            let tt = document.createTextNode(response.title);
            hh.appendChild(tt);
            result.append(hh);
            console.log(response.title);

            hh = document.createElement("h3");
            let bb = document.createTextNode(response.body);
            hh.appendChild(bb);
            result.append(hh);
            console.log(response.body);
        }
    }

    console.log("Ajax 발생");
});