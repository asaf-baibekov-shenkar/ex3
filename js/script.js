// view
window.onload = (event) => {
    dropBoxes(40);
    plusClick();
}



// controller
let dropBoxes = (boxes) => {
    [...Array(boxes).keys()]
        .map(value => new Box(value, boxes).element)
        .forEach(box => document.getElementById("dropbox").append(box))
}

let plusClick = () => {
    let plusElement = document.getElementsByTagName('header')[0].getElementsByClassName('head')[0];
    plusElement.onclick = () => {
        colorIndex = (colorIndex == colors.length - 1) ? 0 : colorIndex + 1;
        Array.from(document.getElementById('dropbox').getElementsByClassName('box'))
            .forEach(element => element.style.backgroundColor = colors[colorIndex]);
    }
}

// model
let colorIndex = 0;
let colors = ['white', 'black', 'greenyellow', 'pink', 'blue', 'brown'];

class Box {
    constructor(i, boxes) {
        this.element = document.createElement('div');
        this.element.className = 'box';
        this.element.style.opacity = (i <= (boxes - 1) / 2) ? (boxes - i) / boxes : i / (boxes - 1);
        this.element.style.backgroundColor = colors[colorIndex];
        this.element.onmouseover = function(event) {
            colorIndex = (colorIndex == colors.length - 1) ? 0 : colorIndex + 1;
            event.target.style.backgroundColor = colors[colorIndex];
        }
        this.element.onmouseout = function(event) {
            colorIndex = ((colorIndex == 0) ? colors.length : colorIndex) - 1;
            event.target.style.backgroundColor = colors[colorIndex];
        }
    }
}