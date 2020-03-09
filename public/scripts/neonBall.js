// var breakoutCanvas = document.getElementById("breakoutCanvas");
// var breakoutCtx = breakoutCanvas.getContext("2d");
var trailLimit = 10;
var balls;
var prevBalls = [];

var ballFieldCanvas =
document.createElement('CANVAS');
ballFieldCanvas.width = document.getElementById("breakoutCanvas").width
ballFieldCanvas.height = document.getElementById("breakoutCanvas").height
var ballFieldCtx = ballFieldCanvas.getContext('2d');

// ballFieldCtx.lineJoin = "round";
ballFieldCtx.globalCompositeOperation = "lighter"; //lighter: Where both shapes overlap the color is determined by adding color values.


var ballCanvas =
document.createElement('CANVAS');
var ballCtx = ballCanvas.getContext('2d');
var bitmap;
var sprite;

ballCanvas.width = (ballRadius * 2) + 20;
ballCanvas.height = (ballRadius * 2) + 20;

var drawCircle = function(x, border){
  ballCtx.beginPath();
  ballCtx.arc(x, x, ballRadius, 0, Math.PI*2);
  ballCtx.closePath();
  ballCtx.stroke();
}

var neonBall = function(x,r,g,b,neonBorder) {
  ballCtx.shadowColor = "rgb("+r+","+g+","+b+")";
  ballCtx.shadowBlur = 10;

  ballCtx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ballCtx.lineWidth=7.5;
  drawCircle(x,neonBorder);
  ballCtx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ballCtx.lineWidth=6;
  drawCircle(x,neonBorder);
  ballCtx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ballCtx.lineWidth=4.5;
  drawCircle(x,neonBorder);
  ballCtx.strokeStyle= "rgba("+r+","+g+","+b+",0.2)";
  ballCtx.lineWidth=1.5;
  drawCircle(x,neonBorder);
  ballCtx.strokeStyle= '#fff';
  ballCtx.lineWidth=3;
  drawCircle(x,neonBorder);
}


function createNeonBall(r,g,b){
  neonBall(ballCanvas.width/2,r,g,b,1.5);
}

// make a phaser bitmap, and draw the ballcanvas to game canvas
bitmap = new Phaser.BitmapData(game, '', ballCanvas.width, ballCanvas.height);
bitmap.context.drawImage(ballCanvas, 0, 0);

// use that bitmap as the texture for the sprite
sprite = game.add.sprite(0, 0, bitmap);
sprite.name = 'ball';
sprite.x = game.world.centerX - sprite.width / 2;
sprite.y = game.world.centerY - sprite.height / 2;
//
// function drawNeonBall(x,y){
//   ballFieldCtx.clearRect(0, 0, ballFieldCanvas.width, ballFieldCanvas.height);
//   ballFieldCtx.drawImage(ballCanvas, x - (ballCanvas.width/2), y - (ballCanvas.height/2));
//   return ballFieldCanvas;
// }
