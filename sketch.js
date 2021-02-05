var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(800,200,40,40);
  fixedRect.shapeColor="yellow";

  movingRect.velocityX=-2;
  fixedRect.velocityX=2;
  movingRect.velocityY=0;
  fixedRect.velocityY=0;
}

function draw() {
  background("red");
//movingRect.x=World.mouseX;
//movingRect.y=World.mouseY;

fill ("blue");
text ("mr.x - fr.x"+(movingRect.x-fixedRect.x),100,100);
text ("fr.x - mr.x"+(fixedRect.x-movingRect.x),100,150);
text ("mr.y - fr.y"+(movingRect.y-fixedRect.y),100,200);
text ("fr.y - mr.y"+(fixedRect.y-movingRect.y),100,250);

if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2
 && fixedRect.x-movingRect.x <= (movingRect.width+fixedRect.width)/2
 && movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2
 && fixedRect.y-movingRect.y <= (movingRect.height+fixedRect.height)/2)
 {
  fixedRect.shapeColor="blue";
}
else
{
  fixedRect.shapeColor="yellow";
}

if(movingRect.x-fixedRect.x <= (movingRect.width+fixedRect.width)/2
 && fixedRect.x-movingRect.x <= (movingRect.width+fixedRect.width)/2
 && movingRect.y-fixedRect.y <= (movingRect.height+fixedRect.height)/2
 && fixedRect.y-movingRect.y <= (movingRect.height+fixedRect.height)/2)
 {
   movingRect.velocityX = movingRect.velocityX*-1;
   fixedRect.velocityX =  fixedRect.velocityX*-1;
 }  
  drawSprites();
}