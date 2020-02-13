var saisie = document.querySelector("input");
var ul = document.querySelector("ul");
var bouton = document.querySelector("a");
saisie.value = ""; 

function toDo() {
    var li = document.createElement("li"); 
    li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(saisie.value)); 
    ul.appendChild(li); 
    saisie.value = ""; 

}

bouton.addEventListener("click",toDo);


function deleteCheckBox() {
    while (document.getElementById('checkbox').checked === true) {
        var itemNode = document.getElementById(checkbox.name);
        itemNode.parentNode.removeChild(itemNode);
    }
}