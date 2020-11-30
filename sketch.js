var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1 ,car1_i, car2 , car2_i, car3,car3_i , car4 , car_4 ; 
var cars ; 
var track_i ;
var ground_i;
var form, player, game;
var bg

function preload(){
car1_i=loadImage("images/car1.png")
car2_i=loadImage("images/car2.png")
car3_i=loadImage("images/car3.png")
car4_i=loadImage("images/car4.png")
track_i=loadImage("images/track.jpg")
ground_i=loadImage("images/ground.png")
bg=loadImage("images/jail breaker.jpg")

}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
 // background(bg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
  game.end();  
  }
}
