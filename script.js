var ul=document.getElementById("list-container");
var input=document.getElementById("input");
var addbtn=document.getElementById("addbtn");
var dltbtn=document.getElementById("dltbtn")
addbtn.onclick=function add(){
    if (input.value.trim() !== "") {
        var listitem = document.createElement("li");
        listitem.textContent = input.value;
        var delbtn = document.createElement("button");
        delbtn.textContent = "COMPLETED";
        delbtn.classList.add("dltbtn")
        delbtn.onclick = function delitem(event) {
          event.target.parentElement.remove();
        };
        listitem.appendChild(delbtn);
        ul.appendChild(listitem);
        input.value = "";
    }
}
var initialDltbtn = document.querySelector(".dltbtn");
if (initialDltbtn) {
    initialDltbtn.onclick = function delitem(event) {
        event.target.parentElement.remove();
    };
}

