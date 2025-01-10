var character = document.getElementById('character');

var x = parseInt(window.getComputedStyle(character).left, 10) || 0;
var y = parseInt(window.getComputedStyle(character).top, 10) || 0;

var step = 60;

function Move(key){
    console.log(key);
    
    if (key == 'w' || key == 'ц'){
        y -= step;
        character.style.top = `${y}px`;
    }
    if (key == 's' || key == 'ы'){
        y += step;
        character.style.top = `${y}px`;
    }
    if (key == 'a' || key == 'ф'){
        x -= step;
        character.style.left = `${x}px`;
    }
    if (key == 'd' || key == 'в'){
        x += step;
        character.style.left = `${x}px`;
    }
}

function getYPos(object){
    return window.getComputedStyle(object).top;
}

function getXPos(object){
    return window.getComputedStyle(object).left;
}

document.addEventListener("keydown", function(event) {
    Move(event.key);
});