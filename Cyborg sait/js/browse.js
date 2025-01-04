var next = 257;
var pre = -257;
var index = ["first", "second", "third"];
var stop = false;

function Next(){
    if (stop) return;
    stop = true;

    //вычисляем элемент, находящийся в конце и помещаем его в переменную block1
    var element = document.getElementById("games-container").lastElementChild;
    var indexOfElement = index.indexOf(element.id);
    var block1 = document.getElementById(index[indexOfElement]);

    //получаем родительсикй контейнер и перемещаем его на next пикселей
    var parent = document.getElementById("games-container");
    parent.style.transform = `translateX(${next}px)`;

    var cloneblock1 = block1.cloneNode(true); //клонируем первый элемент
    cloneblock1.style.cssText = "position: absolute; left: -257px;"; //позиционируем клон в начале
    parent.insertBefore(cloneblock1, parent.firstChild); //вставляем клон в конец

    //когда контейнер переместился и анимация прекратилась, удаляем первый элемент и вставляем его в конец
    setTimeout(function() {
        parent.removeChild(cloneblock1); //удаляем клон
        parent.style.transition = "none"; //убираем анимацию, чтобы возвращение на начальную позицию было незаметным
        parent.style.transform = `translateX(0px)`;
        parent.insertBefore(block1, parent.firstChild); //вставляем элемент в начало перед первым элементом
        stop = false;
    }, 200);
    parent.style.transition = "transform 0.2s ease-in-out"; //возвращаем анимацию
}

function Pre(){
    if (stop) return;
    stop = true;

    //вычисляем элемент, находящийся в начале и помещаем его в переменную block1
    var element = document.getElementById("games-container").firstElementChild;
    var indexOfElement = index.indexOf(element.id);
    var block1 = document.getElementById(index[indexOfElement]);

    //получаем родительсикй контейнер и перемещаем его на pre пикселей
    var parent = document.getElementById("games-container");
    parent.style.transform = `translateX(${pre}px)`;

    var cloneblock1 = block1.cloneNode(true); //клонируем первый элемент
    cloneblock1.style.position = "relative";
    parent.appendChild(cloneblock1); //вставляем клон в конец

    //когда контейнер переместился и анимация прекратилась, вставляем первый элемент в конец
    setTimeout(function() {
        parent.removeChild(cloneblock1); //удаляем клон
        parent.style.transition = "none"; //убираем анимацию, чтобы возвращение на начальную позицию было незаметным
        parent.style.transform = `translateX(0px)`;
        parent.appendChild(block1);
        stop = false;
    }, 200);
    parent.style.transition = "transform 0.2s ease-in-out"; //возвращаем анимацию
}