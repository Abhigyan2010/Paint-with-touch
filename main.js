canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");
var color=red;
var radius=5;
var width=1;
cpox="";
cpoy="";
lpox="";
lpoy=""
mousevent=" ";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mousevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mousevent=mouseup;
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mousevent=mouseleave;
}
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(){
    cpox=e.touches[0].clientX-canvas.offsetLeft;
    cpoy=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cpox=e.clientX-canvas.offsetleft;
    cpoy=e.clientY-canvas.offsetTop;
    if (mousevent=="mouseDown");
    console.log("Current position of x and y coordinates=");
    console.log("x="+cpox+"y="+cpoy);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(cpox,cpoy,radius,0,360);
    ctx.stroke(); 
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(){
    cpox=e.touches[0].clientX-canvas.offsetLeft;
    cpoy=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lpox,lpoy);
    ctx.lineTo(cpox,cpoy);
    lpox=cpox;
    lpoy=cpoy;
}