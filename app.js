const container=document.querySelector(".container");
for(let i = 0; i<256; i++){
    const square = document.createElement("div");
    square.style.width="58px";
    square.style.height="58px";
    square.id="square_div";
    container.appendChild(square);
}
const squares = document.querySelectorAll("#square_div");
squares.forEach((square)=>{
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor='cyan';
    })
})