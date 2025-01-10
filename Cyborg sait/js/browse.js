"use strict";

class Wrapper {
    constructor(parentElement, nextDistance, prevDistance, array) {
        this.ParentElement = document.getElementById(parentElement);
        this.nextDistance = nextDistance;
        this.prevDistance = prevDistance;
        this.array = array;
        this.stop = false;
    }

    Info() {
        console.log(this.ParentElement);
        console.log(this.nextDistance);
        console.log(this.prevDistance);
        console.log(this.array);
    }

    Next() {
        if (this.stop) return;
        this.stop = true;

        const element = this.ParentElement.lastElementChild;
        const index = this.array.indexOf(element.id);
        const block1 = document.getElementById(this.array[index]);

        this.ParentElement.style.transform = `translateX(${this.nextDistance}px)`;

        const cloneblock1 = block1.cloneNode(true);
        cloneblock1.style.cssText = `position: absolute; left: ${this.prevDistance}px;`;
        console.log(this.ParentElement.firstChild)
        this.ParentElement.insertBefore(cloneblock1, this.ParentElement.firstChild);

        setTimeout(() => {
            this.ParentElement.removeChild(cloneblock1);
            this.ParentElement.style.transition = "none";
            this.ParentElement.style.transform = `translateX(0px)`;
            this.ParentElement.insertBefore(block1, this.ParentElement.firstChild);
            this.stop = false;
        }, 200);
        this.ParentElement.style.transition = "transform 0.2s ease-in-out";
    }

    Pre() {
        if (this.stop) return;
        this.stop = true;

        const element = this.ParentElement.firstElementChild;
        const index = this.array.indexOf(element.id);
        const block1 = document.getElementById(this.array[index]);

        this.ParentElement.style.transform = `translateX(${this.prevDistance}px)`;

        const cloneblock1 = block1.cloneNode(true);
        cloneblock1.style.position = "relative";
        this.ParentElement.appendChild(cloneblock1);

        setTimeout(() => {
            this.ParentElement.removeChild(cloneblock1);
            this.ParentElement.style.transition = "none";
            this.ParentElement.style.transform = `translateX(0px)`;
            this.ParentElement.appendChild(block1);
            this.stop = false;
        }, 200);
        this.ParentElement.style.transition = "transform 0.2s ease-in-out";
    }
}

const gamesContainer = new Wrapper("games-container", 257, -257, ["first", "second", "third"]);
