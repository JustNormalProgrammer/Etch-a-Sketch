const container = document.querySelector('.container');
const button = document.querySelector('button');




function makeGrid(size) {
    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        let width = 900/size;
        div.style.width = `${width}px`;
        div.style.height = `${width}px`;
        div.addEventListener('mouseenter', () =>{
            div.classList.add('color');
        })
        container.appendChild(div);
    }      
}
function reset(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
button.addEventListener('click', ()=>{
    let size;
    do{
        size = prompt("Select size: 1-100", 64);
        if(size === null) break;
        
    } while(size > 100 || size < 1);
    reset();
    makeGrid(size);

})