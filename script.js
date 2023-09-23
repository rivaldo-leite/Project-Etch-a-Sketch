let sizeOfGrid = parseInt(prompt("I am gonna build a square! Type the size of side:"));

const title = document.createElement('h1');
title.className = "title";
title.textContent = "Etch-a-Sketch";
document.body.appendChild(title);

const containerButton = document.createElement('div');
containerButton.className = "container-btn";
document.body.appendChild(containerButton)

const buttonChangeGrid = document.createElement('button');
buttonChangeGrid.className = "btn";
buttonChangeGrid.textContent = "Change the size of square";
containerButton.appendChild(buttonChangeGrid);

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);


buttonChangeGrid.addEventListener('click', () => {
    container.innerHTML = '';
    let newSize = parseInt(prompt("Type the new size of side:"));
    userInput(newSize);
})


function userInput(sizeOfGrid) {
    if (sizeOfGrid > 100) {
        return alert("The maximum limit of the square's side is 100. Type another value.");
    }
    else {
        const createGrid = (amountOfGrids) => {
            for (let i = 0; i < amountOfGrids; i++) {
                const row = document.createElement('div');
                row.classList.add('grid-row');
        
                for (let j = 0; j < amountOfGrids; j++) {
                    const gridBox = document.createElement('div');
                    gridBox.classList.add('grid-box');
                    row.appendChild(gridBox);
                }
                container.appendChild(row);
            }
        } 
        createGrid(sizeOfGrid);
    }
}

userInput(sizeOfGrid);







