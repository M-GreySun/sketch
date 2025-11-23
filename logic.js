
let row=4;
let column=4;
let container= document.createElement("div");

document.querySelector("body").appendChild(container);

let rowOrigin=document.createElement("div");
rowOrigin.setAttribute("style", "display: flex; margin: 5px; border: solid green 5px; width:500px");

let blockOrigin= document.createElement("div");
blockOrigin.setAttribute("style", "height: 100px; width: 100px; margin: 10px; color: blue; border: double pink 5px;");

//rowOrigin.appendChild(blockOrigin);
//container.appendChild(rowOrigin);




for(let i=0; i< column; i++){
    let blockClone= blockOrigin.cloneNode(true);
    rowOrigin.appendChild(blockClone);
}
for(let i=0; i<row; i++){
    let rowClone= rowOrigin.cloneNode(true);
    container.appendChild(rowClone);
}

