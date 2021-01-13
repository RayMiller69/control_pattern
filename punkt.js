var canvas = document.getElementById("punkt");

var ctx = canvas.getContext("2d");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


/*
//Punkt wird gezeichnet
ctx.fillStyle = "red";
ctx.strokeStyle= "black";
ctx.lineWidth=5;
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();

*/

let number = 3;
let scale = 5;

let hue = 0;




function drawFlower() {
let angle = number * slider.value;
let radius = scale * Math.sqrt(number);
    
let positionX = canvas.width/2 + radius * Math.sin(angle) ;
let positionY = canvas.height/2 + radius * Math.cos(angle);


ctx.fillStyle = 'hsl('+hue+', 100%, 50%)';
ctx.strokeStyle = "rgba(58, 58, 185, 0.66)";
ctx.lineWidth = 0.75
ctx.beginPath();
ctx.arc(positionX, positionY, slider.value, 0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.stroke();
    
number += 4;
hue += 0.1;
    
}


function animate() {
    
//ctx.clearRect(0,0, canvas.width, canvas.height);
    
  
drawFlower();
    
    
    //if (number > 650 ) return;
       
requestAnimationFrame(animate);
    
    
}

animate();



































