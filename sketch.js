var fixed, moving;
var gameObj1,gameObj2,gameObj3, gameObj4;


function setup() {
  createCanvas(1200,800);
  fixed = createSprite(200, 200, 50, 80);
  fixed.shapeColor = "blue"
  moving = createSprite(400,200,80,30);
  moving.shapeColor = "red"

  moving.velocityX=-5;
  //moving.velocityY = 5;

  gameObj1 = createSprite(100,100,50,50);
  gameObj2 = createSprite(200,100,50,50);
  gameObj3 = createSprite(300,100,50,50);
  gameObj4 = createSprite(400,100,50,50);

  gameObj1.shapeColor = "green";
  gameObj2.shapeColor = "green";
  gameObj3.shapeColor = "green";
  gameObj4.shapeColor = "green";

}

function draw() {
  background(0);  
  //moving.x=World.mouseX;
  //moving.y=World.mouseY;

  if(isTouching(moving,gameObj1)){

    moving.shapeColor = "yellow"
    gameObj1.shapeColor = "yellow"

  }
  else{

    moving.shapeColor = "red"
    gameObj1.shapeColor = "green"

  }


  bounceOff(moving,fixed);
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;

}
else{
  return false;

}

}

function bounceOff(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);

    }

    if(object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){

        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
      }

}