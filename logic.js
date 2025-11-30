
let row=4;
let col=4;

let container= document.createElement("div");
container.classList.add("container");
document.querySelector("body").appendChild(container);

let rowOrigin=document.createElement("div");
rowOrigin.classList.add("row");


let block= document.createElement("div");
//block.setAttribute("style", "height: 100px; width: 100px; margin: 10px; border: double pink 5px;");
block.classList.add("block");

//rowOrigin.appendChild(blockOrigin);
//container.appendChild(rowOrigin);


for(let i=0; i< col; i++){
    let blockClone= block.cloneNode(true);
    rowOrigin.appendChild(blockClone);
}

for(let i=0; i<row; i++){
    let rowClone= rowOrigin.cloneNode(true);
    container.appendChild(rowClone);
}

//container.appendChild(rowOrigin);

let blocks= document.querySelectorAll(".block");
blocks.forEach((blockTemp)=>{
    blockTemp.addEventListener("mouseenter", ()=>{
        blockTemp.textContent="The mouse touch me";
    });
});

blocks.forEach((blockTemp) =>{
    blockTemp.addEventListener("mouseleave", ()=>{
        blockTemp.textContent="";
    });
});
