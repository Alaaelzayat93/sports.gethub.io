var mycanvas = document.getElementById('c'),
myContext = mycanvas.getContext('2d');
myContext.fillStyle ='#008';
myContext.fillRect(50,50,100,50);
myContext.fillStyle ='#080';
myContext.fillRect(20,20,100,50);
myContext.fillStyle ='red';
myContext.fillRect(30,30,100,50);
myContext.strokeStyle ='#ff0';
myContext.strokeText("Hello World", 50, 50);
myContext.lineW