const container = document.querySelector('.container');
const button = document.querySelector('button');
let isMouseDown = false;
container.addEventListener('mousedown', () => isMouseDown = true);
container.addEventListener('mouseup', () => isMouseDown = false);
function makeGrid(size) {
    let width = parseInt(container.offsetHeight) / size;
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${width}px`;
        div.style.height = `${width}px`;
        div.style.opacity = 0;
        console.log(div.style.opacity);
        div.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                let [r, g, b] = getRandomColor();
                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                div.style.opacity = parseFloat(div.style.opacity) + 0.1;
                console.log(div.style.opacity)
            }
        })
        container.appendChild(div);
    }
}
function reset() {
    container.innerHTML = '';
}
function getRandomColor() {
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    return [r, g, b];
}
button.addEventListener('click', () => {
    let size;
    do {
        size = prompt("Select size: 1-100", 64);
        if (size === null) break;
        reset();
        makeGrid(size);
    } while (size > 100 || size < 1);

})