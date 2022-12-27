canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokesStyle = "Grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200 );
ctx.stroke();

ctx.beginPath();
ctx.strokesStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(250, 215, 50, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokesStyle = "black";
ctx.lineWidth = 5;
ctx.arc(360 , 215, 50, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokesStyle = "red";
ctx.lineWidth = 5;
ctx.arc(460, 215, 50, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokesStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(310 , 255, 50, 0, 2 * Math.PI);
ctx.stroke();