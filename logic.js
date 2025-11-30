
let row=16;
let col=16;

let container= document.createElement("div");
container.classList.add("container");
document.querySelector("body").appendChild(container);

let rowOrigin=document.createElement("div");
rowOrigin.classList.add("row");


let block= document.createElement("div");
block.classList.add("block");

for(let i=0; i< col; i++){
    let blockClone= block.cloneNode(true);
    rowOrigin.appendChild(blockClone);
}

for(let i=0; i<row; i++){
    let rowClone= rowOrigin.cloneNode(true);
    container.appendChild(rowClone);
}


let blocks= document.querySelectorAll(".block");
blocks.forEach((blockTemp)=>{
    blockTemp.addEventListener("mouseenter", ()=>{
        //blockTemp.setAttribute("style", "background-color: greenyellow");
    });
});

blocks.forEach((blockTemp) =>{
    blockTemp.addEventListener("mouseleave", ()=>{
        //blockTemp.setAttribute("style", "background-color: white");
    });
});
