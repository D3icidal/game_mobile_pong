// pong.js

/* Game Variables */
var xSpeed = 5; //Horizontal speed of the ball
var ySpeed = 5; //Vertical speed of the ball
var gfxLoaded = 0; //used as a preloader, counts the already loaded items
var tkr = new Object; //used as an event listener to the Ticker

/* Define Canvas */
var canvas;
var stage;


/* Title View */
var mainImg = new Image();
var main;
var startBImg = new Image();
var startB;
var creditsBImg = new Image();
var creditsB;

var TitleView = new Container();


/* Credits */
var creditsViewImg = new Image();
var credits;


/* Game View */
var playerImg = new Image();
var player;
var ballImg = new Image();
var ball;
var cpuImg = new Image();
var cpu;
var winImg = new Image();
var win;
var loseImg = new Image();
var lose;


/* Score */
var playerScore;
var cpuScore;

/* Sound */
SoundJS.addBatch([
    {name:'hit', src:'hit.mp3', instances:1},
    {name:'playerScore', src:'playerScore.mp3', instances:1},
    {name:'enemyScore', src:'enemyScore.mp3', instances:1},
    {name:'wall', src:'wall.mp3', instances:1}]);

/* Link Canvas */
canvas = document.getElementById('Pong');
stage = new Stage(canvas);

function Main()
{

}
