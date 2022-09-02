//board_files.js

const files = document.getElementById("files");
const addFiles = document.getElementById("addFiles");

let count =0;
let idx = 0;
addFiles.addEventListener("click", function(){
    
    {/* <div class="mb-3">
        <label for="files" class="form-label">File</label>
        <input type="file" name="files" class="form-control" id="files">
        <button type="button" class="del">삭제</button>
    </div> */}
    if(count>4){
        alert("최대 5개만 가능");
        return;
    }

    
    //부모 Element div 생성
    let div = document.createElement("div");
    let c = document.createAttribute("class");
    c.value="mb-3";
    div.setAttributeNode(c);
    c = document.createAttribute("id");
    c.value="file"+idx;
    div.setAttributeNode(c);
    
    //자식 Element label 생성
    let label = document.createElement("label");
    let f = document.createAttribute("for");
    f.value="files";
    label.setAttributeNode(f);
    c = document.createAttribute("class");
    c.value="form-label";
    label.setAttributeNode(c);
    let t = document.createTextNode("File");
    label.appendChild(t);
    div.appendChild(label);

    //자식 Element button 생성
    let input = document.createElement("input");
    let type = document.createAttribute("type");
    type.value="file";
    input.setAttributeNode(type);
    let name = document.createAttribute("name");
    name.value="files";
    input.setAttributeNode(name);
    c = document.createAttribute("class");
    c.value="form-control";
    input.setAttributeNode(c);
    let id = document.createAttribute("id");
    id.value="files";
    input.setAttributeNode(id);
    div.appendChild(input);
    
    
    
    //삭제 Button Element 생성
    let button = document.createElement("button");
    let buttonContents = document.createTextNode("삭제");
    button.appendChild(buttonContents);
    let buttonAttr = document.createAttribute("type");
    buttonAttr.value="button";
    button.setAttributeNode(buttonAttr);
    
    buttonAttr = document.createAttribute("class");
    buttonAttr.value="del btn btn-danger";
    button.setAttributeNode(buttonAttr);
    
    buttonAttr.document.createAttribute("title");
    buttonAttr.value=idx;
    button.setAttributeNode(buttonAttr);


    div.appendChild(button);
    
    addFiles.append(div);
    
    count++;
    idx++;


});

addFiles.addEventListener("click", function(event){
    let button = event.target;
    if(button.classList[0]=='del'){
        alert("DELETE");
        alert(button.title);
        document.getElementById("file"+button.title).remove();
        count--;
    }
});