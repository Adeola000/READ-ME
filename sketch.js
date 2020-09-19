var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  
  cloud1=loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);
  backdrop = createSprite(300,80,600,200)
backdrop.shapeColor = "skyblue"
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  Obstacles=new Group()
  Clouds=new Group()
}

function draw() {
  background("brown");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  
  
  
SpawnObstacles()
SpawnClouds()  
}

function SpawnObstacles(){
  if(frameCount % 70 === 0){
var obstacle = createSprite(590,175,20,20)
obstacle.velocityX = -5
    obstacle.scale = 0.5
var R = Math.round(random(1,6))
switch(R){
case 1:obstacle.addImage(obstacle1)
 break;
case 2:obstacle.addImage(obstacle2)
 break;
case 3:obstacle.addImage(obstacle3)
 break;
case 4:obstacle.addImage(obstacle4)
 break;
case 5:obstacle.addImage(obstacle5)
 break;
 case 6:obstacle.addImage(obstacle6)
 break;
}
    obstacle.lifetime = 150
  }
}

function SpawnClouds(){
if (frameCount % 80 ===0){
  var cloud = createSprite(590,random(80,120),20,20)
  cloud.velocityX = -4
  cloud.scale = 0.8
  cloud.addImage(cloud1)
  cloud.depth = trex.depth
  trex.depth = trex.depth+1
  
   cloud.lifetime = 150
}
 
}
