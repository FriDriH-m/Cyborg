var x = 0;
var y = 0;

var step = 60;
var character = document.getElementById('character');

function Move(key){
    if (key == 'w'){
        y -= step;
        character.style.top = `${y}px`;
    }
    if (key == 's'){
        y += step;
        character.style.top = `${y}px`;
    }
    if (key == 'a'){
        x -= step;
        character.style.left = `${x}px`;
    }
    if (key == 'd'){
        x += step;
        character.style.left = `${x}px`;
    }
}


document.addEventListener("keydown", function(event) {
    Move(event.key);
});