//join.js

const inputUserName = document.getElementById("inputUserName");
const inputPassword = document.getElementById("inputPassword");
const checkPassword = document.getElementById("checkPassword");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");

const idText = document.getElementById("idText");
const pwText = document.getElementById("pwText");
const pwText2 = document.getElementById("pwText2");
const nameText = document.getElementById("nameText");
const emailText = document.getElementById("emailText");
const phoneText = document.getElementById("phoneText");

inputUserName.addEventListener("blur", function(){
    console.log("blur");
    let t = inputUserName.value;
    if(t.length<2){
        console.log("2글자미만");
        idText.innerText = "2글자 이상입력";
    }else{
        idText.innerText = "";
    }
});

inputPassword.addEventListener("blur", function(){
    let p = inputPassword.value;
    if(p.length<6){
        console.log("6글자미만");
        pwText.innerText = "6글자 이상입력";
    }else{
        pwText.innerText = "";
    }
});

checkPassword.addEventListener("blur", function(){
    let p1 = inputPassword.value;
    let p2 = checkPassword.value;

    if(p1.value==p2.value){
        pwText2.innerText="일치";
    }else{
        pwText2.innerText="비밀번호가 일치하지 않습니다.";
    }
});

inputName.addEventListener("blur", function(){
    let n = inputName.value;
    console.log(n);

    if(n==""){
        nameText.innerText="이름을 입력하세요";
    }else{
        nameText.innerText="";
    }
});

inputEmail.addEventListener("blur", function(){
    let e = inputEmail.value;
    console.log(e);
    let ee = e.match(/[\w\-\.]+\@[\w\-\.]+/g);
    console.log(ee);
    if(e==""){
        emailText.innerText="이메일을 입력하세요";
    }else{
        emailText.innerText="";
        if(ee==null){
            emailText.innerText="이메일 형식을 지켜주세요";
        }
    }
});

inputPhone.addEventListener("blur", function(){
    let p = inputPhone.value;
    console.log(p);

    if(p==""){
        phoneText.innerText="전화번호를 입력하세요";
    }else{
        phoneText.innerText="";
    }
});