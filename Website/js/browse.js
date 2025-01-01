var next = 257;
var pre = -257;
var index = ["first", "second", "third"];
var i = 0;
var j = 0;

function Next(){
    var block = document.getElementById("games-container");
    block.style.transform = `translateX(${next}px)`;
    var block1 = document.getElementById(index[j % 3]);
    var parent = document.getElementById("games-container");
    j += 1;
    setTimeout(function() {
        block.style.transition = "none";
        block.style.transform = `translateX(0px)`;
        parent.insertBefore(block1, parent.firstChild);
    }, 500);
    block.style.transition = "transform 0.5s ease-in-out";
}

function Pre(){
    var block = document.getElementById("games-container");
    block.style.transform = `translateX(${pre}px)`;
    var block1 = document.getElementById(index[i % 3]);
    i += 1;
    var parent = document.getElementById("games-container");
    setTimeout(function() {
        block.style.transition = "none";
        block.style.transform = `translateX(0px)`;
        parent.appendChild(block1);
    }, 500);
    block.style.transition = "transform 0.5s ease-in-out";
}