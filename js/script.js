const btn = document.querySelector(".menu_mobile");
const canvas = document.querySelector(".canvas_mobile");


const functionBtn =()=>{
    canvas.className = "canvas_mobile show"
    console.log(canvas.className);
}
btn.onclick = functionBtn;

const btnx = document.querySelector(".canvas_close");
const functionBtnx =()=>{
    if(canvas.className ==="canvas_mobile show"){
        canvas.className = "canvas_mobile hide"
    }
   
    console.log(canvas.className);
}
btnx.onclick = functionBtnx;


