window.onload = (event) => {
    dropBoxes(20);
}

let dropBoxes = (boxes) => {
    let dropbox = document.getElementById("dropbox");
    [...Array(boxes).keys()].forEach(i => {
        let box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = 'white';
        box.style.opacity = (boxes / 2 > i) ? 1 - (i / boxes) : (i / boxes);
        dropbox.append(box);
    })
}