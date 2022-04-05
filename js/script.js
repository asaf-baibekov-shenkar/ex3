let colorIndex = 0;
let colors = ['white', 'black', 'greenyellow', 'pink', 'blue', 'brown'];
window.onload = (event) => {
    dropBoxes(8);
    plusClick();
}

let dropBoxes = (boxes) => {
    let dropbox = document.getElementById("dropbox");
    [...Array(boxes).keys()].forEach(i => {
        let box = document.createElement('div');
        box.className = 'box';
        let opacity = (i <= (boxes - 1) / 2) ? (boxes - i) / boxes : i / (boxes - 1);
        console.log(opacity);
        box.style.opacity = opacity;
        box.style.backgroundColor = 'white';
        dropbox.append(box);
    })
}

let plusClick = () => {
    let plus = document.getElementsByTagName('header')[0].getElementsByClassName('head')[0];
    plus.onclick = (event) => {
        colorIndex = (colorIndex == colors.length - 1) ? 0 : colorIndex + 1;
        Array.from(document.getElementById('dropbox').getElementsByClassName('box'))
            .forEach(element => {
                element.style.backgroundColor = colors[colorIndex];
            });
    }
}