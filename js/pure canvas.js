//create canvas
var mypagecanvas=document.createElement('canvas');
mypagecanvas.id='c';
//customize the canvas
mypagecanvas.width=600;
mypagecanvas.height=100;
mypagecanvas.style.display='block';
mypagecanvas.style.margin='50px auto';
document.body.appendChild(mypagecanvas);
//get canvs information
var mycanvas =document.getElementById('c')
myContext=mycanvas.getContext('2d');
//style option
myContext.fillStyle='#f00';
myContext.strokeStyle='#00f';
myContext.lineWidth='2';
myContext.font='60px arial';
//enter the text
myContext.fillText('elzero',50,80);