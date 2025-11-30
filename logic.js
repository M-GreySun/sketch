
let row=4;
let column=4;
let container= document.createElement("div");
container.setAttribute("style", "display: flex; flex-direction: column; align-items: center; width: 960px; heigth: 960px;");

document.querySelector("body").appendChild(container);

let rowOrigin=document.createElement("div");
rowOrigin.setAttribute("style", "display: flex; margin: 5px; border: solid green 5px; width:500px");

let blockOrigin= document.createElement("div");
blockOrigin.setAttribute("style", "height: 100px; width: 100px; margin: 10px; border: double pink 5px;");
blockOrigin.classList.add("block");

//rowOrigin.appendChild(blockOrigin);
//container.appendChild(rowOrigin);
let test= document.querySelector(".test");

test.addEventListener("mouseenter", ()=>{
    test.setAttribute("style", "font-size: 40px");
});

test.addEventListener("mouseleave", ()=>{
     test.setAttribute("style", "font-size: 20px");
});


/*
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
*/

for(let i=0; i< column; i++){
    let blockClone= blockOrigin.cloneNode(true);
    rowOrigin.appendChild(blockClone);
}
for(let i=0; i<row; i++){
    let rowClone= rowOrigin.cloneNode(true);
    container.appendChild(rowClone);
}

let blockTest= document.querySelectorAll(".block");
blockTest.forEach((oneBlock)=>{
    let value= oneBlock.addEventListener("mouseenter", ()=>{
        oneBlock.textContent="The mouse touch me";
    });
    value=null;
});

blockTest.forEach((oneBlock) =>{
    let value= oneBlock.addEventListener("moveleave", ()=>{
        oneBlock.textContent="";
    });
    value=null;
});

/*
let elements= container.querySelectorAll("block");
elements.forEach((ele) =>{
    ele.addEventListener("mouseover", ()=>{
        ele.setAttribute("style", "border: solid black 5px");
    });

});
*/