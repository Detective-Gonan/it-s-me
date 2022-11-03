const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let total;
let particles = [];

class Particle{
constructor(x,y){
    this.x =x
    this.y = y;
}
draw(){
    const{x,y}=this;
    ctx.biginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y + 100);
    ctx.stroke();
}
animate(){



}
}

function init(){

}

function render(){

}

window.addEventListener('resize'.()=>init());

init();
render();