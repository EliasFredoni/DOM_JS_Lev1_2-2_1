let colo = document.getElementsByClassName("example");
console.log(colo);

let myFunction = () => {
    console.log("funktioniert");
    colo[0].style.backgroundColor = "black";
    colo[1].style.backgroundColor = "black";
    colo[2].style.backgroundColor = "black";
    colo[3].style.backgroundColor = "black";
    colo[4].style.backgroundColor = "black";
    colo[4].style.color = "white";
}

// MIT QUERY SELECTOR!

/*let button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("funktioniert");
    colo[0].style.backgroundColor = "black";
    colo[1].style.backgroundColor = "black";
    colo[2].style.backgroundColor = "black";
    colo[3].style.backgroundColor = "black";
    colo[4].style.backgroundColor = "black";
    colo[4].style.color = "white";
});*/

let navi = document.getElementById("emoH");
console.log(navi);

let myFunction2 = () => {
    navi.style.backgroundColor = "pink";
    navi.style.color = "black"
    navi.innerHTML = "emoH"
}