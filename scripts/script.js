let blocksPerRow = 15;
let blockSize = 500 / blocksPerRow;
let totalBlocks = blocksPerRow * blocksPerRow;
let blocks = [];
let canvas = document.querySelector(".canvas");
const colorWheel = document.querySelector(".optionsColorWheel");
const radioColor = document.querySelector("#radioColor");
const radioRainbow = document.querySelector("#radioRainbow");
const radioColorStyle = document.querySelector(".radioColorStyle");
const gridSizeNumber = document.querySelectorAll(".gridSizeNumber");
const range = document.querySelector("#range");
const container = document.querySelector(".container");

let color = colorWheel.value;

createCanvas();
createGrid();
addEvents();

document.getElementById("number").addEventListener("change", () => {
    removeCanvas();
    blocksPerRow = document.getElementById("number").value;
    blockSize = 500 / blocksPerRow;
    totalBlocks = blocksPerRow * blocksPerRow;
    createCanvas();
    createGrid();
    addEvents();
    gridSizeNumber.forEach(element => {
        element.textContent = blocksPerRow;
    });
})

document.querySelector(".optionsClearButton").addEventListener("click", () => {
    removeCanvas();
    createCanvas();
    createGrid();
    addEvents();
})

colorWheel.addEventListener("change", () => {
    color = colorWheel.value;
})

function createCanvas() {
    blocks.length = 0;
    const div = document.createElement("div");
    div.classList.add("canvas");
    container.appendChild(div);

    for (let i = 0; i < totalBlocks; i++) {
        blocks.push(document.createElement("div"));
    }

    canvas = document.querySelector(".canvas");
}

function createGrid() {
    blocks.forEach(element => {
        element.style.backgroundColor = "#fff";
        element.style.height = blockSize + "px";
        element.style.width = blockSize + "px";
        canvas.appendChild(element);
    })
}

function addEvents() {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("mouseover", () => {
            blocks[i].style.backgroundColor = colorStyle();
        })
    }
}

function removeCanvas() {
    container.removeChild(canvas);
}

radioColorStyle.addEventListener("change", () => {
    colorStyle();
})

function colorStyle() {
    if (radioColor.checked) {
        colorWheel.style.display = "block";
        return color;
    } 

    if(radioRainbow.checked) {
        colorWheel.style.display = "none";
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor);
        return "#" + randomColor;
    }

}