var form,game,player;
var database;
var playerCount=0;
var gameState=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   //game
    game = new Game()
    game.getState();
    game.start();
    game.update();
}

function draw(){
    background("white");

}

