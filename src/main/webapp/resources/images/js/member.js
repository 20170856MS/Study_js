//member.js
function loginCheck(){
    const btn = document.getElementById("btn");
    const frm = document.getElementById("frm");
    const userName = document.getElementById("userName");
    const password = document.getElementById("password");
    const checktext = document.getElementById("checktext");

    btn.addEventListener("click", function(){
        console.log("submit");
        let u = userName.value;
        let p = password.value;

        console.log(u.length);  //(u=="")
        //checktext.innerText(t);
        if(u.length == 0){
            alert("아이디는 필수입니다.");
            return;
        }
        if(p.length == 0){
            alert("비밀번호는 필수입니다.")
            return;
        }
        frm.submit();

        // if(u.length > 0 && p.length > 0){
        //     frm.submit();
        // }
        // else{
        //     alert("공백이 있습니다.")
        // }

    });
}
function check(){
    const all = document.getElementById("all");
    const cb = document.getElementsByClassName("cb");
    const join = document.getElementById("join");
    const frm = document.getElementById("frm");
    const req = document.getElementsByClassName("req");

    all.addEventListener("click", function(){
        for(let i=0;i<cb.length;i++){
            cb[i].checked=all.checked;
        }
    });

    for(let i=0;i<cb.length;i++){
        cb[i].addEventListener("click", function(){
            let result= true;
            for(let j=0; j<cb.length; j++){
                if(!cb[j].checked){
                    result=false;
                    break;
                }
            }
            all.checked=result;

        });
    }

    join.addEventListener("click", function(){
        // if(all.checked){
        //     frm.submit();
        // }else{
        //     alert("약관에 동의해야 합니다.");
        // }
        let result = true;
        for(let i=0; i<req.length; i++){
            if(!req[i].checked){
                result=false;
                break;
            }
        }
        if(result){
            frm.submit();
        }else{
            alert("필수 약관에 동의해야 합니다.")
        }
    });


}