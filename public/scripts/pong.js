// pong.js

//
//    INITIALIZE
//

/* Define Canvas and Phaserf */

var game = new Phaser.Game(480, 320, Phaser.AUTO, "pongCanvas", {
  preload: preload, create: create, update: update
});


/* Game Variables */
var ball = {},
paddle = {},
score = 0,
credits = 0;

ball.speed = 5;
ball.radius = 20;
ball.RGB = [10,210,245];
ball.direction = [0,0];
console.log("Ball properties: ");
console.log(ball);

paddle.speed = 5;
paddle.RGB = [15,220,245];
paddle.height = 10;
paddle.width = 100;
console.log("Paddle properties: ");
console.log(paddle);



// drawNeonBall();
// drawBricks();
// createNeonBall(ballRGB[0], ballRGB[1], ballRGB[2]);
drawBasicBall();

function drawBasicBall(){
  var ballCanvas =
  document.createElement('CANVAS');
  var ballCtx = ballCanvas.getContext('2d');
  var bitmap;
  var sprite;

  ballCanvas.width = (ball.radius * 2) + 20;
  ballCanvas.height = (ball.radius * 2) + 20;

  var drawCircle = function(x, border){
    ballCtx.beginPath();
    ballCtx.arc(x, x, ballRadius, 0, Math.PI*2);
    ballCtx.closePath();
    ballCtx.stroke();
  }
}


if(this.game.device.desktop) {
    moveText = 'Arrow keys or WASD to move';
    shootText = 'X or Space to shoot';
}
else {
    moveText = 'Tap and hold to move';
    shootText = 'Tap to shoot';
}


function preload() {
	handleRemoteImagesOnJSFiddle();
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    // game.load.image('ball', 'img/ball.png');
    // game.load.image('paddle', 'img/paddle.png');

    //
    //  EVENT LISTENERS and KEYBOARD
    //
    cursors = this.input.keyboard.createCursorKeys();

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
    this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
    this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
    this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
}


function create(){

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
    ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
    ball.anchor.set(0.5);
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.velocity.set(150, -150);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(function(){
        alert('Game over!');
        location.reload();
    }, this);

    paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    paddle.anchor.set(0.5,1);
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;
}


function update() {
    game.physics.arcade.collide(ball, paddle);
    paddle.x = game.input.x || game.world.width*0.5;
}


// var canvas = document.getElementById("pongCanvas");
// var ctx = canvas.getContext("2d");






// ballRadius = 8,
// x = canvas.width/2,
// y = canvas.height-150,








function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
