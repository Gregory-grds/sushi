var saisie = document.querySelector(".btn1");
var bouton = document.querySelectorAll(".btn1");
saisie.nodeValue = "";

for (let item of bouton) { 
 item.addEventListener("click",toDo);
}
 function toDo() {
    console.log(this.parentElement.parentElement);
    localStorage.setItem('panier', this.parentElement.parentElement.querySelector("h4").textContent+this.parentElement.parentElement.querySelector("h5").textContent)
}

console.log(localStorage.getItem('panier'))