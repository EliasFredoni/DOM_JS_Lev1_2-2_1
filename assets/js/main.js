/*******LEV 1.2*******/

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

/********LEV 2.1*****/

let navi = document.getElementById("emoH");
console.log(navi);

let myFunction2 = () => {
    navi.style.backgroundColor = "pink";
    navi.style.color = "black"
    navi.innerHTML = "emoH"
    // ab hier, gehört zu Lev 2.3
    changeMe[0].style.backgroundColor = "#f6c89f";
    changeMe[1].style.backgroundColor = "#ffe7d1";
    changeMe[2].style.backgroundColor = "#4b8e8d";
    changeMe[3].style.backgroundColor = "#396362";
}

/*******LEV 2.3*******/

let changeMe = document.getElementsByTagName("li");
console.log(changeMe);
