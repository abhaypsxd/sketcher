const container=document.querySelector(".container");

let colorLiterals = ["0","1","2","3","4","5","6","7","8","9","a","b","c,","d","e","f"];
function colorConstructor(colorLiterals) {
    let color="#";
    for(let i = 0; i<6; i++){
        let idx = Math.floor(Math.random()*colorLiterals.length);
        color+=colorLiterals[idx];
    }
    return color;
}
// console.log(colorConstructor(colorLiterals))
let nums = prompt("Enter the number of pixels:-")
if(nums<100)
for(let i = 0; i<nums*nums; i++){
    let numStr = (960/nums-2).toString();
    numStr=numStr+"px";
    const square = document.createElement("div");
    square.style.width=numStr;
    square.style.height=numStr;
    square.id="square_div";
    container.appendChild(square);
}
const squares = document.querySelectorAll("#square_div");
squares.forEach((square)=>{
    square.addEventListener('mouseover',()=>{
        square.style.backgroundColor=colorConstructor(colorLiterals);
    })
})

const btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    window.location.reload();
})