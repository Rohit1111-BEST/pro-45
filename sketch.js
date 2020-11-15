var playerImg, AIImg;
var player, AI;
var angle;


function preload (){
  playerImg=loadImage("player.png");
  AIImg=loadImage("AI.png");
  }

function setup() {
  createCanvas(800,600);
  player=createSprite(200,200,50,50)
 AI=createSprite(400, 200, 50, 50);
player.addImage(playerImg);
AI.addImage(AIImg);
player.scale=0.25;
  AI.scale=0.25;
}





function draw() {
  background(6,25,55);  
  if(keyDown("w")){
 player.y=player.y-10

  }

  if(keyDown("s")){
    player.y=player.y+10
  }

  if(keyDown("d")){
    player.x=player.x+10
  }

  if(keyDown("a")){
    player.x=player.x-10
  }
  if(keyWentDown("space") ){
spawnBullet(player.x,player.y)
  }
angle = Math.atan2(mouseY-player.y, mouseX-player.x)+1.7;
  player.rotation=angle*55
 // console.log(angle) 

  if(AI.x>player.x && AI.y>player.y){
AI.rotation=300;
console.log("1")
  }
  else if(AI.x>player.x && AI.y<player.y){
    AI.rotation=225;
    console.log("1")
      }

      else if(AI.x<player.x && AI.y<player.y){
        AI.rotation=135;
        console.log("1")
          }

          else if(AI.x<player.x && AI.y>player.y){
            AI.rotation=45;
            console.log("1")
              }

  drawSprites();
}

function spawnBullet (x,y){
  var bullet=createSprite(x,y,4,4)
 
if(angle>0 && angle<0.7){
  bullet.velocityX=0
  bullet.velocityY=-2
}

else if(angle>0.7 && angle<1.4){
  bullet.velocityX=0.5
  bullet.velocityY=1.5
}

else if(angle>1.4 && angle<2.1){
  bullet.velocityX=1
  bullet.velocityY=1
}

else if(angle>2.1 && angle<2.8){
  bullet.velocityX=1.5
   bullet.velocityY=0.5
}

else if(angle>2.8 && angle<3.5){
  bullet.velocityX=2
  bullet.velocityY=0
}

else if(angle>3.5 && angle<4.2){
  bullet.velocityX=-2
  bullet.velocityY=-2
}

else if(angle>4.2 && angle<4.9){
  bullet.velocityX=-2
  bullet.velocityY=-2
}

else if(angle>4.9 && angle<5.6){
  bullet.velocityX=-2
  bullet.velocityY=-2
}

else if(angle>5.6 && angle<6.3){
  bullet.velocityX=-2
  bullet.velocityY=-2
}

  bullet.shapeColor="white"
}





function spawnAIBullet (x,y){
  var bullet=createSprite(x,y,4,4)
 


  bullet.shapeColor="orange"
}

